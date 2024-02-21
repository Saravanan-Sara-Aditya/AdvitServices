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
import { faBalanceScale, faChalkboardTeacher, faCog, faLightbulb, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageSkeletonLoader from '../Layouts/Skeleton';


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
                                ADV: Your Trusted Partner for SailPoint Development & Support
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                ADV is a premier provider of comprehensive solutions for SailPoint Development & Support, specializing in Identity Governance and Administration. With a dedicated team of experts and a proven track record of success, we offer tailored services to help organizations harness the full potential of SailPoint platforms for managing user identities, access rights, and compliance processes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
            <Row className="pt-3 mt-3 mb-3 pb-3">
                    {/* <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">WHAT WE DO</h1> */}
                    <Col lg={6} data-aos="fade-left">
                        <Suspense fallback={<ImageSkeletonLoader />}>
                            <LazyImage src={softwareServices} />
                        </Suspense>
                    </Col>
                    <Col lg={6} >
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faLightbulb} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Strategic Consulting
                            </h4>
                            <p className='lead opacity-75 text-white d-'>Our experienced consultants collaborate closely with clients to understand their unique business objectives and challenges, devising strategic roadmaps for effective SailPoint implementation and optimization.</p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faCog} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Implementation and Customization
                            </h4>
                            <p className='lead opacity-75 text-white'>Leveraging deep expertise in SailPoint IdentityNow and IdentityIQ platforms, we execute seamless implementation and customization projects, tailoring SailPoint solutions to meet specific organizational requirements.</p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faBalanceScale} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Governance and Compliance
                            </h4>
                            <p className='lead opacity-75 text-white '>
                                We assist organizations in establishing robust identity governance processes, including role-based access control and compliance frameworks, ensuring meticulous adherence to industry standards and regulatory mandates like GDPR and HIPAA.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faTools} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Ongoing Maintenance and Support
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                ADV provides continuous monitoring, updates, and support services to ensure optimal performance and security of SailPoint solutions. Our dedicated support team is available round-the-clock to address any issues promptly.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faChalkboardTeacher} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Training and Knowledge Transfer
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                We offer comprehensive training programs tailored to different user levels, empowering organizations to effectively leverage SailPoint platforms. Through hands-on workshops and knowledge transfer sessions, we equip internal teams with the skills needed to manage and optimize SailPoint solutions independently.
                            </p>
                        </div>
                    </Col>
                </Row>

            </Container >
        </div>
    );
};

export default SailPoint;
