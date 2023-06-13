import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer({ handleNewProject, newProject }) {
  const [bounce, setBounce] = useState('fa-brands fa-github fa-2xl');

  return (
    <div
      id='footer'
      onMouseEnter={() => setBounce('fa-brands fa-github fa-2xl fa-bounce')}
      onMouseLeave={() => setBounce('fa-brands fa-github fa-2xl')}
    >
      <p
        id='eog'
        onClick={() => {
          handleNewProject(!newProject);
        }}
      >
        Pablo García Barros
      </p>
      <Link
        className='link__github'
        to='https://github.com/pgarcia86'
        target='_blank'
      >
        <i className={bounce}></i>
      </Link>
      <p>Copyright 2023</p>
    </div>
  );
}
