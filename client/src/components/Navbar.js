import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import image from '../Images/compnayLogo.jpeg';

const Navbar = () => {
    return (
        <>
            {/* Navbar One */}
            <div id="top-continer">
                <div className="auto-div-positin-continer">
                    <div className="top-link-right">
                        <div className="contact-conitner-top">
                            <ul>
                                <li className="mobile-style-call">
                                    <a href="/contacts" id="A1" target="_blank">
                                        Contact Us
                                    </a>
                                </li>

                                <li className="Registerwithus">
                                    <a href="/register" id="A2" target="_blank" className="reg-style">
                                        Register With Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="clear">
                </div>
            </div>

            <div>
                <img src={image} className='m-1' alt='logo' style={{width: "7%"}} />
            </div>

            {/* Navbar Two */}
            <div className="nav-oter-mobile">
                <div className="nav-outer-style">
                    <nav id="ddmenu">
                        <div className="menu-icon"></div>
                        <ul style={{ overflow: 'visible', visibility: 'visible' }}>
                        <li className='mx-4 my-2'>
                                <Link to='/about'>
                                    About IPEC
                                </Link>
                            </li>
                            <li className='mx-4'>
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li className='mx-4 my-2'>
                                <Link to='/courses'>
                                    Courses
                                </Link>
                            </li>
                            <li className='mx-4 my-2'>
                                <Link to='/login'>
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;
