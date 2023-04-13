import { Link } from 'react-router-dom';
import './Project.css';
import { useState } from 'react';

export default function ProjectCard({ project, handleClick, showDetail }) {
  const [bounce, setBounce] = useState('fa-brands fa-github fa-lg');
  return (
    <div className='cardContainer'>
      {!showDetail && (
        <div className='projectCard'>
          <div
            className='card__project'
            onClick={() => {
              handleClick(!showDetail, project);
            }}
          >
            <h2>{project.title}</h2>
            <div className='tech__print'>
              {project.technologies.map((tech, i) => (
                <i key={i} className={tech}></i>
              ))}
            </div>
            <p className='truncate'>{project.description}</p>
          </div>
          <p className='card__link__p'>
            {' '}
            <Link
              className='card__link'
              to={project.urlGit}
              onMouseEnter={() =>
                setBounce('fa-brands fa-github fa-xl fa-bounce')
              }
              onMouseLeave={() => setBounce('fa-brands fa-github fa-xl')}
              target='_blank'
            >
              <i className={bounce}></i> R e p o
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
