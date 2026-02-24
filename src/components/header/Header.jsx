import React from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


import BrandLogo from './../../assets/images/e-learning-logo.png';
import './header.scss';

function Header() {
    return (
        <>
    
           <header className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"> <img src={BrandLogo} alt="brand logo" /></Link>
                        <div className="d-flex align-items-center">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>


                        <div className="collapse navbar-collapse" id="navbarText">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        About
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/courses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        Courses
                                    </NavLink>
                                </li>


                                <li className="nav-item has-submenu">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? '' : ''}`}>
                                        Pages
                                    </NavLink>

                                    <div className="submenu">
                                        <ul className="dropdown">
                                            <li><NavLink to="/our-team">Our Team</NavLink></li>
                                            <li><NavLink to="/404">404 Page</NavLink></li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                  <a href="/" className="button button-primary mt-3 mt-lg-0">Join Now 
                                    <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                                  </a>
                                </li>
                            </ul>

                         

                        </div>
                    </div>
                </nav>

            </header>
        </>
    );
}
export default Header;