import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import res from '../assets/images/Lidar.jpg'
import softwareServices from '../assets/images/inov.jpg'
import Mobile from '../assets/images/BIM.jpg'
import ilus from '../assets/images/Ilus.jpg'
import pms from '../assets/images/CAD.jpg'
import Nis from './NetworkInfrastructure';

import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';


const Building = () => {

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
                    <div class="row flex-center pt-8 pt-lg-5 pb-lg-9 pb-xl-0 glassmorphism-bg-10">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 class="text-white container fw-bold">
                                Revolutionizing Building and Infrastructure Services with Geospatial Technology
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                AdvitServices is at the forefront of transforming traditional building and infrastructure services through the integration of cutting-edge geospatial technology. Our organization excels in providing comprehensive solutions at every stage of the construction lifecycle, from initial planning to ongoing maintenance. Here's how AdvitServices leverages geospatial technology to deliver unparalleled results.
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
                            <div className="pt-4 text-white"><h2 className="text-white">Innovative Work Structure</h2>
                                <p className='lead container text-white opacity-75'>
                                    AdvitServices employs a multidisciplinary team of experts, including architects, engineers, geospatial analysts, and project managers, to ensure seamless collaboration and integration of diverse skill sets.
                                    Our work structure emphasizes the use of advanced geospatial tools and methods throughout the project lifecycle, enabling us to deliver high-quality outcomes efficiently and cost-effectively.
                                </p>
                            </div>
                        </ol>
                    </Col>
                </Row>

                <Row className="pt-4 ">
                    <Col data-aos="zoom-out" className='order-2 order-lg-1' lg={6}>
                        <ol type="none" className='mt-3'>
                            <div className="pt-4 text-white"><h2 className="text-white">Advanced Methods</h2>
                                <p className='lead container text-white opacity-75'>
                                    Leveraging state-of-the-art Building Information Modeling (BIM) software, AdvitServices creates detailed digital representations of construction projects, allowing for enhanced visualization, coordination, and clash detection.
                                    Our team utilizes geospatial analysis techniques to assess site suitability, analyze environmental impacts, and optimize infrastructure design, ensuring projects meet regulatory requirements and environmental standards.
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

                <Row className="pt-4 pb-3 ">
                    <Col data-aos="fade-down" lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={res} />
                        </Suspense>
                    </Col>
                    <Col data-aos="fade-up" lg={6}>

                        <ol type="none" className='mt-3'>
                            <div className="pt-4 text-white"><h2 className="text-white">Cutting-Edge Tools</h2>
                                <p className='lead container text-white opacity-75'>
                                    AdvitServices harnesses the power of leading geospatial software platforms such as ArcGIS and LiDAR technology to collect and analyze spatial data with unparalleled accuracy and precision.
                                    We employ advanced surveying equipment, including drones equipped with high-resolution cameras and LiDAR scanners, to capture detailed aerial imagery and 3D terrain models for site assessment and monitoring.
                                </p>
                            </div>
                        </ol>
                    </Col>
                </Row>

                <Row className="pt-4 pb-3 ">
                    <Col data-aos="zoom-in" className='order-2 order-lg-1' lg={6}>
                        <ol type="none" className='mt-3'>
                            <div className="pt-4 text-white"><h2 className="text-white"> Specialized Skills</h2>
                                <p className='lead container text-white opacity-75'>
                                    Our team possesses a diverse range of specialized skills, including proficiency in CAD, BIM, and geospatial software, as well as expertise in project management, regulatory compliance, and environmental analysis.
                                    AdvitServices places a strong emphasis on continuous training and professional development to ensure our team remains at the forefront of industry trends and best practices.
                                </p>
                            </div>
                        </ol>
                    </Col>
                    <Col data-aos="zoom-out" className='order-1 order-lg-2' lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={pms} />
                        </Suspense>
                    </Col>
                </Row>

                <Row className="pt-4 pb-3 ">
                    <Col data-aos="fade-left" lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={ilus} />
                        </Suspense>
                    </Col>
                    <Col data-aos="fade-right" lg={6}>

                        <ol type="none" className='mt-3'>
                            <div className="pt-4 text-white"><h2 className="text-white">Innovative Technologies by Geospatial</h2>
                                <p className='lead container text-white opacity-75'>
                                    AdvitServices leverages Geographic Information Systems (GIS) to analyze spatial data and inform decision-making throughout the project lifecycle, from site selection and feasibility studies to infrastructure planning and asset management.
                                    We utilize remote sensing techniques, such as satellite imagery and LiDAR scanning, to monitor construction progress, assess environmental impacts, and facilitate informed decision-making.
                                </p>
                            </div>
                        </ol>
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default Building;
