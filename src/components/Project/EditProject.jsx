import { useState } from 'react';
import ProjectsService from '../../services/projects.service';
import './Project.css';

export default function EditProject({
  setSomethingChange,
  somethingChange,
  showDetail,
  handleClick,
  project,
  setIsEdit,
}) {
  const [form, setForm] = useState({
    title: project.title,
    description: project.description,
    secDescription: project.secDescription,
    urlGit: project.urlGit,
    technologies: [...project.technologies],
    ownCode: '',
  });
  const [beat, setBeat] = useState(' ');
  const [message, setMessage] = useState(
    'You can only create new project if have an owner code'
  );
  const [technologies, setTechnologies] = useState([...form.technologies]);
  const [image, setImage] = useState(project.image);
  const [techAux, setTechAux] = useState([]);
  const projectService = new ProjectsService();

  const handleTech = (e) => {
    e.preventDefault();
    setTechnologies([...technologies, techAux]);
  };

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append('image', e.target.files[0]);
    projectService
      .uploadFile(uploadData)
      .then((response) => {
        setImage(response.data.imageUrl);
      })
      .catch((err) => console.log('Error while uploading the image: ', err));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !form.title ||
      !form.description ||
      !form.secDescription ||
      !technologies ||
      !form.urlGit ||
      !image ||
      !form.ownCode
    ) {
      setMessage('Please complete all fields !');
      return;
    }
    projectService
      .editProject(project._id, {
        title: form.title,
        description: form.description,
        secDescription: form.secDescription,
        technologies,
        urlGit: form.urlGit,
        ownCode: form.ownCode,
        image,
      })
      .then((result) => {
        setSomethingChange(!somethingChange);
        handleClick(!showDetail, result);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.messageError) {
          setMessage(err.response.data.messageError);
        }
      });
  };
  return (
    <div>
      <div
        className='editBack'
        onMouseEnter={() => setBeat(' fa-beat-fade')}
        onMouseLeave={() => setBeat(' ')}
        onClick={() => {
          setIsEdit(false);
        }}
      >
        <i className={'fa-solid fa-arrow-left-long fa-xl' + beat}></i>
      </div>

      <div id='newProject'>
        <form className='form__input' onSubmit={submitHandler}>
          <div
            className='alert alert-primary d-flex align-items-center'
            role='alert'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='bi bi-exclamation-triangle-fill flex-shrink-0 me-2 alertImagen'
              viewBox='0 0 16 16'
              role='img'
              aria-label='Warning:'
            >
              <path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
            <div>{message}</div>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control inputForm'
              id='title'
              placeholder='name@example.com'
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <label htmlFor='title'>Project title</label>
          </div>
          <div className='form-floating mb-3'>
            <textarea
              className='form-control'
              placeholder='Leave a comment here'
              id='description'
              style={{ height: '100px' }}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            ></textarea>
            <label htmlFor='description'>Description</label>
          </div>
          <div className='form-floating mb-3'>
            <textarea
              className='form-control'
              placeholder='Leave a comment here'
              id='secDescription'
              style={{ height: '100px' }}
              value={form.secDescription}
              onChange={(e) =>
                setForm({ ...form, secDescription: e.target.value })
              }
            ></textarea>
            <label htmlFor='secDescription'>Aditional Description</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='urlGit'
              placeholder='name@example.com'
              value={form.urlGit}
              onChange={(e) => setForm({ ...form, urlGit: e.target.value })}
            />
            <label htmlFor='urlGit'>Link to GitHub</label>
          </div>
          <div className='mb-3'>
            <label htmlFor='formFile' className='form-label'>
              Select new image
            </label>
            <input
              className='form-control'
              type='file'
              id='formFile'
              onChange={(e) => {
                handleFileUpload(e);
              }}
            />
          </div>
          <div className='form-floating mb-3'>
            <input
              type='password'
              className='form-control'
              id='ownerCode'
              placeholder='name@example.com'
              value={form.ownCode}
              onChange={(e) => setForm({ ...form, ownCode: e.target.value })}
            />
            <label htmlFor='ownerCode'>Owner Code</label>
          </div>
          <button type='submit' className='btn'>
            Edit Project
          </button>
        </form>
        <form className='form__input tech__form' onSubmit={handleTech}>
          {technologies.map((tech, i) => {
            return (
              <div key={i} className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id={'editTech' + i}
                  placeholder='name@example.com'
                  value={tech}
                  onChange={(e) => setTechAux([...tech, e.target.value])}
                />
                <label htmlFor={'editTech' + i}>Technologies</label>
              </div>
            );
          })}
          <button type='submit' className='btn'>
            Refresh Techs
          </button>
        </form>
      </div>
    </div>
  );
}
