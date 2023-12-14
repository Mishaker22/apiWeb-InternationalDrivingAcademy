
import React, { Fragment } from 'react'
import MetaData from './layout/metadata';

export const Banner = () => {
    return (
        <Fragment>
            <MetaData title={"Inicio"}></MetaData>
            <div className='containerInicio'>
                <div className='fondoVector'>
                    <div className='fondoTransparent'>
                        <div className='content'>
                            <h2><span>International</span> <span className='text-danger'> Driving </span>Academy</h2>
                            <h3>¡Tu viaje comienza aqui!</h3>
                            <a href="/#about" aria-label="Ir a servicios" className="btnReservar">Reservar Ahora</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}