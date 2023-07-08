import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../Images/logo.jpeg';

const Navbar = () => {
    return (
        <>
            {/* Navbar One */}
            <div id="top-container">
                <div className="auto-div-position-container">
                    <div className="top-link-right mr-20">
                        <div className="contact-container-top">
                            <ul className="mr-4">
                                <li className="mobile-style-call">
                                    <a href="/contacts" id="A1" target="_blank" className="text-bold">
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
                <img src={logo} className="logo-image" alt="logo" style={{ width: "15%" }} />
            </div>

            <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
                <div className="container-fluid" style={{ fontSize: "0.75rem" }}>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-4">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "white", textDecoration: "none" }}>
                                    <b>Home</b>
                                </Link>
                            </li>
                            <li className="nav-item dropdown mx-4">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white", textDecoration: "none" }}>
                                    <b>About IPEC</b>
                                </a>
                                <ul className="dropdown-menu dropdown-content">
                                    <li>
                                        <Link className="dropdown-item" to="/about" style={{ color: "black", textDecoration: "none" }}>
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/vision" style={{ color: "black", textDecoration: "none" }}>
                                            Vision & Mission
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/chairman" style={{ color: "black", textDecoration: "none" }}>
                                            Chairman's Message
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/policies" style={{ color: "black", textDecoration: "none" }}>
                                            Policies & other Info
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-4">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white", textDecoration: "none" }}>
                                    <b>Exams</b>
                                </a>
                                <ul className="dropdown-menu dropdown-content">
                                    <li>
                                        <Link className="dropdown-item" to="#" style={{ color: "black", textDecoration: "none" }}>
                                            IIT-JEE ADVANCE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#" style={{ color: "black", textDecoration: "none" }}>
                                            JEE-MAINS
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link active" aria-current="page" to="/courses" style={{ color: "white", textDecoration: "none" }}>
                                    <b>Courses</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link" to="/login" style={{ color: "white", textDecoration: "none" }}>
                                    <b>Login</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link" to="/download" style={{ color: "white", textDecoration: "none" }}>
                                    <b>Downloads</b>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
