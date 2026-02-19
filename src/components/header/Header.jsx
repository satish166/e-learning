import React from "react";

import { NavLink } from "react-router-dom";

import BrandLogo from './../../assets/images/logo.png';
import facebook from './../../assets/images/facebook.svg';
import insta from './../../assets/images/insta.svg';
import twitter from './../../assets/images/twitter.svg';
import youtube from './../../assets/images/youtube.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import './header.scss';

function Header() {
    return (
        <>
    
            <header className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"> <img src={BrandLogo} alt="brand logo" /></Link>
                        <div className="d-flex align-items-center">
                            <div className="search-section d-lg-none">
                                <div className="search">
                                    <button className="search-button" type="button" class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </button>
                                </div>
                            </div>
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
                                        About us
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/classes" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        Classes
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        Services
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/team" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        Our Team
                                    </NavLink>
                                </li>

                                <li className="nav-item has-submenu">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? '' : ''}`}>
                                        Pages
                                    </NavLink>

                                    <div className="submenu">
                                        <ul className="dropdown">
                                            <li><NavLink to="/about">About us</NavLink></li>
                                            <li><NavLink to="/class-timetable">Classes timetable</NavLink></li>
                                            <li><NavLink to="/bmi-calculator">BMI calculator</NavLink></li>
                                            <li><NavLink to="/team">Our team</NavLink></li>
                                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                                            <li><NavLink to="/blog">Our blog</NavLink></li>
                                            <li><NavLink to="/404">404</NavLink></li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>

                            <div className="social-menu">
                                <div className="search-section d-none d-lg-block">
                                    <div className="search">
                                        <button className="search-button" type="button" class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </div>
                                </div>
                                <div className="social-media-icons">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src={facebook} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={twitter} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={youtube} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={insta} alt="" />
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </nav>

            </header>
            <div class=" search-modal modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
                            <button type="button" class="btn-close m-auto" data-bs-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="search-input">
                                <input type="search" placeholder="Search Here......" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;