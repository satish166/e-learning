
import carousel1 from './../../assets/images/carousel-1.jpg';
import cat1 from './../../assets/images/cat-1.jpg';
import cat2 from './../../assets/images/cat-2.jpg';
import cat3 from './../../assets/images/cat-3.jpg';
import cat4 from './../../assets/images/cat-4.jpg';
import course1 from './../../assets/images/course-1.jpg';
import course2 from './../../assets/images/course-2.jpg';
import course3 from './../../assets/images/course-3.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faAngleRight,
    faStar,
    faStarHalf,
    faUser,
    faUserTie,
    faClock
} from '@fortawesome/free-solid-svg-icons';



import './courses.scss';
import SliderComp from "../../components/slider/slider";

function Courses() {


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

                <SliderComp />
            </section>
        </>
    );
}
export default Courses;