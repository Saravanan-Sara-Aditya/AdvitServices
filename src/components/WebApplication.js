import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import res from '../assets/images/res.png'
import softwareServices from '../assets/images/planExe.jpg'
import Mobile from '../assets/images/fswd.png'
import ana from '../assets/images/analytics.jpeg'
import support from '../assets/images/support.png'

import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';

const WebApplication = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);

    return (
        <div className="software-services">
            {/*  */}
            <section class="py-0 overflow-hidden" id="banner" data-bs-theme="light">
                <div class="bg-holder overlay bg-img-lnd"></div>
                <div class="">
                    <div class="row flex-center pt-8 pt-lg-5 pb-lg-9 pb-xl-0 glassmorphism-bg-3">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 class="text-white container fw-bold">
                                Elevating Your Online Presence: AdvitServices' Comprehensive Website Development & Support Solutions
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                At AdvitServices, we understand the paramount importance of a robust online presence in today's digital landscape. Our tailored website development and support services are meticulously crafted to help businesses establish a compelling brand identity, enhance user engagement, and drive revenue growth. Here's how we excel in delivering top-notch solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <Row className="pt-3 ">
                    <Col data-aos="fade-right" lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={softwareServices} />
                        </Suspense>
                    </Col>
                    <Col data-aos="fade-left" lg={6}>
                        <ol type="none" className='mt-3'>
                            <div className="pt-3 text-white"><h2 className="text-white">Strategic Planning and Execution</h2>
                                <p className='lead container text-white opacity-75'>
                                    Our seasoned team collaborates closely with your designers, content creators, and marketing experts to align the website development process with your overarching business objectives.
                                    We employ agile methodologies, fostering iterative development cycles with regular feedback loops, ensuring transparency and adaptability throughout the project.
                                </p>
                            </div>
                        </ol>
                    </Col>
                </Row>

                <Row className="pt-3 ">
                    <Col data-aos="zoom-out" className='order-2 order-lg-1' lg={6}>
                        <ol type="none" className='mt-3'>
                            <div className="pt-3 text-white"><h2 className="text-white">Cutting-Edge Development Techniques</h2>
                                <p className='lead container text-white opacity-75'>
                                    Leveraging our proficiency in web development languages and frameworks such as HTML/CSS, JavaScript, React, and Angular, we craft seamless and intuitive user interfaces.
                                    Our expertise extends to content management systems (CMS) like WordPress and Drupal, enabling effortless content updates and management for your website.
                                </p>
                            </div>
                        </ol>
                    </Col>
                    <Col data-aos="zoom-in" className='order-1 order-lg-2' lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={Mobile} />
                        </Suspense>
                    </Col>
                </Row>

                <Row className="pt-3 pb-3 ">
                    <Col data-aos="fade-down" lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={res} />
                        </Suspense>
                    </Col>
                    <Col data-aos="fade-up" lg={6}>
                        <ol type="none" className='mt-3'>
                            <div className="pt-3 text-white"><h2 className="text-white"> Responsive Design and Performance Optimization</h2>
                                <p className='lead container text-white opacity-75'>
                                    Every website we develop is meticulously designed to be responsive, guaranteeing flawless experiences across various devices and screen sizes.
                                    Our continuous monitoring and maintenance services prioritize performance optimization, ensuring lightning-fast loading times and impeccable user experiences.
                                </p>
                            </div>
                        </ol>
                    </Col>
                </Row>

                <Row className="pt-3 pb-3 ">
                    <Col data-aos="zoom-in" className='order-2 order-lg-1' lg={6}>
                        <ol type="none" className='mt-3'>
                            <div className="pt-3 text-white"><h2 className="text-white">Comprehensive Support and Security</h2>
                                <p className='lead container text-white opacity-75'>
                                    Beyond development, we provide ongoing support and maintenance, including continuous monitoring for uptime and performance.
                                    Our security protocols, including the integration of security plugins and tools, fortify your website against vulnerabilities and cyber threats.
                                </p>
                            </div>
                        </ol>
                    </Col>
                    <Col data-aos="zoom-out" className='order-1 order-lg-2' lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={support} />
                        </Suspense>
                    </Col>
                </Row>

                <Row className="pt-3 pb-3 ">
                    <Col data-aos="fade-left" lg={6}>
                        <img src={ana} className='w-100  h-100' style={{ objectFit: "cover", borderRadius: "10px" }} />
                    </Col>
                    <Col data-aos="fade-right" lg={6}>
                        <ol type="none" className='mt-3'>
                            <div className="pt-3 text-white"><h2 className="text-white"> Insightful Analytics and Reporting</h2>
                                <p className='lead container text-white opacity-75'>
                                    Utilizing sophisticated web analytics tools like Google Analytics, we offer comprehensive insights into website traffic, user behavior, and performance metrics, empowering data-driven decision-making
                                </p>
                            </div>
                        </ol>
                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default WebApplication;
