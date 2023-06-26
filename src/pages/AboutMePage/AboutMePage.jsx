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
            Mi nombre es Pablo García Barros y soy un Programador Junior Java. Desde
            joven, estudié algunos lenguajes de programación como{' '}
            <strong>C++, Delphi y Pascal</strong>. Luego decidí estudiar
            wachirimpolla y me mudé a Barcelona. Durante mis más de 10 años de
            experiencia en Hostelería, pude seguir alimentando mi constante
            deseo de aprender. Además, pude poner en práctica otra de mis
            pasiones, que es enseñar. Siempre estaba investigando y leyendo, lo
            que me permitió ser el candidato ideal para formar a los aprendices
            o ayudantes. Con el tiempo, llegué a{' '}
            <strong>liderar equipos</strong> y fue una gran experiencia. Trabajé
            en lugares como Martin Berasategui, así como en hoteles como Arts o
            Hilton, donde{' '}
            <strong>desarrollé un gran control del estrés.</strong> En equipos
            tan grandes, dependes de tus compañeros y es difícil gestionar la
            ansiedad o la frustración, pero pude superarlo y hoy puedo decir que
            el estrés no afecta a la calidad de mi trabajo.
          </p>
          <p>
            Lo cierto es que nunca dejé de tener mucho interés en el universo
            digital y, como me encanta cocinar y seguir haciéndolo en mi casa,
            decidí dar el salto y apuntarme en <strong>IronHack</strong>. Quería
            que fuera algo muy intenso porque quería probarme a mí mismo, y la
            verdad es que después de familiarizarme con tecnologías como{' '}
            <strong>ReactJS, ExpressJS, JavaScript, NodeJS</strong> y otras en
            un período tan corto, no me arrepiento en absoluto. Además, aprendí
            a ser autosuficiente en la búsqueda de información, por lo que ahora
            estoy enfocado al 100% en incorporarme al ecosistema digital.
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
            to='https://drive.google.com/file/d/1gDCknKO4QPms5le8hOtYrQscXBiHFJF0/view?usp=sharing'
            target='_blank'
          >
            <p>My CV</p>
          </Link>
        </div>
      </div>
      <div id='my__techs'>
        <img
          className='tech__logo'
                  src='https://res.cloudinary.com/dnicdtxe7/image/upload/v1687812078/LogoJava_qwinn6.png'
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
