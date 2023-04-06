import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({
	handleNewProject,
	newProject,
	setIsntHome,
	setShowDetail,
	setDetails,
}) {
	const navigate = useNavigate();

	const handleAboutme = () => {
		setIsntHome(true);
		navigate('/aboutme');
	};
	const handleHome = () => {
		setIsntHome(false);
		setShowDetail(false);
		setDetails('app');
		handleNewProject(false);
		navigate('/');
	};

	return (
		<nav className='navbar navbar-dark navbar-expand-lg background'>
			<div className='container-fluid '>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse navbar__display' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<p onClick={handleAboutme} className='nav-link about__me'>
								About me
							</p>
						</li>
						<li className='nav-item'>
							<p onClick={handleHome} className='nav-link about__me'>
								Home
							</p>
						</li>
						<li className='nav-item'>
							<p
								onClick={() => {
									handleNewProject(!newProject);
								}}
								className='nav-link newProject'
							>
								New Project
							</p>
						</li>
					</ul>
					<ul className='navbar-nav linkedIn'>
						<li>
							<Link to={'https://www.linkedin.com/in/eogimenez/'} className='nav-link' target='_blank'>
								<i className='fa-brands fa-linkedin fa-xl'></i> LinkedIn
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
