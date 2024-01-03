import React, { Fragment } from 'react'
import cs_1 from '../../images/Review1.jpeg'
import cs_2 from '../../images/Review2.jpeg'
import cs_3 from '../../images/Review3.jpeg'
export const Reviews = () => {
    return (
        <Fragment>
            <div className='containerComentarios '>
                <div className='container'>
                    <div className='containerReviews'>
                        <div className='containerInfoContact'>
                            <h1>CONTACTATE <br /> CON <br />  NOSOTROS</h1>
                            <div className='data'>
                                <p><i class="bi bi-headset"></i> (305)-491-2288</p>
                                <p><i class="bi bi-envelope-check-fill"></i> Interdrivingschool@hotmail.com</p>
                                <p><i class="bi bi-geo-fill"></i> 7625 Pines Blvd, Pembroke Pines. FL 33024</p>
                            </div>
                            <div className='links'>
                                <a href="/facebook.com"><i class="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/internationaldrivingacademy/"><i class="bi bi-instagram"></i></a>
                                <a href="/facebook.com"><i class="bi bi-whatsapp"></i></a>
                            </div>
                        </div>
                        <div className='containerReview'>
                            <div className='card'>
                                <img src={cs_1} alt="imagenCliente" />
                                <div className='cardContentReview'>
                                    <span><i class="bi bi-chat-quote-fill"></i></span>
                                    <div className='cardDetails'>
                                        <p>Melo melo caramelo, sin palabras</p>
                                        <h4>-Armando Casas</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src={cs_2} alt="imagenCliente" />
                                <div className='cardContentReview'>
                                    <span><i class="bi bi-chat-quote-fill"></i></span>
                                    <div className='cardDetails'>
                                        <p>Melo melo caramelo, sin palabras</p>
                                        <h4>-Armando Casas</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src={cs_3} alt="imagenCliente" />
                                <div className='cardContentReview'>
                                    <span><i class="bi bi-chat-quote-fill"></i></span>
                                    <div className='cardDetails'>
                                        <p>Melo melo caramelo, sin palabras. gracias a la cucha pude pasar mi examen practico y teorilo, la re buena</p>
                                        <h4>-Armando Casas</h4>
                                    </div>
                                </div>
                            </div>
                            <button><a href="/comentarios">Ver Mas Reviews</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
