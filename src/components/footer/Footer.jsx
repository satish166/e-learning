import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import {
    faFacebookF,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

import course1 from './../../assets/images/course-1.jpg';
import course2 from './../../assets/images/course-2.jpg';
import course3 from './../../assets/images/course-3.jpg';


import './footer.scss';

function Footer() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-menu">
                                <h5>Quick Link</h5>
                                <ul>

                                    <li>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                        <a href="#">FAQs & Help</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="contact-menu">
                                <h5>Contact</h5>
                                <ul>

                                    <li>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <a href="#">123 Street, New York, USA</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <a href="#">+012 345 67890</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <a href="#">info@example.com</a>
                                    </li>
                                    <li>
                                        <div className="social-menu">
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
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5>Gallery</h5>
                            <ul className="gallery">
                                <li>
                                    <img className="w-100" src={course1} alt="instructor" />
                                </li>
                                <li>
                                    <img className="w-100" src={course2} alt="instructor" />
                                </li>
                                <li>
                                    <img className="w-100" src={course3} alt="instructor" />
                                </li>
                                <li>
                                    <img className="w-100" src={course2} alt="instructor" />
                                </li>
                                <li>
                                    <img className="w-100" src={course3} alt="instructor" />
                                </li>
                                <li>
                                    <img className="w-100" src={course1} alt="instructor" />
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="news-letter">
                                <h5>Newsletter</h5>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className="your-email">
                                    <input type="text" placeholder="Your Email" />
                                    <button type="button" className="button button-primary">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-cookies">
                        <div className="row">
                            <div className="col-md-6">
                                <p>© Your Site Name, All Right Reserved. Designed By HTML Codex</p>
                                <p className="mt-3">Distributed By testTheme</p>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <div className="footer-submenu">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Cookies</a>
                                        </li>
                                        <li>
                                            <a href="#">Help</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQs</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}
export default Footer;