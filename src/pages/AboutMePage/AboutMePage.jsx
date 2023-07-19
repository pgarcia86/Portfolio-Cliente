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
      <div className='profile__title'>
        <h2>Pablo Nicolás García Barros</h2>
        <h4>Junior Java Developer</h4>
      </div>
      <div id='profile'>
        <div className='profile__me'>
          <p>
            Mi nombre es Pablo García Barros y soy Programador Junior Java. Desde
            joven me interesé en la tecnología. Estudié electrónica en el instituto
            y comencé a programar en {' '}<strong>C y C++</strong> durante los años 
            que cursé en la facultad{' '}. Luego decidí estudiar
            restauración y me recibí de Profesional Gastronómico. Durante más de 
            10 años de experiencia en Hostelería, trabajé como camarero y con el 
            tiempo, tuve la oportunidad de <strong>liderar equipos</strong>, 
            capacitar ayudantes y contratar nuevos.
          </p>
          <p>
            Siempre seguí interesado en el mundo IT y finalmente decidí dar el
            salto y me apunté en <strong>ITAcademy - Barcelona Activa</strong>
            e hice la formacion en <strong>Java Back-End con Spring Boot 
            Framework</strong>. Aprendí a hacer <strong>API REST</strong> con
            persistencia en <strong>MySQL y MongoDB</strong>, a inversigar y
            a ser perseverante.
            Me siento capacitado para incorporarme a un entorno dinámico y 
            profesional donde pueda aprender y crecer en el mundo IT.
          </p>
        </div>
        <div className='img__div'>
          <img
            className='img__me'
                      src='https://res.cloudinary.com/dnicdtxe7/image/upload/ar_1:1,b_rgb:262c35,bo_0px_solid_rgb:000000,c_fill,g_auto,r_max,w_1000/v1687805612/PabloGarciaBarros.jpg'
            alt='Profile image of Pablo Garcia Barros'
          />
          <Link
            className='link__cv'
            to='https://drive.google.com/file/d/1U8cDPgOwy3bWemKbx4-PPo8N8qbUwSYH/view?usp=sharing'
            target='_blank'
          >
            <p>My CV</p>
          </Link>
        </div>
      </div>
      <div id='my__techs'>
        <img
          className='tech__logo'
                  src='https://res.cloudinary.com/dnicdtxe7/image/upload/v1687812485/LogoJava3_kcndxv.png'
          alt='Java Logo'
        />
        <img
          className='tech__logo'
          src='https://res.cloudinary.com/dnicdtxe7/image/upload/v1687809597/LogoSpring_z57hnt.png'
          alt='Spring Logo'
        />
        <img
          className='tech__logo'
          src='https://res.cloudinary.com/dbld4vcec/image/upload/v1680623722/projects/mongo_l30dil.png'
          alt='MongoDB Logo'
        />
        <img
          className='tech__logo'
          src='https://res.cloudinary.com/dnicdtxe7/image/upload/v1687809845/LogoMySQL_jxxmcn.png'
          alt='MySQL Logo'
        />
      </div>
      <Footer />
    </>
  );
}
