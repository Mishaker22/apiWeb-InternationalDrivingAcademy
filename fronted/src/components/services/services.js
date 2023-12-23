import React, { Fragment, useEffect } from 'react'
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import MetaData from '../layout/metadata'
import cs_2 from '../../images/road-sign.png'
import cs_1 from '../../images/cone.png'
import cs_3 from '../../images/traffic-light.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../actions/services_actions'
import { useAlert } from 'react-alert'

export const Services = () => {
    const { loading, services, error } = useSelector(state => state.services)
    const alert = useAlert();
    const dispatch = useDispatch();
    const images = [cs_1, cs_2, cs_3];

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }
        dispatch(getServices());
    }, [dispatch, alert, error]);

    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title={"services"}></MetaData>
                    <div className='services'>
                        <h2 className='heading' id='txtServices'>Servicios</h2>
                        <Swiper
                            spaceBetween={30}
                            loop={true}
                            slidesPerView={'3'}
                            modules={[Autoplay, Navigation, Pagination]}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}

                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                750: {
                                    slidesPerView: 2,
                                },
                                950: {
                                    slidesPerView: 3,
                                }
                            }}
                            className='sliderContainer'
                        >
                            <div className='sliderContent'>
                                {services && services.length > 0 ? (
                                    <div className='cardWrapper swiper-wrapper'>
                                        {services.map((service, index) => (
                                            <SwiperSlide key={service._id} className='cardService swiper-slide'>
                                                <div className='image-content'>
                                                    <span className='overlay'></span>
                                                    <div className='cardImage'>
                                                        <img src={images[index % images.length]} alt={`Imagen de ${service.nombre}`} className='card-img' />
                                                    </div>
                                                </div>
                                                <div className='cardContent'>
                                                    <h2>{service.nombre}</h2>
                                                    <p>{service.descripcion}</p>
                                                    <button className="btnService"> Ver Servicio</button>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No hay servicios disponibles.</p>
                                )}
                            </div>
                            <div className='swiper-button-next swiperNvBtn'></div>
                            <div className='swiper-button-prev swiperNvBtn'></div>
                            <div className='swiper-button-pagination'> </div>
                        </Swiper>
                    </div>
                </Fragment>

            )}

        </Fragment>
    )
}
