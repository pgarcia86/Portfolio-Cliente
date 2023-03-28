export default function ProjectCard({ project, handleClick, showDetail }) {
	return (
		<>
			{!showDetail && (
				<div
					className='projectCard'
					onClick={() => {
						handleClick(!showDetail, project);
					}}
				>
					<div>
						<h3>{project.title}</h3>
							<div  className='tech__print'>
						{project.technologies.map((tech, i) => (
								<p key={i}>{tech}</p>
						))}
							</div>
						<p className='text-truncate'>{project.description}</p>
					</div>
				</div>
			)}
		</>
	);
}
