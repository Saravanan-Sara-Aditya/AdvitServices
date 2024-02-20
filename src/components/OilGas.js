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
                                AdvitServices stands at the forefront of innovation in the oil and gas industry, leveraging cutting-edge geospatial technologies to deliver unparalleled solutions. With a deep understanding of geospatial methods, tools, and skills, AdvitServices transforms the way oil and gas operations are conducted, driving efficiency, accuracy, and sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <Row className="pt-3 ">
                    <Col data-aos="fade-right" lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <div className='bg-white'>
                            <LazyImage src={softwareServices} />
                            </div>
                        </Suspense>
                    </Col>
                    <Col data-aos="fade-left" lg={6}>
                        
                            <div className="pt-3 text-white"><h2 className="text-white">Expert Work Structure</h2>
                                <p className='lead container text-white opacity-75'>
                                    AdvitServices operates with a team of seasoned geospatial professionals who collaborate seamlessly with geologists, geophysicists, and engineers.
                                    Our experts bring diverse skill sets to the table, ensuring comprehensive analysis and informed decision-making at every stage of the exploration and production lifecycle.
                                </p>
                            </div>
                        
                    </Col>
                </Row>

                <Row className="pt-3 ">
                    <Col data-aos="zoom-out" className='order-2 order-lg-1' lg={6}>
                        
                            <div className="pt-3 text-white"><h2 className="text-white"> Advanced Methods</h2>
                                <p className='lead container text-white opacity-75'>
                                    Leveraging Geographic Information Systems (GIS), AdvitServices conducts in-depth spatial analysis, mapping, and visualization of geological and geophysical data.
                                    Through remote sensing techniques, including satellite imagery and aerial surveys, we provide valuable insights into surface features and environmental impacts, aiding in site selection and environmental monitoring.
                                </p>
                            </div>
                        
                    </Col>
                    <Col data-aos="zoom-in" className='order-1 order-lg-2' lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={"https://media.istockphoto.com/id/533552151/photo/oil-rig.jpg?b=1&s=612x612&w=0&k=20&c=_KQgOK-k4cBbO-HB1zhFgYI3UglbPVM039la5aqibC4="} />
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

                        
                            <div className="pt-3 text-white"><h2 className="text-white"> Cutting-Edge Tools</h2>
                                <p className='lead container text-white opacity-75'>
                                    AdvitServices harnesses industry-leading software packages such as ArcGIS, Petrel, and GeoGraphix to perform advanced GIS analysis, reservoir modeling, and well planning.
                                    We also utilize open-source platforms like QGIS and GRASS GIS, ensuring flexibility and cost-effectiveness in our solutions.
                                    With specialized software tailored for oil and gas workflows, such as Landmark's DecisionSpace® Geosciences suite and Schlumberger's Petrel E&P software, AdvitServices delivers customized solutions that meet the unique needs of each project.

                                </p>
                            </div>
                        
                    </Col>
                </Row>

                <Row className="pt-3 pb-3 ">
                    <Col data-aos="zoom-in" className='order-2 order-lg-1' lg={6}>
                        
                            <div className="pt-3 text-white"><h2 className="text-white"> Essential Skills</h2>
                                <p className='lead container text-white opacity-75'>
                                    Our team possesses expertise in spatial data management, ensuring the efficient organization and processing of complex datasets critical to oil and gas operations.
                                    Proficiency in programming languages such as Python and R empowers us to automate workflows, develop custom tools, and perform advanced spatial analysis, enhancing efficiency and accuracy.
                                    With a deep understanding of geostatistics and domain knowledge in geology and reservoir engineering, AdvitServices delivers precise reservoir characterization and optimization strategies.
                                </p>
                            </div>
                        
                    </Col>
                    <Col data-aos="zoom-out" className='order-1 order-lg-2' lg={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={pms} />
                        </Suspense>
                    </Col>
                </Row>

            </Container >
        </div>
    );
};

export default OilGas;
