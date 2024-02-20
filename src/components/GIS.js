import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import res from '../assets/images/GS.png'
import softwareServices from '../assets/images/GIS_Catrography.jpg'
import Mobile from '../assets/images/GismaP.jpg'
import ana from '../assets/images/GIS-ADV.png'
import pms from '../assets/images/PACT.jpeg'
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';

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
                                At AdvitServices, we are committed to delivering cutting-edge GIS and mapping services tailored to meet the diverse needs of our clients across various industries. Our approach encompasses a comprehensive work structure, innovative methods, state-of-the-art tools, and a skilled team equipped with advanced technologies.
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
                        
                            <div className="pt-3 text-white"><h2 className="text-white">Process Implementation</h2>
                                <p className='lead container text-white opacity-75'>
                                    At AdvitServices, we have structured our workflow to ensure seamless integration of geospatial solutions into our clients' projects. Our teams consist of experienced GIS analysts, cartographers, data scientists, and software developers who collaborate closely to deliver exceptional results. </p>
                            </div>
                        
                    </Col>
                </Row>

                <Row className="pt-3 ">
                    <Col data-aos="zoom-out" className='order-2 order-lg-1' lg={6}>
                        
                            <div className="pt-3 text-white"><h2 className="text-white">Handling Techniques</h2>
                                <p className='lead container text-white opacity-75'>
                                    Our methodology revolves around efficient data collection, meticulous data management, robust spatial analysis, and captivating visualization. We employ a combination of traditional surveying techniques, remote sensing technologies, and advanced analytics to extract meaningful insights from spatial data.
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
                            <LazyImage src={res} />
                        </Suspense>
                    </Col>
                    <Col data-aos="fade-up" lg={6}>

                        
                            <div className="pt-3 text-white"><h2 className="text-white">Advanced Softwares</h2>
                                <p className='lead container text-white opacity-75'>
                                    AdvitServices leverages the latest GIS software, including Esri's ArcGIS suite, QGIS, and open-source platforms like GRASS GIS. Additionally, we utilize cutting-edge remote sensing software such as ENVI and Erdas Imagine for precise analysis of satellite and aerial imagery. Our proficiency extends to web mapping tools like Google Maps API, Mapbox, and Leaflet, enabling us to develop interactive and user-friendly maps.
                                </p>
                            </div>
                        
                    </Col>
                </Row>

                <Row className="pt-3 pb-3 ">
                    <Col data-aos="zoom-in" className='order-2 order-lg-1' lg={6}>
                        
                            <div className="pt-3 text-white"><h2 className="text-white">Performed Activities</h2>
                                <p className='lead container text-white opacity-75'>
                                    Our team possesses a diverse skill set encompassing spatial analysis, data management, programming, cartography, and effective communication. With a deep understanding of spatial concepts and advanced statistical techniques, we deliver insightful analyses and visually appealing maps tailored to our clients' requirements.
                                </p>
                            </div>
                        
                    </Col>
                    <Col data-aos="zoom-out" className='order-1 order-lg-2' lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={pms} />
                        </Suspense>
                    </Col>
                </Row>

                <Row className="pt-3 pb-3 ">
                    <Col data-aos="fade-left" lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={ana} />
                        </Suspense>
                    </Col>
                    <Col data-aos="fade-right" lg={6}>
                        
                            <div className="pt-3 text-white"><h2 className="text-white">Advanced Technologies</h2>
                                <p className='lead container text-white opacity-75'>
                                    AdvitServices is at the forefront of innovation, integrating advanced technologies to enhance our GIS and mapping services. We harness the power of machine learning and AI to automate repetitive tasks, conduct image classification, and develop predictive models for spatial forecasting. Additionally, our expertise in big data analytics allows us to handle large-scale geospatial datasets efficiently. We leverage cloud computing platforms such as AWS, GCP, and Azure to deliver scalable and flexible GIS solutions to our clients. Moreover, we explore emerging technologies like augmented reality (AR) and virtual reality (VR) to provide immersive visualization experiences and IoT for real-time data collection and monitoring.
                                </p>
                            </div>
                        
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default Gis;
