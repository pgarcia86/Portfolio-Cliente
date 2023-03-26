import { useState } from 'react';
import ProjectsService from '../../services/projects.service';

export default function ProjectDetail({ project, handleClick, showDetail,SetSomethingChange, somethingChange }) {
	const [modal, setModal] = useState(false);
	const [ownCode, setOwnCode] = useState('');
	const projectService = new ProjectsService();

	const handleModal = () => {
		setModal(true);
	};

	const deleteHandler = (e) => {
		e.preventDefault();
		projectService
			.deleteProject(project._id, {ownCode: ownCode})
			.then((result) => {
				SetSomethingChange(!somethingChange)
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
					id='staticBackdrop'
					data-bs-backdrop='static'
					data-bs-keyboard='false'
					tabIndex='-1'
					aria-labelledby='staticBackdropLabel'
					aria-hidden='true'
				>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h1 className='modal-title fs-5' id='staticBackdropLabel'>
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
									<button type='submit' className='btn btn-danger' data-bs-dismiss='modal'>
										Delete
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className='card cardDetail'>
				<div className='card-body'>
					<h5 className='card-title'>{project.title}</h5>
					<p className='card-text'>{project.description}</p>
					<p className='card-text'>
						<small className='text-body-secondary'>{project.technologies}</small>
					</p>
					<>
						<p
							className='card-text'
							onClick={() => {
								handleClick(!showDetail);
							}}
						>
							Volver al menu principal
						</p>
						<p
							className='card-text'
							data-bs-toggle='modal'
							data-bs-target='#staticBackdrop'
							onClick={handleModal}
						>
							Delete this card
						</p>
					</>
				</div>
				<hr/>
				<img
					src={project.image}
					className='card-img-bottom imageDetail'
					alt={'This is the image of the project :' + project.title}
				/>
			</div>
		</>
	);
}
