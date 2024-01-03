import React, { Fragment } from 'react'
import slideUno from "../images/carrusel1.jpg"
import slideDos from "../images/carrusel2.jpg"
import slideTres from "../images/carrusel3.jpg"
import { Link } from 'react-router-dom';
import MetaData from './layout/metadata';
import { Banner } from './banner';
import { AboutUs } from './abouts_us';
import {Services} from './services/services'
import { Reviews } from './reviews/reviews';

export const Inicio = () => {
    return (
        <Fragment>
            <MetaData title={"Inicio"}></MetaData>
            <section className='containerInicio' id='banner'>
                <Banner></Banner>
            </section>
            <section id='about'>
                <AboutUs></AboutUs>
            </section>
            <section id='services'>
                <Services></Services>
            </section>
            <section id='reviews'>
                <Reviews></Reviews>
            </section>
        </Fragment>
    )
}
