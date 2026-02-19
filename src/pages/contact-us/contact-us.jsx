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
import EmbedMap from './maps/EmbedMap';
import './contact-us.scss';

function ContactUs() {
    return (
        <>
            <section className="contact-us-page">
                <div className="main-image-section">
                    <img src={aboutImage} alt="About Image" />
                    <div className="main-content">
                        <h1>Contact Us</h1>
                        <div className="breadcrumbs">
                            <ul>
                                <li><a href="/">Home <FontAwesomeIcon icon={faAngleRight} /></a></li>
                                <li className="current-page">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
               <section className="contact-us-main">
                <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="primary-heading">Our Team</h6>
                                    <h2 className="primary-subheading">TRAIN WITH EXPERTS</h2>

                                    <div className="card-section">
                                        <div className="image">
                                            <img src={location} alt="Gym Machine" />
                                        </div>
                                        <div className="content">
                                            <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                                        </div>
                                    </div>
                                    <div className="card-section">
                                        <div className="image">
                                            <img src={phoneImage} alt="Gym Machine" />
                                        </div>
                                        <div className="content">
                                            <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                                        </div>
                                    </div>
                                     <div className="card-section">
                                    <div className="image">
                                        <img src={mailIcon} alt="Gym Machine" />
                                    </div>
                                    <div className="content">
                                        <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                                    </div>
                                </div>

                                </div>
                                <div className="col-md-6">
                                    <form className="contact-form">
                                        <div className="input">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="input">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className="input">
                                            <input type="text" placeholder="Website" />
                                        </div>
                                        <div className="input">
                                            <textarea name="Comment" id="comment" placeholder="Comment"></textarea>
                                        </div>
                                        <div className="action">
                                            <a href="mailto:sandhusatish166@gmail.com" className="button button-primary w-100">Submit</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                </div>
            </section>

            <EmbedMap />
            
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
export default ContactUs;