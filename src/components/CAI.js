import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import softwareServices1 from '../assets/images/image-8.png'
import softwareServices from '../assets/images/planExe.jpg'
import Mobile from '../assets/images/implement.jpg'
import training from '../assets/images/training.jpg'
import support from '../assets/images/support.png'

import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';


const SailPoint = () => {

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
                    <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-4">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 class="text-white container fw-bold">
                                AdvitServices: Your Trusted Partner for SailPoint Development & Support
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                AdvitServices is a premier provider of comprehensive solutions for SailPoint Development & Support, specializing in Identity Governance and Administration. With a dedicated team of experts and a proven track record of success, we offer tailored services to help organizations harness the full potential of SailPoint platforms for managing user identities, access rights, and compliance processes.
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
                        
                            <div className="pt-3 text-white"><h2 className="text-white">Strategic Consulting</h2>
                                <p className='lead container text-white opacity-75'>
                                    Our experienced consultants collaborate closely with clients to understand their unique business objectives and challenges.
                                    We conduct thorough assessments to identify gaps and opportunities, devising strategic roadmaps for effective SailPoint implementation and optimization.
                                </p>
                            </div>
                        
                    </Col>
                </Row>

                <Row className="pt-3 ">
                    <Col data-aos="zoom-out" className='order-2 order-lg-1' lg={6}>
                        
                            <div className="pt-3 text-white"><h2 className="text-white"> Implementation and Customization</h2>
                                <p className='lead container text-white opacity-75'>
                                    Leveraging our deep expertise in SailPoint IdentityNow and IdentityIQ platforms, we execute seamless implementation and customization projects.
                                    Our team ensures that SailPoint solutions are tailored to meet specific organizational requirements, maximizing functionality and efficiency.
                                </p>
                            </div>
                        
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
                            <LazyImage src={softwareServices1} />
                        </Suspense>
                    </Col>
                    <Col data-aos="fade-up" lg={6}>
                        
                            <div className="pt-3 text-white"><h2 className="text-white">Governance and Compliance</h2>
                                <p className='lead container text-white opacity-75'>
                                    We assist organizations in establishing robust identity governance processes, including role-based access control and compliance frameworks.
                                    Through meticulous adherence to industry standards and regulatory mandates, such as GDPR and HIPAA, we help clients mitigate risks and ensure compliance.
                                </p>
                            </div>
                        
                    </Col>
                </Row>

                <Row className="pt-3 pb-3 ">
                    <Col data-aos="zoom-in" className='order-2 order-lg-1' lg={6}>
                        
                            <div className="pt-3 text-white"><h2 className="text-white">Ongoing Maintenance and Support</h2>
                                <p className='lead container text-white opacity-75'>
                                    AdvitServices provides continuous monitoring, updates, and support services to ensure the optimal performance and security of SailPoint solutions.
                                    Our dedicated support team is available round-the-clock to address any issues promptly and minimize downtime.
                                </p>
                            </div>
                        
                    </Col>
                    <Col data-aos="zoom-out" className='order-1 order-lg-2' lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={support} />
                        </Suspense>
                    </Col>
                </Row>

                <Row className="pt-3 pb-3 ">
                    <Col data-aos="fade-left" lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={training} />
                        </Suspense>
                    </Col>
                    <Col data-aos="fade-right" lg={6}>
                        
                            <div className="pt-3 text-white"><h2 className="text-white">Training and Knowledge Transfer</h2>
                                <p className='lead container text-white opacity-75'>
                                    We offer comprehensive training programs tailored to different user levels, empowering organizations to leverage SailPoint platforms effectively.
                                    Through hands-on workshops and knowledge transfer sessions, we equip internal teams with the skills and knowledge needed to manage and optimize SailPoint solutions independently.

                                </p>
                            </div>
                        
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default SailPoint;
