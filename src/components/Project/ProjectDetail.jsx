export default function ProjectDetail({ project, handleClick, showDetail }) {
	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{project.title}</h5>
					<p className='card-text'>{project.description}</p>
					<p className='card-text'>
						<small className='text-body-secondary'>{project.technologies}</small>
					</p>
					<p
						className='card-text'
						onClick={() => {
							handleClick(!showDetail)
						}}
					>
						Volver al menu principal
					</p>
				</div>
				<img
					src={project.image}
					className='card-img-bottom'
					alt={'This is the image of the project :' + project.title}
				/>
			</div>
		</>
	)
}
