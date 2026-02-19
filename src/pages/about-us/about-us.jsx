import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


import aboutImage from './../../assets/images/breadcrumb-bg.jpg';

import appointmentBanner from './../../assets/images/banner-bg.jpg';
import AboutImage from './../../assets/images/about-us.jpg';
import gymMachine from './../../assets/images/gym-machine.svg';
import healthFood from './../../assets/images/health-food.svg';
import heartrate from './../../assets/images/heartrate.svg';
import dumble from './../../assets/images/dumble.svg';
import phoneImage from './../../assets/images/phone-image.svg';
import location from './../../assets/images/location.svg';
import mailIcon from './../../assets/images/mail-icon.svg';
import './about-us.scss';

function AboutUs() {
    return (
        <>
            <section className="about-us">
                <div className="main-image-section">
                    <img src={aboutImage} alt="About Image" />
                    <div className="main-content">
                        <h1>About US</h1>
                        <div className="breadcrumbs">
                            <ul>
                                <li><a href="/">Home <FontAwesomeIcon icon={faAngleRight} /></a></li>
                                <li className="current-page">About</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="why-choose-us">
                    <div className="container">
                        <h6 className="primary-heading">Why choose us?</h6>
                        <h2 className="primary-subheading">PUSH YOUR LIMITS FORWARD</h2>
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="choose-card">
                                    <div className="image">
                                        <img src={gymMachine} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <h4>Modern equipment</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="choose-card">
                                    <div className="image">
                                        <img src={healthFood} alt="Health Food" />
                                    </div>
                                    <div className="card-content">
                                        <h4>Healthy nutrition plan</h4>
                                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="choose-card">
                                    <div className="image">
                                        <img src={dumble} alt="dumble" />
                                    </div>
                                    <div className="card-content">
                                        <h4>Proffesponal training plan</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="choose-card">
                                    <div className="image">
                                        <img src={heartrate} alt="heartrate" />
                                    </div>
                                    <div className="card-content">
                                        <h4>Unique to your needs</h4>
                                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    </div>
                                </div>
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

                <section className="what-we-done">
                    <div className="row mx-0">
                        <div className="col-md-6">
                            <img src={AboutImage} alt="about us" />
                        </div>
                        <div className="col-md-6">
                            <div className="what-we-done-content">
                                <h6 className="primary-heading">About Us</h6>
                                <h2 className="primary-subheading">What we have done</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
                                . aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
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
export default AboutUs;