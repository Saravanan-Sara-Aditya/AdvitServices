import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import res from '../assets/images/01petrel.jpg'
import softwareServices from '../assets/images/rawImage.jpg'
// import Mobile from '../assets/images/'
import ana from '../assets/images/sec_com.jpeg'
import pms from '../assets/images/Python-Vs-R.jpg'
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageSkeletonLoader from '../Layouts/Skeleton';
import { faGlobe, faToolbox, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';


const OilGas = () => {

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
                    <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-8">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 class="text-white container fw-bold">
                                Revolutionizing Oil and Gas Operations Through Geospatial Expertise
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                ADV stands at the forefront of innovation in the oil and gas industry, leveraging cutting-edge geospatial technologies to deliver unparalleled solutions. With a deep understanding of geospatial methods, tools, and skills, ADV transforms the way oil and gas operations are conducted, driving efficiency, accuracy, and sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <Row className="pt-3 mt-3 mb-3 pb-3">
                    {/* <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">WHAT WE DO</h1> */}
                    <Col lg={6} data-aos="fade-right">
                        <Suspense fallback={<ImageSkeletonLoader />}>
                            <LazyImage src={softwareServices} />
                        </Suspense>
                    </Col>
                    <Col lg={6} >
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faUsers} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                            Expert Work Structure
                            </h4>
                            <p className='lead opacity-75 text-white d-'>Seasoned geospatial professionals collaborate seamlessly with geologists, geophysicists, and engineers for comprehensive analysis throughout projects.</p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faGlobe} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                            Advanced Methods
                            </h4>
                            <p className='lead opacity-75 text-white'>Using GIS and remote sensing, we provide deep spatial analysis and valuable insights for site selection and environmental monitoring.</p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faToolbox} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Cutting-Edge Tools
                            </h4>
                            <p className='lead opacity-75 text-white '>
                            Leveraging ArcGIS, Petrel, and open-source platforms, we deliver tailored solutions for advanced GIS analysis and reservoir planning.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faTools} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                            Essential Skills
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                            Proficient in spatial data management, Python, and R, our team delivers precise reservoir characterization and optimization strategies.
                            </p>
                        </div>
                        
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default OilGas;
