import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Footer from "../../components/Footer/Footer";
import ProjectsService from "../../services/projects.service";
import "../../App.css";
import "../../components/Project/Project.css";
import EditProject from "../../components/Project/EditProject";

export default function ProjectIdPage({
  handleIsntHome,
  isntHome,
  setSomethingChange,
  somethingChange,
  setIsntHome,
  showDetail,
  handleClick,
}) {
  const { projectId } = useParams();
  const [project, setProject] = useState("");
  const [modal, setModal] = useState(false);
  const [modalShare, setModalShare] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [beat, setBeat] = useState({
    back: "",
    share: "",
    edit: "",
    delete: "",
    bounce: "fa-brands fa-github fa-xl",
  });
  const [ownCode, setOwnCode] = useState("");
  const projectService = new ProjectsService();

  useEffect(() => {
    setIsntHome(true);
    projectService.getOneProject(projectId).then((result) => {
      setProject(result.data);
    });
  }, []);

  const handleModal = () => {
    setModal(true);
  };

  const handleShare = () => {
    setModalShare("Url copied to clipboard");
    setTimeout(() => {
      setModalShare("");
    }, 5000);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    if (!ownCode) {
      setDeleteMessage("Please write you Owner Code");
      return;
    }
    projectService
      .deleteProject(project._id, { ownCode })
      .then((result) => {
        if (result.data.messageError) {
          setDeleteMessage(result.data.messageError);
          return;
        }
        setSomethingChange(!somethingChange);
        setModal(!modal);
        handleIsntHome(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {modal && (
        <div
          className="modal fade"
          id="deleteModal"
          tabIndex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="deleteModalLabel">
                  Delete this Project
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={deleteHandler}>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="ownerCode"
                      placeholder="Owner code"
                      value={ownCode}
                      onChange={(e) => setOwnCode(e.target.value)}
                    />
                    <label htmlFor="ownerCode">Owner Code</label>
                  </div>
                  <button
                    type="submit"
                    className="modal__btn"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {project && !isEdit && (
        <div className="projectDetail">
          {modalShare && <h4 className="share__message">{modalShare}</h4>}
          <div id="projectDetail">
            <div className="iconos">
              <div
                className="eachIcon"
                onMouseEnter={() => setBeat({ ...beat, back: " fa-beat-fade" })}
                onMouseLeave={() => setBeat({ ...beat, back: " " })}
                onClick={() => {
                  handleIsntHome(!isntHome);
                }}
              >
                <i
                  className={"fa-solid fa-arrow-left-long fa-xl" + beat.back}
                ></i>
              </div>
              <div
                className="eachIcon"
                onMouseEnter={() =>
                  setBeat({ ...beat, share: " fa-beat-fade" })
                }
                onMouseLeave={() => setBeat({ ...beat, share: " " })}
                onClick={handleShare}
              >
                <CopyToClipboard
                  text={
                    "https://portfolio-eogimenez.netlify.app/" + project._id
                  }
                >
                  <i
                    className={
                      "fa-regular fa-share-from-square fa-xl" + beat.share
                    }
                  ></i>
                </CopyToClipboard>
              </div>
              <div
                className="eachIcon"
                onMouseEnter={() => setBeat({ ...beat, edit: " fa-beat-fade" })}
                onMouseLeave={() => setBeat({ ...beat, edit: " " })}
                onClick={() => setIsEdit(!isEdit)}
              >
                <i className={"fa-solid fa-pencil fa-xl" + beat.edit}></i>
              </div>
              <div
                className="eachIcon"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                onMouseEnter={() =>
                  setBeat({ ...beat, delete: " fa-beat-fade" })
                }
                onMouseLeave={() => setBeat({ ...beat, delete: " " })}
                onClick={handleModal}
              >
                <i className={"fa-solid fa-trash-can fa-xl" + beat.delete}></i>
              </div>
            </div>
            {deleteMessage && (
              <div
                className="alert alert-primary d-flex align-items-center code__error"
                role="alert"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2 alertImagen"
                  viewBox="0 0 16 16"
                  role="img"
                  aria-label="Warning:"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <div>{deleteMessage}</div>
              </div>
            )}
            <div className="cardDetail">
              <div className="card__body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p>{project.secDescription}</p>
              </div>
              <div className="card__img">
                <img
                  src={project.image}
                  className="card-img-bottom imageDetail"
                  alt={"This is the image of the project :" + project.title}
                />
                <Link
                  className="link__repo"
                  to={project.urlGit}
                  onMouseEnter={() =>
                    setBeat({
                      ...beat,
                      bounce: "fa-brands fa-github fa-xl fa-bounce",
                    })
                  }
                  onMouseLeave={() =>
                    setBeat({ ...beat, bounce: "fa-brands fa-github fa-xl" })
                  }
                  target="_blank"
                >
                  <i className={beat.bounce}></i> Repositorio
                </Link>
              </div>
            </div>
            {/* 	<div className='CardDetail'>
							<div className='card__body'>
								<h4>{project.title}</h4>
								<p>{project.description}</p>
								<p>{project.secDescription}</p>
							</div>
							<div className='card__img'>
								<img
									src={project.image}
									className='card-img-bottom imageDetail'
									alt={'This is the image of the project :' + project.title}
								/>
								<Link className='link__repo' to={project.urlGit} target='_blank'>
									Link al repositorio !
								</Link>
							</div>
						</div> */}

            <div className=" tech__print">
              {project.technologies.map((tech, i) => (
                <i key={i} className={tech}></i>
              ))}
            </div>
          </div>
        </div>
      )}
      {isEdit && (
        <EditProject
          project={project}
          setSomethingChange={setSomethingChange}
          somethingChange={somethingChange}
          showDetail={showDetail}
          handleClick={handleClick}
          setIsEdit={setIsEdit}
        />
      )}
      <Footer />
    </>
  );
}
