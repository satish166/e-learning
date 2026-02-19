import React from "react";
import BrandLogo from './../../assets/images/logo.png';
import facebook from './../../assets/images/facebook.svg';
import insta from './../../assets/images/insta.svg';
import twitter from './../../assets/images/twitter.svg';
import youtube from './../../assets/images/youtube.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import './footer.scss';

function Footer() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left-section">
                                <img src={BrandLogo} alt="" />
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                                    <div className="social-links">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img src={facebook} alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={twitter} alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={youtube} alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={insta} alt="" />
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <ul className="footer-links">
                                <li>
                                    <h6>Useful links</h6>
                                </li>
                                <li>
                                    <p><a href="#">About</a></p>
                                </li>
                                <li>
                                    <p><a href="#">Blog</a></p>
                                </li>
                                <li>
                                    <p><a href="#">Classes</a></p>
                                </li>
                                <li>
                                    <p><a href="#">Contact</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <ul className="footer-links">
                                <li>
                                    <h6>Support</h6>
                                </li>
                                <li>
                                    <p><a href="#">Login</a></p>
                                </li>
                                <li>
                                    <p><a href="">My account</a></p>
                                </li>
                                <li>
                                    <p><a href="">Subscribe</a></p>
                                </li>
                                <li>
                                    <p><a href="">Contact</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-links">
                                <h6>Tips & Guides</h6>
                                <div className="">
                                    <p className="fitness-text">Physical fitness may help prevent depression, anxiety</p>
                                    <div className="comment-section">
                                        <p>3 min read</p>
                                        <p>|</p>
                                        <p> 20 Comment</p>
                                    </div>
                                </div>
                                <div className="fitness-section">
                                    <p className="fitness-text">Fitness: The best exercise to lose belly fat and tone up...</p>
                                    <div className="comment-section">
                                        <p>3 min read</p>
                                        <p>|</p>
                                        <p> 20 Comment</p>
                                    </div>
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