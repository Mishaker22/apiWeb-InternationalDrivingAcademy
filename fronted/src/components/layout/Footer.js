import React, { Fragment } from 'react'

export const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className='container containerFooter'>
                    <div className='footerContent'>
                        <h3 id='contactH3'>Contactanos</h3>
                        <p><i class="bi bi-whatsapp"></i>(305) 491-2288</p>
                        <p><i class="bi bi-envelope-at"></i> Interdrivingschool@hotmail.com</p>
                    </div>
                    <div className='footerContent'>
                        <h3>Links</h3>
                        <ul className='list'>
                            <li><a href="/#Inicio">Home</a></li>
                            <li><a href="/#About">About Us</a></li>
                            <li><a href="/#Services">Services</a></li>
                            <li><a href="7#Contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='footerContent'>
                        <h3>Siguenos</h3>
                        <ul className='socialIcons'>
                            <li><a href=""><i class="bi bi-facebook"></i></a></li>
                            <li><a href=""><i class="bi bi-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className='footerBot'>
                    <span class="cafe"><i class="bi bi-c-circle"></i> Copyright 2023 • International Driving School • Designed by <a href='https://github.com/Mishaker22'> Mishaker</a></span>
                </div>
            </footer>
        </Fragment>
    )
}
