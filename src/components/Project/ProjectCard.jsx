import './Project.css';

export default function ProjectCard({ project, handleClick, showDetail }) {
	return (
		<div className="cardContainer">
			{!showDetail && (
				<div
					className="projectCard"
					onClick={() => {
						handleClick(!showDetail, project);
					}}
				>
					<div>
						<h2>{project.title}</h2>
						<div className="tech__print">
							{project.technologies.map((tech, i) => (
								<i key={i} className={tech}></i>
							))}
						</div>
						<p className="truncate">{project.description}</p>
					</div>
				</div>
			)}
		</div>
	);
}
