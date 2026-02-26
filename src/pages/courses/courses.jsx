import React, { useMemo, useRef, useState } from "react";

import carousel1 from './../../assets/images/carousel-1.jpg';
import cat1 from './../../assets/images/cat-1.jpg';
import cat2 from './../../assets/images/cat-2.jpg';
import cat3 from './../../assets/images/cat-3.jpg';
import cat4 from './../../assets/images/cat-4.jpg';
import course1 from './../../assets/images/course-1.jpg';
import course2 from './../../assets/images/course-2.jpg';
import course3 from './../../assets/images/course-3.jpg';
import team1 from './../../assets/images/team-1.jpg';
import team2 from './../../assets/images/team-2.jpg';
import team3 from './../../assets/images/team-3.jpg';
import team4 from './../../assets/images/team-4.jpg';
import testimonial1 from './../../assets/images/testimonial-1.jpg';
import testimonial2 from './../../assets/images/testimonial-2.jpg';
import testimonial3 from './../../assets/images/testimonial-3.jpg';
import testimonial4 from './../../assets/images/testimonial-4.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faAngleRight,
    faStar,
    faStarHalf,
    faUser,
    faUserTie,
    faClock
} from '@fortawesome/free-solid-svg-icons';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './courses.scss';

function Courses() {



    const sliderRef = useRef(null);
    const [active, setActive] = useState(0);

    // Each slide has its own content + styles
    const items = useMemo(
        () => [
            {
                id: 1,
                ClientName: "Client Name",
                image: testimonial1,
                profession: "Profession",        // yellow-200
                paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.", // optional
            },
            {
                id: 2,
                ClientName: "Client Name",
                image: testimonial2,
                profession: "Profession",
                paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.", // optional
            },
            {
                id: 3,
                ClientName: "Client Name",
                image: testimonial3,
                profession: "Profession",
                paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.", // optional
            },
            {
                id: 4,
                ClientName: "Client Name",
                image: testimonial4,
                profession: "Profession",
                paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.", // optional
            },
        ],
        []
    );



    const settings = {
        dots: false,          // using custom dots (optional)
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        beforeChange: (_, next) => setActive(next % items.length),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, centerPadding: "16px" } },
            { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "48px" } },
        ],
    };


    const goTo = (index) => {
        // When infinite is true, you can jump directly
        sliderRef.current?.slickGoTo(index);
    };

    return (
        <>
            <section className="about-us">
                <div className="main-image-section">
                    <img className="w-100" src={carousel1} alt="About IMage" />
                    <div className="main-content">
                        <h1>Courses</h1>
                        <div className="breadcrumbs">
                            <ul data-aos="fade-up" data-aos-delay="400">
                                <li><a href="/">Home <FontAwesomeIcon icon={faAngleRight} /></a></li>
                                <li className="current-page">Courses</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <section className="categories" data-aos="fade-up" data-aos-delay="400">
                    <h6 className="heading-primary">Categories</h6>
                    <h2 className="mb-5">Courses Categories</h2>
                    <div className="container">
                        <div className="row" data-aos="fade-up" data-aos-delay="400">
                            <div className="col-md-7">
                                <div className="gallery">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="image-section">
                                                <div className="image">
                                                    <img className="w-100" src={cat1} alt="brand logo" />
                                                </div>
                                                <div className="content">
                                                    <h5>Web Design</h5>
                                                    <span>49 Courses</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image-section">
                                                <div className="image">
                                                    <img className="w-100" src={cat2} alt="brand logo" />
                                                </div>
                                                <div className="content">
                                                    <h5>Graphic Design</h5>
                                                    <span>49 Courses</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image-section">
                                                <div className="image">
                                                    <img className="w-100" src={cat3} alt="brand logo" />
                                                </div>
                                                <div className="content">
                                                    <h5>Video Editing</h5>
                                                    <span>49 Courses</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="image-section h-100">
                                    <div className="image h-100">
                                        <img className="w-100 h-100" src={cat4} alt="brand logo" />
                                    </div>
                                    <div className="content">
                                        <h5>Online Marketing</h5>
                                        <span>49 Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="courses overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                    <h6 className="heading-primary">Courses</h6>
                    <h2 className="mb-5">Popular Courses</h2>

                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-md-6 col-lg-4" data-aos="fade-right" data-aos-delay="400">
                                <div className="course-card">
                                    <div className="card-image">
                                        <div className="image">
                                            <img className="w-100" src={course1} alt="brand logo" />
                                        </div>
                                        <div className="card-action">
                                            <a href="#" className="button button-primary first-action">Read More</a>
                                            <a href="#" className="button button-primary second-action">Join Now</a>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h2>$149.00</h2>
                                        <div className="ratings">
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStarHalf} />
                                                </li>
                                                <li>
                                                    <p>(4.5/5)</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3>Web Design & Development Course for Beginners</h3>
                                        <ul className="bottom-section">
                                            <li>
                                                <FontAwesomeIcon icon={faUserTie} />
                                                <p>John Doe</p>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faClock} />
                                                <p>1.49 Hrs</p>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faUser} />
                                                <p>30 Students</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
                                <div className="course-card">
                                    <div className="card-image">
                                        <div className="image">
                                            <img className="w-100" src={course2} alt="brand logo" />
                                        </div>
                                        <div className="card-action">
                                            <a href="#" className="button button-primary first-action">Read More</a>
                                            <a href="#" className="button button-primary second-action">Join Now</a>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h2>$149.00</h2>
                                        <div className="ratings">
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStarHalf} />
                                                </li>
                                                <li>
                                                    <p>(4.5/5)</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3>Web Design & Development Course for Beginners</h3>
                                        <ul className="bottom-section">
                                            <li>
                                                <FontAwesomeIcon icon={faUserTie} />
                                                <p>John Doe</p>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faClock} />
                                                <p>1.49 Hrs</p>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faUser} />
                                                <p>30 Students</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-delay="400">
                                <div className="course-card">
                                    <div className="card-image">
                                        <div className="image">
                                            <img className="w-100" src={course3} alt="brand logo" />
                                        </div>
                                        <div className="card-action">
                                            <a href="#" className="button button-primary first-action">Read More</a>
                                            <a href="#" className="button button-primary second-action">Join Now</a>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h2>$149.00</h2>
                                        <div className="ratings">
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faStarHalf} />
                                                </li>
                                                <li>
                                                    <p>(4.5/5)</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3>Web Design & Development Course for Beginners</h3>
                                        <ul className="bottom-section">
                                            <li>
                                                <FontAwesomeIcon icon={faUserTie} />
                                                <p>John Doe</p>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faClock} />
                                                <p>1.49 Hrs</p>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faUser} />
                                                <p>30 Students</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="testimonial" data-aos="fade-up" data-aos-delay="400">
                    <h6 className="heading-primary">Testimonial</h6>
                    <h2 className="mb-5">Our Students Say!</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="testimonial-slider">
                                    <div className="slider-container">

                                        <Slider ref={sliderRef} {...settings}>
                                            {items.map((item, idx) => {
                                                const isActive = idx === active;
                                                return (
                                                    <div key={item.id}>
                                                        <article
                                                            className={`slide-card ${isActive ? "is-active" : ""}`}
                                                            style={{
                                                                color: item.text,
                                                            }}
                                                        >
                                                            <div className="testimonial-image">
                                                                {item.image && (
                                                                    <div className="image-wrapper">
                                                                        <img
                                                                            src={item.image}
                                                                            alt={`${item.title} illustration`}
                                                                            className="hero"
                                                                        />
                                                                    </div>
                                                                )}

                                                                <h4 className="title">{item.ClientName}</h4>
                                                            </div>

                                                            <p className="desc">{item.profession}</p>

                                                            <div className="para">
                                                                <p className="name">{item.paragraph}</p>
                                                            </div>


                                                        </article>
                                                    </div>
                                                );
                                            })}
                                        </Slider>



                                        {/* Optional custom dots: one per item */}
                                        <div className="dots">
                                            {items.map((_, i) => (
                                                <button
                                                    key={i}
                                                    className={`dot ${i === active ? "active" : ""}`}
                                                    onClick={() => sliderRef.current?.slickGoTo(i)}
                                                    aria-label={`Go to slide ${i + 1}`}
                                                />
                                            ))}
                                        </div>



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
export default Courses;