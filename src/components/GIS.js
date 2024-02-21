import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import softwareServices from '../assets/images/GIS_Catrography.jpg'
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTools, faProjectDiagram, faCogs, faTasks } from '@fortawesome/free-solid-svg-icons';
import LazyImage from './LazyImage';
import ImageSkeletonLoader from '../Layouts/Skeleton';

const Gis = () => {

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
                    <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-1">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 data-aos="fade" class="text-white container fw-bold">
                                Transforming Geospatial Solutions
                            </h1>
                            <p data-aos="fade" class="lead container text-capitalize text-white opacity-75">
                                At ADV, we are committed to delivering cutting-edge GIS and mapping services tailored to meet the diverse needs of our clients across various industries. Our approach encompasses a comprehensive work structure, innovative methods, state-of-the-art tools, and a skilled team equipped with advanced technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <Row className="pt-3 mt-3 mb-3 ">
                    {/* <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">WHAT WE DO</h1> */}
                    <Col lg={6} className='mb-3' data-aos="fade-left">
                        <Suspense fallback={<ImageSkeletonLoader />}>
                            <LazyImage src={softwareServices} />
                        </Suspense>
                    </Col>
                    <Col lg={6} >
                        <div data-aos="fade-right">
                            <FontAwesomeIcon icon={faProjectDiagram} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Workflow Structure
                            </h4>
                            <p className='lead opacity-75 text-white d-'>At ADV, our teams collaborate seamlessly, integrating geospatial solutions into clients' projects with experienced GIS analysts, cartographers, data scientists, and software developers.</p>
                        </div>
                        <div data-aos="fade-right">
                            <FontAwesomeIcon icon={faTools} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Handling Techniques
                            </h4>
                            <p className='lead opacity-75 text-white'>Our methodology focuses on efficient data collection, meticulous management, robust spatial analysis, and captivating visualization using traditional surveying, remote sensing, and advanced analytics.</p>
                        </div>
                        <div data-aos="fade-right">
                            <FontAwesomeIcon icon={faCogs} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Advanced Software
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                Leveraging the latest GIS software like Esri's ArcGIS, QGIS, and open-source platforms, along with advanced remote sensing tools such as ENVI and Erdas Imagine, we ensure precise analysis and development of interactive maps.
                            </p>
                        </div>
                        <div data-aos="fade-right">
                            <FontAwesomeIcon icon={faTasks} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Performed Activities
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                Our team excels in spatial analysis, data management, programming, cartography, and effective communication, delivering insightful analyses and visually appealing maps tailored to clients' needs.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gis;

