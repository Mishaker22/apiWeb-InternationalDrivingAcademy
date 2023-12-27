import React, { Fragment } from 'react'
import MetaData from './layout/metadata';
import logo from '../images/logoneww.png';


export const AboutUs = () => {
  return (
    <Fragment>
      <MetaData title="About Us"></MetaData>
      <Fragment>
        <div className='about'>
          <div className='imgBx'>
            <div className='containerImg'><img src={logo} alt="International" /></div>
          </div>
          <div className='contentBx'>
            <h2 className='heading'>Nosotros</h2>
            <p className='text'>Somos un negocio familiar que ofrece sus servicios en los condados de Broward y Miami Dade,
              Nuestro enfoque es proveer a nuestros estudiantes el acompañamieto y asesoria de la mas alta
              calidad empezando por nuestros instructores quienes son profesionales
              dedicados a enseñar de todo su conocimiento y experiencia para convertir a nuestros
              estudiantes en conductores responsables  y ejemplares de por vida.</p>
          </div>
        </div>
      </Fragment>
    </Fragment>
  )
}
