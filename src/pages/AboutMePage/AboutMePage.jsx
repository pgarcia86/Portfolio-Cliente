import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import '../../App.css';

export default function AboutMePage({ handleIsntHome, isntHome, setIsntHome }) {
	useEffect(() => {
		setIsntHome(true);
	}, []);

	return (
		<>
			<div id="profile">
				<div className="profile__me">
					<h2>Eugenio Oscar Giménez</h2>
					<h4>Web Developer</h4>
					<p>
						Mi nombre es Eugenio Giménez, soy Web Developer y de pequeño estudie
						algunos lenguajes de programación como{' '}
						<strong>C++, Delphi y pascal,</strong> luego estudie hostelería y
						vine a vivir a Barcelona, durante los mas de 10 años de experiencia
						en hostelería pude alimentar mis ganas constantes de aprender,
						también pude llevar a la practica otra de mis pasiones que es
						enseñar, como siempre estaba investigando y leyendo, era el idóneo
						para formar a los practicantes o ayudantes, con el tiempo llegue a{' '}
						<strong>liderar equipos</strong> y fue una gran experiencia,
						trabajando en sitios como Martin Berasategui o en hoteles como Arts
						o Hilton <strong>desarrolle un gran control del estrés</strong>, ya
						que en equipos tan grandes dependes de tus compañeros y es difícil
						gestionar la ansiedad o la frustración, pero lo pude superar y hoy
						puedo decir que el estrés no afecta en la calidad de mi trabajo.
					</p>
					<p>
						Lo cierto es que nunca deje de mirar el universo digital con muchas
						ganas y como cocinar me encanta y lo voy a seguir haciendo en mi
						casa, decidí dar el salto y apuntarme en
						<strong>IronHack</strong>, quise que sea algo muy intenso porque
						quería probarme a mi mismo y la verdad que después de tocar tantas
						tecnologías como{' '}
						<strong>ReactJS, ExpressJS, JavaScript, NodeJS</strong>
						entre otras en un periodo tan corto no me arrepiento ya que aparte
						aprendí a ser autosuficiente en la búsqueda de información, por es
						hoy decido enfocarme al 100% en incorporarme al ecosistema digital.
					</p>
				</div>
				<div className="img__div">
					<img
						className="img__me"
						src="https://res.cloudinary.com/dbld4vcec/image/upload/v1680779992/projects/eugenioPortfolio_k13tul.jpg"
						alt="Profile image of Eugenio Giménez"
					/>
					<h5>Contact:</h5>
					<p>e.o.gimenez@gmail.com</p>
					<Link
						className="link__cv"
						to="https://drive.google.com/file/d/1uoixXoFdaxs7QCJ8YIi_tiB8iqv4W-WY/view?usp=sharing"
						target="_blank"
					>
						<p>Check my CV</p>
					</Link>
				</div>
			</div>
			<div id="my__techs">
				<img
					className="tech__logo"
					src="https://res.cloudinary.com/dbld4vcec/image/upload/v1680621812/projects/javascript_swgid3.png"
					alt="JavaScript Logo"
				/>
				<img
					className="tech__logo"
					src="https://res.cloudinary.com/dbld4vcec/image/upload/v1680622244/projects/nodeJS_kyl4vt.png"
					alt="NodeJS Logo"
				/>
				<img
					className="tech__logo"
					src="https://res.cloudinary.com/dbld4vcec/image/upload/v1680622371/projects/expressJS_rv4kpr.png"
					alt="ExpressJS Logo"
				/>
				<img
					className="tech__logo"
					src="https://res.cloudinary.com/dbld4vcec/image/upload/v1680622660/projects/ReactJS_e2qdv9.png"
					alt="ReactJS Logo"
				/>
				<img
					className="tech__logo"
					src="https://res.cloudinary.com/dbld4vcec/image/upload/v1680622960/projects/css_pvrila.png"
					alt="CSS Logo"
				/>
				<img
					className="tech__logo"
					src="https://res.cloudinary.com/dbld4vcec/image/upload/v1680623478/projects/html2_r2mwed.png"
					alt="HTML Logo"
				/>
				<img
					className="tech__logo"
					src="https://res.cloudinary.com/dbld4vcec/image/upload/v1680623722/projects/mongo_l30dil.png"
					alt="HTML Logo"
				/>
			</div>
			<Footer />
		</>
	);
}
