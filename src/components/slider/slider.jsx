import React, { useMemo, useRef, useState, useEffect } from "react";

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


import './slider.scss';

function SliderComp() {

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




    const goTo = (index) => {
        // When infinite is true, you can jump directly
        sliderRef.current?.slickGoTo(index);
    };


    const sliderRef = useRef(null);
    const [active, setActive] = useState(0);
    const [reRender, setRender] = useState(true);
    const [settings, setSettings] = useState({
        dots: false,          // using custom dots (optional)
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        beforeChange: (_, next) => setActive(next % items.length),
        responsive: [
            { breakpoint: 1920, settings: { slidesToShow: 3, slidesToScroll: 1, centerPadding: "16px" } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, centerPadding: "16px" } },
        ],
    })
    // Each slide has its own content + styles



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setSettings({
                    dots: false,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "16px",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    beforeChange: (_, next) => setActive(next % items.length),
                    responsive: [
                        {
                            breakpoint: 1920,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                centerPadding: "16px",
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerPadding: "16px",
                            },
                        },
                    ],
                });
            } else {
                setSettings({
                    dots: false,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "16px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    beforeChange: (_, next) => setActive(next % items.length),
                    responsive: [
                        {
                            breakpoint: 1920,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                centerPadding: "16px",
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerPadding: "16px",
                            },
                        },
                    ],
                });
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // ← run once initially

        return () => window.removeEventListener("resize", handleResize);
    }, [items]);









    return (
        <>
            <section className="testimonial" data-aos="fade-up" data-aos-delay="400">
                <h6 className="heading-primary">Testimonial</h6>
                <h2 className="mb-5">Our Students Say!</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonial-slider">
                                <div className="slider-container">

                                    {reRender && <Slider ref={sliderRef} {...settings}>
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
                                    }


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
        </>
    );
}
export default SliderComp;