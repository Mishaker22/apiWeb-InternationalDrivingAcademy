import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../images/logoneww.png'
import { NavLink } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/user_actions'

export const NavBar = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const [scrolled, setScrolled] = useState(false);

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success("logOut")
    }
    useEffect(() => {
        const img = new Image();
        img.src = logo;

        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <Fragment>
            <nav aria-label="Navbar International Driving School" className={scrolled ? 'scrolled' : ''}>
                <a href="/#banner" aria-label="Ir a inicio">
                    <div className='navbar-brand logo'>
                        <img src={logo} alt="International" />
                    </div>
                </a>
                <ul className="navigation">
                    <li className="nav-item">
                        <NavLink to={"/#banner"} className="nav-link">INICIO</NavLink>
                    </li>
                    <li className="nav-item">
                            <NavLink to={"/#about"} className="nav-link ">NOSOTROS</NavLink>
                    </li>
                    <li className="nav-item">
                            <NavLink to={"/#services"} className="nav-link ">SERVICIOS</NavLink>
                    </li>
                    <li className="nav-item">
                            <NavLink to={"/#contact"} className="nav-link ">CONTACTANOS</NavLink>
                    </li>
                    {/*Si estoy logueada*/}
                    {user ? (
                        <li className="nav-item dropdown">

                            <NavLink className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <figure className='avatar avatar-nav'>
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.nombre}
                                        className="rounded-circle"></img>
                                </figure>
                                <span>
                                    {user && user.nombre}
                                </span>
                            </NavLink>

                            <ul className="dropdown-menu">
                                {user && user.role === "admin" && (
                                    <li><a className="dropdown-item" href="/admin/dashboard">Adm. Servicios</a></li>
                                )}

                                <li><a className="dropdown-item" href="/MyOrders">Preinscripciones</a></li>
                                <li><a className="dropdown-item" href="/MyProfile">Profile</a></li>
                                <li><NavLink className="dropdown-item" to={"/"} onClick={logoutHandler}>Log out</NavLink></li>
                            </ul>
                        </li>
                    ) : !loading && <span><NavLink to={"/login"} className=" nav-link text-white" id='login_btn'>LOGIN</NavLink></span>}

                </ul>
            </nav>
        </Fragment>
    )
}
