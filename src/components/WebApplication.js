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
import { faChartLine, faCode, faDesktop, faProjectDiagram, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import ImageSkeletonLoader from '../Layouts/Skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-3">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 class="text-white container fw-bold">
                                Elevating Your Online Presence: ADV' Comprehensive Website Development & Support Solutions
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                At ADV, we understand the paramount importance of a robust online presence in today's digital landscape. Our tailored website development and support services are meticulously crafted to help businesses establish a compelling brand identity, enhance user engagement, and drive revenue growth. Here's how we excel in delivering top-notch solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <Row className="pt-3 mt-3 mb-3 pb-3">
                    {/* <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">WHAT WE DO</h1> */}
                    <Col lg={12} data-aos="fade-right">
                        <Suspense fallback={<ImageSkeletonLoader />}>
                            <LazyImage src={Mobile} />
                        </Suspense>
                    </Col>
                    <Row className="pt-3 mt-3 mb-3 pb-3">
                        <div className="col-md-4" data-aos="fade-left">
                            <FontAwesomeIcon icon={faProjectDiagram} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                            Strategic Planning and Execution</h4>
                            <p className='lead opacity-75 text-white d-'>Our seasoned team collaborates closely with your designers, content creators, and marketing experts, employing agile methodologies for iterative development cycles aligned with your business objectives.</p>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <FontAwesomeIcon icon={faCode} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Cutting-Edge Development Techniques
                            </h4>
                            <p className='lead opacity-75 text-white'>
                                Leveraging proficiency in web development languages and frameworks like HTML/CSS, JavaScript, React, and Angular, we craft seamless user interfaces and utilize CMS like WordPress and Drupal for effortless content management.
                            </p>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <FontAwesomeIcon icon={faDesktop} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Responsive Design and Performance Optimization
                            </h4>
                            <p className='lead opacity-75 text-white '>
                                Every website we develop is meticulously designed to be responsive, ensuring flawless experiences across devices. Our continuous monitoring prioritizes performance optimization, guaranteeing lightning-fast loading times.
                            </p>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <FontAwesomeIcon icon={faShieldAlt} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Comprehensive Support and Security
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                Beyond development, we provide ongoing support and maintenance, including continuous monitoring for uptime and performance. Our security protocols fortify your website against vulnerabilities and cyber threats.
                            </p>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <FontAwesomeIcon icon={faChartLine} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Insightful Analytics and Reporting
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                Utilizing sophisticated web analytics tools like Google Analytics, we offer comprehensive insights into website traffic, user behavior, and performance metrics, empowering data-driven decision-making.
                            </p>
                        </div>
                    </Row>
                </Row>
            </Container >
        </div >
    );
};

export default WebApplication;
