import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faLocationDot,
    faPhone,
    faEnvelope
  } from '@fortawesome/free-solid-svg-icons';
  
  import EmbedMap from "./maps/EmbedMap";
  import './contact-us.scss';

function ContactUs() {
    return (
        <>
          <section className="contact-us overflow-hidden">
            <div className="container">
              <h6 className="heading-primary">Contact Us</h6>
              <h2 className="mb-5">Contact For Any Query</h2>
              <div className="row">
                  <div className="col-lg-4" data-aos="fade-right" data-aos-delay="400">
                    <div className="get-in-touch text-start">
                      <h4 className="">Get In Touch</h4>
                      <p className="mt-2">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now.</p>
                      <div className="address">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <div className="">
                              <h6>Office</h6>
                              <p>123 Street, New York, USA</p>
                            </div>
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faPhone} />
                            <div className="">
                              <h6>Office</h6>
                              <p>123 Street, New York, USA</p>
                            </div>
                          </li>
                          <li>
                           <FontAwesomeIcon icon={faEnvelope} />
                            <div className="">
                              <h6>Office</h6>
                              <p>123 Street, New York, USA</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
                    <EmbedMap  />
                  </div>
                  <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-delay="400">
                    <div className="contact-us-form">
                      <div className="row">
                        <div className="col">
                          <input className="w-100" type="text" placeholder="Your Name" />
                        </div>
                        <div className="col">
                          <input className="w-100" type="text" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-12 my-3">
                        <input className="w-100" type="text" placeholder="Subject" />
                      </div>
                      <div className="col-12">
                        <textarea name="Message" id="message" placeholder="Message">
                        </textarea>
                      </div>
                      <div className="col-12">
                        <button className="w-100 button button-primary">Send Message</button>
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