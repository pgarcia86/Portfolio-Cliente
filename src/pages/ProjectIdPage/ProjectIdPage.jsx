import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ModaleShare from '../../components/ModalShare/ModalShare';
import Footer from '../../components/Footer/Footer';
import ProjectsService from '../../services/projects.service';

export default function ProjectIdPage({
	projects,
	handleIsntHome,
	isntHome,
	setSomethingChange,
	somethingChange,
	setIsntHome,
}) {
	const { projectId } = useParams();
	const [project, setProject] = useState('');
	const [modal, setModal] = useState(false);
	const [modalShare, setModalShare] = useState(false);
	const [ownCode, setOwnCode] = useState('');
	const projectService = new ProjectsService();

	useEffect(() => {
		setIsntHome(true);
		const search = projects.find((proj) => proj._id === projectId);
		setProject(search);
	}, [projects]);

	const handleModal = () => {
		setModal(true);
	};

	const handleShare = () => {
		setModalShare(!modalShare);
	};

	const deleteHandler = (e) => {
		e.preventDefault();
		projectService
			.deleteProject(projectId, { ownCode: ownCode })
			.then((result) => {
				setSomethingChange(!somethingChange);
				setModal(!modal);
				handleIsntHome(!isntHome);
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
			{project && (
				<div className='projectDetail'>
					<div className='card cardDetail'>
						<div className='card-body'>
							<h5 className='card-title'>{project.title}</h5>
							<p className='card-text'>{project.description}</p>
							<div className=' tech__print'>
								{project.technologies.map((tech, i) => (
									<p key={i} className='card-text'>
										<small className='text-body-secondary'>{tech}</small>
									</p>
								))}
							</div>
						</div>
						<div className='iconos'>
							<p
								className='card-text eachIcon'
								onClick={() => {
									handleIsntHome(!isntHome);
								}}
							>
								<i className='fa-solid fa-arrow-left-long'></i>
							</p>
							<p
								className='card-text eachIcon'
								data-bs-toggle='modal'
								data-bs-target='#shareModal'
								onClick={handleShare}
							>
								<CopyToClipboard text={'http://localhost:3000/' + project._id}>
									<i className='fa-solid fa-share-nodes'></i>
								</CopyToClipboard>
							</p>
							<p className='card-text eachIcon'>
								<i className='fa-solid fa-pencil'></i>
							</p>
							<p
								className='card-text eachIcon'
								data-bs-toggle='modal'
								data-bs-target='#deleteModal'
								onClick={handleModal}
							>
								<i className='fa-solid fa-trash-can'></i>
							</p>
						</div>

						<img
							src={project.image}
							className='card-img-bottom imageDetail'
							alt={'This is the image of the project :' + project.title}
						/>
					</div>
				</div>
			)}
			<Footer />
		</>
	);
}
