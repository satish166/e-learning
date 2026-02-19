import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


import aboutImage from './../../assets/images/breadcrumb-bg.jpg';

import latestPostImage1 from './../../assets/images/latest-1.jpg';
import latestPostImage2 from './../../assets/images/latest-2.jpg';
import latestPostImage3 from './../../assets/images/latest-3.jpg';
import latestPostImage4 from './../../assets/images/latest-4.jpg';
import latestPostImage5 from './../../assets/images/latest-5.jpg';
import sidbarBanner from './../../assets/images/sidebar-banner.jpg';
import trainerProfile from './../../assets/images/trainer-profile.jpg';
import detailIMage from './../../assets/images/class-details.jpg';
import phoneImage from './../../assets/images/phone-image.svg';
import location from './../../assets/images/location.svg';
import mailIcon from './../../assets/images/mail-icon.svg';
import './classes.scss';

function Classes() {
    return (
        <>
            <section className="classes-page">
                <div className="main-image-section">
                    <img src={aboutImage} alt="About Image" />
                    <div className="main-content">
                        <h1>Classes detail</h1>
                        <div className="breadcrumbs">
                            <ul>
                                <li><a href="/">Home <FontAwesomeIcon icon={faAngleRight} /></a></li>
                                <li><a href="/classes">Classes <FontAwesomeIcon icon={faAngleRight} /></a></li>
                                <li className="current-page">Body building</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="classes-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="yoga-image">
                                    <img className="w-100" src={detailIMage} alt="Gym Machine" />

                                </div>

                                <div className="left-content">
                                    <h2 className="primary-subheading">BODY BUILDING</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accusantium doloremque laudantium.
                                        Excepteur sint occaecat cupidatat non proident sculpa.</p>
                                </div>
                                <div className="trainer-info">
                                    <h2 className="primary-subheading">TRAINER</h2>
                                    <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur officia deserunt mollit.</p>
                                </div>
                                <div className="trainer-profile">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="profile-image">
                                                <img src={trainerProfile} alt="Trainer Profile" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="trainer-content">
                                                <div className="top-name-section">
                                                    <div className="name">
                                                        <h5 className="secondary-heading">Athart Rachel</h5>
                                                        <p>Gym Trainer</p>
                                                    </div>
                                                    <div className="social">
                                                        {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                                                    </div>
                                                </div>
                                                <div className="main-section">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus vel facilisis.</p>
                                                </div>
                                                <div className="age">
                                                    <ul>
                                                        <li><span className="bold-label">Age</span><span>32</span></li>   
                                                        <li><span className="bold-label">Weight</span><span>148lbs</span></li>   
                                                        <li><span className="bold-label">Height</span><span>10' 2``</span></li>   
                                                        <li><span className="bold-label">Occupation</span><span>no-founder</span></li>   
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-3">
                                <div className="cat">
                                    <h5 className="secondary-heading">CATEGORIES</h5>
                                    <ul>
                                        <li>
                                            <a href="#"><span>Yoga</span> <span>12</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>Runing</span> <span>32</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>Weightloss</span> <span>86</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>Cario</span> <span>25</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>Body buiding</span> <span>35</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>Nutrition</span> <span>13</span></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="latest-post">
                                    <h5 className="secondary-heading">Latest posts</h5>
                                    <div className="post">
                                        <div className="post-image">
                                            <img src={latestPostImage1} alt="Gym Machine" />
                                        </div>
                                    </div>
                                    <div className="post-list">
                                        <ul>
                                            <li>
                                                <div className="image">
                                                    <img src={latestPostImage2} alt="Gym Machine" />
                                                </div>
                                                <div className="content">
                                                    <h6>Grilled Potato and Green Bean Salad</h6>
                                                    <p>Aug 15, 2019</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="image">
                                                    <img src={latestPostImage3} alt="Gym Machine" />
                                                </div>
                                                <div className="content">
                                                    <h6>Grilled Potato and Green Bean Salad</h6>
                                                    <p>Aug 15, 2019</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="image">
                                                    <img src={latestPostImage4} alt="Gym Machine" />
                                                </div>
                                                <div className="content">
                                                    <h6>Grilled Potato and Green Bean Salad</h6>
                                                    <p>Aug 15, 2019</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="image">
                                                    <img src={latestPostImage5} alt="Gym Machine" />
                                                </div>
                                                <div className="content">
                                                    <h6>Grilled Potato and Green Bean Salad</h6>
                                                    <p>Aug 15, 2019</p>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="sidbar-banner mt-5">
                                        <img src={sidbarBanner} alt="Gym Machine" />
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
export default Classes;