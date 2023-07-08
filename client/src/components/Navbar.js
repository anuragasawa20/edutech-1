import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import image from '../Images/logo.jpeg';

const Navbar = () => {
    return (
        <>
            {/* Navbar One */}
            <div id="top-container">
                <div className="auto-div-position-container">
                    <div className="top-link-right">
                        <div className="contact-container-top">
                            <ul>
                                <li className="mobile-style-call">
                                    <a href="/contacts" id="A1" target="_blank">
                                        Contact Us
                                    </a>
                                </li>

                                <li className="register-with-us">
                                    <a href="/register" id="A2" target="_blank" className="reg-style">
                                        Register With Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>

            <div>
                <img src={image} className="logo-image" alt="logo" style={{ width: "15%" }} />
            </div>

            <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
                <div className="container-fluid" style={{ fontSize: "0.75rem" }} >
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "white", textDecoration: "none" }}>
                                    <b>Home</b>
                                </Link>
                            </li>
                            <li className="nav-item dropdown mx-5">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white", textDecoration: "none" }}>
                                    <b>About IPEC</b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/about" style={{ color: "black", textDecoration: "none" }}>
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/visionmission" style={{ color: "black", textDecoration: "none" }}>
                                            Vision & Mission
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/courses" style={{ color: "white", textDecoration: "none" }}>
                                    <b>Courses</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link" to="/login" style={{ color: "white", textDecoration: "none" }}>
                                    <b>Login</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link" to="/download" style={{ color: "white", textDecoration: "none" }}>
                                    <b>Downloads</b>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
};

export default Navbar;
