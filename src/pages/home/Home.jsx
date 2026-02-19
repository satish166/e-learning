import React from "react";

import carousel1 from './../../assets/images/carousel-1.jpg';
import carousel2 from './../../assets/images/carousel-2.jpg';
import about from './../../assets/images/about.jpg';
import cat1 from './../../assets/images/cat-1.jpg';
import cat2 from './../../assets/images/cat-2.jpg';
import cat3 from './../../assets/images/cat-3.jpg';
import cat4 from './../../assets/images/cat-4.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGlobe, faHouseChimney, faBookOpen, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './home.scss';
function HomePage() {
    return (
        <>
            <div className="homepage">
                <section className="main-banner">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="banner-item">
                                    <div className="banner-image">
                                        <img className="w-100" src={carousel1} alt="brand logo" />
                                    </div>
                                    <div className="banner-content">
                                        <div v className="banner-main">
                                            <h1>Get Educated Online From Your Home</h1>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Vero molestias nesciunt numquam placeat,
                                                facere mollitia ratione ipsa soluta repellendus quibusdam saepe minus laudantium,
                                                at neque quaerat voluptatum voluptatem corporis omnis!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="banner-item">
                                    <div className="banner-image">
                                        <img className="w-100" src={carousel2} alt="brand logo" />
                                    </div>
                                    <div className="banner-content">
                                        <div v className="banner-main">
                                            <h1>Get Educated Online From Your Home</h1>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Vero molestias nesciunt numquam placeat,
                                                facere mollitia ratione ipsa soluta repellendus quibusdam saepe minus laudantium,
                                                at neque quaerat voluptatum voluptatem corporis omnis!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="carousel-action">
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="service-content">
                                    <div className="service-image">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </div>
                                    <h4>Skilled Instructors</h4>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="service-content">
                                    <div className="service-image">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </div>
                                    <h4>Online Classes</h4>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="service-content">
                                    <div className="service-image">
                                        <FontAwesomeIcon icon={faHouseChimney} />
                                    </div>
                                    <h4>Home Projects</h4>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
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


                <section className="about-us">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="about-image">
                                    <img className="w-100" src={about} alt="brand logo" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-content">
                                    <h6 className="heading-secondary">About Us</h6>
                                    <h2>Welcome to eLEARNING</h2>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <div className="about-list">
                                        <ul>
                                            <li><p><FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                                                Skilled Instructors</p>
                                            </li>
                                            <li><p><FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                                                Skilled Instructors</p>
                                            </li>
                                            <li><p><FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                                                Skilled Instructors</p>
                                            </li>
                                            <li><p><FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                                                Skilled Instructors</p>
                                            </li>
                                            <li><p><FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                                                Skilled Instructors</p>
                                            </li>
                                            <li><p><FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                                                Skilled Instructors</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="action">
                                        <a href="#" className="button button-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="categories">
                    <h6 className="heading-primary">Categories</h6>
                    <h2 className="mb-5">Courses Categories</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="gallery">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="image">
                                                <img className="w-100" src={cat1} alt="brand logo" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image">
                                                <img className="w-100" src={cat2} alt="brand logo" />

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image">
                                                <img className="w-100" src={cat3} alt="brand logo" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="image">
                                    <img className="w-100 h-100" src={cat4} alt="brand logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default HomePage;