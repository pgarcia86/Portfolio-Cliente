export default function ProjectCard({ project, handleClick, showDetail }) {
	return (
		<>
			{!showDetail && (
				<div
					className='card projectCard'
					onClick={() => {
						handleClick(!showDetail, project);
					}}
				>
					<div className=' imageCard'>
						<img
							src={project.image}
							className='card-img imageCard'
							alt={'This is the image of the project :' + project.title}
						/>
					</div>
					<div className='card-body'>
						<h3 className='card-title'>{project.title}</h3>
						<h4 className='card-subtitle mb-2 text-body-secondary'>{project.technologies}</h4>
						<p className='card-text'>{project.description}</p>
					</div>
				</div>
			)}
		</>
	);
}
