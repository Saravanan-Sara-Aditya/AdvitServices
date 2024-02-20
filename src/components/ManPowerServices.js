import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faNetworkWired, faCogs, faShieldAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import softwareServices from '../assets/images/staff_Network.jpg'
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';

const ManPowerServices = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, [AOS]);

    return (
        <div className="software-services">
            {/*  */}
            <section class="py-0 overflow-hidden" id="banner" data-bs-theme="light">
                <div class="bg-holder overlay bg-img-lnd"></div>
                <div class="">
                    <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-2">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 class="text-white container fw-bold">
                                AdvitServices: Your Strategic Partner in Talent Acquisition and Staffing Solutions
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                In today's competitive business landscape, finding the right talent is crucial for the success of any organization. AdvitServices emerges as a beacon of excellence, offering comprehensive talent acquisition and staffing solutions tailored to meet the diverse needs of businesses across industries. With a commitment to excellence and a focus on building long-term partnerships, AdvitServices stands ready to elevate your workforce to new heights.
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
                        
                            <div className="pt-3 text-white"><h2 className="text-white">Staff Recruiting</h2>
                                <p className='lead container text-white opacity-75'>
                                    In an increasingly competitive marketplace, having the right talent can make all the difference between success and failure. With AdvitServices as your trusted partner, you can gain access to top-tier talent, streamline your recruitment process, and build a high-performing workforce that propels your business forward. Discover the AdvitServices advantage today and unlock the full potential of your workforce.
                                </p>
                            </div>
                        
                    </Col>
                </Row>

                <Row className="pt-3 ">
                    <Col data-aos="zoom-out" className='order-2 order-lg-1' lg={12}>
                        
                            <div className="pt-3 text-white"><h2 className="text-center text-white">Who We Are</h2>
                                <p className='lead container text-white opacity-75'>
                                    AdvitServices is a leading provider of manpower solutions, specializing in recruitment, staffing, and workforce management services. With years of experience and a team of seasoned professionals, we have earned a reputation for excellence in delivering tailored solutions that address the unique staffing challenges faced by our clients.
                                </p>
                            </div>
                        
                    </Col>
                </Row>
                <div class="bg-all pb-3 white__bg-opacity-50">
                    <div class="container">
                        <h2 className="text-white text-center mt-3">What We Do</h2>
                    </div>
                    <div data-aos="fade-up" className='d-flex flex-wrap justify-content-center'>
                        <div className="text-center p-4">
                            <FontAwesomeIcon icon={faLightbulb} size={'3x'} color="lightblue" />
                            <h3 className='text-white'>Industry Expertise</h3>
                        </div>
                        <div className="text-center p-4">
                            <FontAwesomeIcon icon={faNetworkWired} size={'3x'} color="lightblue" />
                            <h3 className='text-white'>Extensive Network</h3>
                        </div>
                        <div className="text-center p-4">
                            <FontAwesomeIcon icon={faCogs} size={'3x'} color="lightblue" />
                            <h3 className='text-white'>Flexible Solution</h3>
                        </div>
                        <div className="text-center p-4">
                            <FontAwesomeIcon icon={faShieldAlt} size={'3x'} color="lightblue" />
                            <h3 className='text-white'>Quality Assurance</h3>
                        </div>
                        <div className="text-center p-4">
                            <FontAwesomeIcon icon={faHandshake} size={'3x'} color="lightblue" />
                            <h3 className='text-white'>Strategic Partnership</h3>
                        </div>
                    </div>
                </div>

            </Container >
        </div>
    );
};

export default ManPowerServices;
