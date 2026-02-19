import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


import aboutImage from './../../assets/images/breadcrumb-bg.jpg';
import appointmentBanner from './../../assets/images/banner-bg.jpg';
import service1 from './../../assets/images/services-1.jpg';
import service2 from './../../assets/images/services-2.jpg';
import service3 from './../../assets/images/services-3.jpg';
import service4 from './../../assets/images/services-4.jpg';

import phoneImage from './../../assets/images/phone-image.svg';
import location from './../../assets/images/location.svg';
import mailIcon from './../../assets/images/mail-icon.svg';
import './services.scss';

function Services() {
    return (
        <>
            <section className="services-page">
                <div className="main-image-section">
                    <img src={aboutImage} alt="About Image" />
                    <div className="main-content">
                        <h1>Services</h1>
                        <div className="breadcrumbs">
                            <ul>
                                <li><a href="/">Home <FontAwesomeIcon icon={faAngleRight} /></a></li>
                                <li className="current-page">Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="what-we-do">
                    <div className="container">
                        <h6 className="primary-heading">What we do?</h6>
                        <h2 className="primary-subheading">PUSH YOUR LIMITS FORWARD</h2>

                        <div className="grid-details">
                            <div className="image-section">
                                <img src={service1} alt="Service 1" />
                            </div>
                            <div className="service-content">
                                <h5>Personal training</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
                                <a href="#">Explore</a>
                            </div>
                            <div className="image-section">
                                <img src={service2} alt="Service 2" />
                            </div>
                            <div className="service-content">
                                <h5>Personal training</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
                                <a href="#">Explore</a>
                            </div>
                            <div className="service-content">
                                <h5>Personal training</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
                                <a href="#">Explore</a>
                            </div>
                            <div className="image-section">
                                <img src={service3} alt="Service 3" />
                            </div>
                            <div className="service-content">
                                <h5>Personal training</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
                                <a href="#">Explore</a>
                            </div>
                            <div className="image-section">
                                <img src={service4} alt="Service 4" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="appointment">
                    <div className="appointment-image">
                        <img src={appointmentBanner} alt="banner image" />
                    </div>
                    <div className="appointment-content">
                        <h2>registration now to get more deals</h2>
                        <h4>Where health, beauty and fitness meet.</h4>
                        <a href="#" className="button button-outline-primary">appointment</a>
                    </div>
                </section>

                <section className="our-plans">
                    <div className="container">
                        <h6 className="primary-heading">Our plans</h6>
                        <h2 className="primary-subheading">CHOOSE YOUR FITNESS PLAN</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="plan-card">
                                    <h4>Class drop-in</h4>
                                    <h2>$ 39.0</h2>
                                    <h6>SINGLE CLASS</h6>
                                    <ul>
                                        <li><p>Free riding</p></li>
                                        <li><p>Unlimited equipments</p></li>
                                        <li><p>Personal trainer</p></li>
                                        <li><p>Weight losing classes</p></li>
                                        <li><p>Month to mouth</p></li>
                                        <li><p>No time restriction</p></li>
                                    </ul>
                                    <div className="action">
                                        <a href="#" className="button button-primary">Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="plan-card">
                                    <h4>12 Month unlimited</h4>
                                    <h2>$ 99.0</h2>
                                    <h6>SINGLE CLASS</h6>
                                    <ul>
                                        <li><p>Free riding</p></li>
                                        <li><p>Unlimited equipments</p></li>
                                        <li><p>Personal trainer</p></li>
                                        <li><p>Weight losing classes</p></li>
                                        <li><p>Month to mouth</p></li>
                                        <li><p>No time restriction</p></li>
                                    </ul>
                                    <div className="action">
                                        <a href="#" className="button button-primary">Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="plan-card">
                                    <h4>6 Month unlimited</h4>
                                    <h2>$ 59.0</h2>
                                    <h6>SINGLE CLASS</h6>
                                    <ul>
                                        <li><p>Free riding</p></li>
                                        <li><p>Unlimited equipments</p></li>
                                        <li><p>Personal trainer</p></li>
                                        <li><p>Weight losing classes</p></li>
                                        <li><p>Month to mouth</p></li>
                                        <li><p>No time restriction</p></li>
                                    </ul>
                                    <div className="action">
                                        <a href="#" className="button button-primary">Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>

                </section>

                <div className="contact-location">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-section">
                                    <div className="image">
                                        <img src={location} alt="Gym Machine" />
                                    </div>
                                    <div className="content">
                                        <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-section">
                                    <div className="image">
                                        <img src={phoneImage} alt="Gym Machine" />
                                    </div>
                                    <div className="content">
                                        <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-section">
                                    <div className="image">
                                        <img src={mailIcon} alt="Gym Machine" />
                                    </div>
                                    <div className="content">
                                        <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default Services;