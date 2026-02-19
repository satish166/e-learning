import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


import aboutImage from './../../assets/images/breadcrumb-bg.jpg';
import appointmentBanner from './../../assets/images/banner-bg.jpg';
import service1 from './../../assets/images/services-1.jpg';
import service2 from './../../assets/images/services-2.jpg';
import service3 from './../../assets/images/services-3.jpg';
import service4 from './../../assets/images/services-4.jpg';
import team1 from './../../assets/images/team-1.jpg';
import team2 from './../../assets/images/team-2.jpg';
import team3 from './../../assets/images/team-3.jpg';
import phoneImage from './../../assets/images/phone-image.svg';
import location from './../../assets/images/location.svg';
import mailIcon from './../../assets/images/mail-icon.svg';
import './our-team.scss';

function OurTeam() {
    return (
        <>
            <section className="our-team-page">
                <div className="main-image-section">
                    <img src={aboutImage} alt="About Image" />
                    <div className="main-content">
                        <h1>Our Team</h1>
                        <div className="breadcrumbs">
                            <ul>
                                <li><a href="/">Home <FontAwesomeIcon icon={faAngleRight} /></a></li>
                                <li className="current-page">Our Team</li>
                            </ul>
                        </div>
                    </div>
                </div>
               <section className="our-team">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-start  flex-wrap">
                        <div className="headings">
                            <h6 className="primary-heading">Our Team</h6>
                            <h2 className="primary-subheading">TRAIN WITH EXPERTS</h2>
                        </div>
                        <div className="action">
                            <a href="#" className="button button-outline-primary">Appointment</a>
                        </div>
                    </div>
                    <div className="our-team-details">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="classes-card">
                                    <div className="image">
                                        <img src={team1} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="classes-card">
                                    <div className="image">
                                        <img src={team2} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="classes-card">
                                    <div className="image">
                                        <img src={team3} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="classes-card">
                                    <div className="image">
                                        <img src={team1} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="classes-card">
                                    <div className="image">
                                        <img src={team2} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="classes-card">
                                    <div className="image">
                                        <img src={team3} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="classes-card">
                                    <div className="image">
                                        <img src={team1} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="classes-card">
                                    <div className="image">
                                        <img src={team2} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="classes-card">
                                    <div className="image">
                                        <img src={team3} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
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
export default OurTeam;