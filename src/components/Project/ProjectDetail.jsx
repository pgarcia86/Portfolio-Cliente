import { useState } from 'react';
import ProjectsService from '../../services/projects.service';
import ModaleShare from '../ModalShare/ModalShare';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './Project.css';
import EditProject from './EditProject';

export default function ProjectDetail({
	project,
	handleClick,
	showDetail,
	setSomethingChange,
	somethingChange,
}) {
	const [modal, setModal] = useState(false);
	const [modalShare, setModalShare] = useState(false);
	const [ownCode, setOwnCode] = useState('');
	const [isEdit, setIsEdit] = useState(false);
	const [beat, setBeat] = useState({
		back: '',
		share: '',
		edit: '',
		delete: '',
	});
	const projectService = new ProjectsService();

	const handleModal = () => {
		setModal(true);
	};

	const handleShare = () => {
		setModalShare(!modalShare);
	};

	const deleteHandler = (e) => {
		e.preventDefault();
		projectService
			.deleteProject(project._id, { ownCode: ownCode })
			.then((result) => {
				setSomethingChange(!somethingChange);
				setModal(!modal);
				handleClick(!showDetail);
			})
			.catch((err) => console.log(err));
	};
	return (
		<>
			{modal && (
				<div
					className='modal fade'
					id='deleteModal'
					tabIndex='-1'
					aria-labelledby='deleteModalLabel'
					aria-hidden='true'
				>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h1 className='modal-title fs-5' id='deleteModalLabel'>
									Delete this Project
								</h1>
								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'
								></button>
							</div>
							<div className='modal-body'>
								<form onSubmit={deleteHandler}>
									<div className='form-floating mb-3'>
										<input
											type='password'
											className='form-control'
											id='ownerCode'
											placeholder='Owner code'
											value={ownCode}
											onChange={(e) => setOwnCode(e.target.value)}
										/>
										<label htmlFor='ownerCode'>Owner Code</label>
									</div>
									<button type='submit' className='modal__btn' data-bs-dismiss='modal'>
										<i className='fa-solid fa-trash-can'></i>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
			{modalShare && <ModaleShare />}
			{!isEdit && (
				<div id='projectDetail'>
					<div className='iconos'>
						<div
							className='eachIcon'
							onMouseEnter={() => setBeat({ ...beat, back: ' fa-beat-fade' })}
							onMouseLeave={() => setBeat({ ...beat, back: ' ' })}
							onClick={() => {
								handleClick(!showDetail);
							}}
						>
							<i className={'fa-solid fa-arrow-left-long fa-xl' + beat.back}></i>
						</div>
						<div
							className='eachIcon'
							data-bs-toggle='modal'
							data-bs-target='#shareModal'
							onMouseEnter={() => setBeat({ ...beat, share: ' fa-beat-fade' })}
							onMouseLeave={() => setBeat({ ...beat, share: ' ' })}
							onClick={handleShare}
						>
							<CopyToClipboard text={'http://localhost:3000/' + project._id}>
								<i className={'fa-regular fa-share-from-square fa-xl' + beat.share}></i>
							</CopyToClipboard>
						</div>
						<div
							className='eachIcon'
							onMouseEnter={() => setBeat({ ...beat, edit: ' fa-beat-fade' })}
							onMouseLeave={() => setBeat({ ...beat, edit: ' ' })}
							onClick={() => setIsEdit(!isEdit)}
						>
							<i className={'fa-solid fa-pencil fa-xl' + beat.edit}></i>
						</div>
						<div
							className='eachIcon'
							data-bs-toggle='modal'
							data-bs-target='#deleteModal'
							onMouseEnter={() => setBeat({ ...beat, delete: ' fa-beat-fade' })}
							onMouseLeave={() => setBeat({ ...beat, delete: ' ' })}
							onClick={handleModal}
						>
							<i className={'fa-solid fa-trash-can fa-xl' + beat.delete}></i>
						</div>
					</div>
					<div className='CardDetail'>
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
							<Link className='link__repo' to={project.urlGit}>Link al repositorio !</Link>
						</div>
					</div>

					<div className=' tech__print'>
						{project.technologies.map((tech, i) => (
							<i key={i} className={tech}></i>
						))}
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
		</>
	);
}
