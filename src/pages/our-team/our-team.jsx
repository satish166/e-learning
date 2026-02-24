import React from "react";
import carousel1 from './../../assets/images/carousel-1.jpg';
import team1 from './../../assets/images/team-1.jpg';
import team2 from './../../assets/images/team-2.jpg';
import team3 from './../../assets/images/team-3.jpg';
import team4 from './../../assets/images/team-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faAngleRight,
    faStar,
    faStarHalf,
    faUser,
    faUserTie,
    faClock
} from '@fortawesome/free-solid-svg-icons';

import {
    faFacebookF,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';


import './our-team.scss';

function OurTeam() {
    return (
        <>
            <section className="our-team">
                <div className="main-image-section">
                    <img className="w-100" src={carousel1} alt="About IMage" />
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

                <section className="instructors">
                    <h6 className="heading-primary">Instructors</h6>
                    <h2 className="mb-5">Expert Instructors</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team1} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team2} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team3} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team4} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team1} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team2} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team3} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team4} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team1} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team3} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team2} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3">
                                <div className="instructor-card">
                                    <div className="instructor-image">
                                        <div className="image">
                                            <img className="w-100" src={team4} alt="instructor" />
                                        </div>
                                        <div className="instructor-social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="instructor-content">
                                        <h4>Instructor Name</h4>
                                        <span className="mt-2">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
}
export default OurTeam;