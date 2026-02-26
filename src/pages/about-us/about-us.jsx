import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faGraduationCap, faGlobe, faHouseChimney, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';


import carousel1 from './../../assets/images/carousel-1.jpg';
import team1 from './../../assets/images/team-1.jpg';
import team2 from './../../assets/images/team-2.jpg';
import team3 from './../../assets/images/team-3.jpg';
import team4 from './../../assets/images/team-4.jpg';

import './about-us.scss';

function AboutUs() {
    return (
        <>
            <section className="about-us">
                <div className="main-image-section">
                    <img className="w-100" src={carousel1} alt="About IMage" />
                    <div className="main-content">
                        <h1>About US</h1>
                        <div className="breadcrumbs">
                            <ul data-aos="fade-up" data-aos-delay="400">
                                <li><a href="/">Home <FontAwesomeIcon icon={faAngleRight} /></a></li>
                                <li className="current-page">About</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="services" data-aos="fade-up" data-aos-delay="400">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-content">
                                    <div className="service-image">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </div>
                                    <h4>Skilled Instructors</h4>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-content">
                                    <div className="service-image">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </div>
                                    <h4>Online Classes</h4>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-content">
                                    <div className="service-image">
                                        <FontAwesomeIcon icon={faHouseChimney} />
                                    </div>
                                    <h4>Home Projects</h4>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-content">
                                    <div className="service-image">
                                        <FontAwesomeIcon icon={faBookOpen} />
                                    </div>
                                    <h4>Book Library</h4>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="instructors">
                    <h6 className="heading-primary">Instructors</h6>
                    <h2 className="mb-5">Expert Instructors</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3" data-aos="fade-right" data-aos-delay="400">
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
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
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
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
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
                            <div className="col-md-6 col-lg-3" data-aos="fade-left" data-aos-delay="400">
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
export default AboutUs;