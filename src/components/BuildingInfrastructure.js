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
import { faCertificate, faChartLine, faGlobe, faToolbox, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageSkeletonLoader from '../Layouts/Skeleton';


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
                    <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-10">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 class="text-white container fw-bold">
                                Revolutionizing Building and Infrastructure Services with Geospatial Technology
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                ADV is at the forefront of transforming traditional building and infrastructure services through the integration of cutting-edge geospatial technology. Our organization excels in providing comprehensive solutions at every stage of the construction lifecycle, from initial planning to ongoing maintenance. Here's how ADV leverages geospatial technology to deliver unparalleled results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <Row className="pt-3 mt-3 mb-3 pb-3">
                    {/* <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">WHAT WE DO</h1> */}
                    <Col lg={6}  className='mb-3' data-aos="fade-left">
                        <Suspense fallback={<ImageSkeletonLoader />}>
                            <LazyImage src={ilus} />
                        </Suspense>
                    </Col>
                    <Col className='mb-3' lg={6} >
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faUsers} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Innovative Work Structure
                            </h4>
                            <p className='lead opacity-75 text-white d-'>ADV employs a multidisciplinary team of experts, including architects, engineers, geospatial analysts, and project managers, ensuring seamless collaboration and integration of diverse skill sets for high-quality outcomes.</p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faChartLine} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Advanced Methods
                            </h4>
                            <p className='lead opacity-75 text-white'>Leveraging state-of-the-art Building Information Modeling (BIM) software, we create detailed digital representations of construction projects, enhancing visualization and coordination. Geospatial analysis techniques assess site suitability, analyze environmental impacts, and optimize infrastructure design.</p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faToolbox} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Cutting-Edge Tools
                            </h4>
                            <p className='lead opacity-75 text-white '>
                                Harnessing leading geospatial software like ArcGIS and LiDAR technology, we collect and analyze spatial data with precision. Advanced surveying equipment, including drones with high-resolution cameras and LiDAR scanners, capture detailed aerial imagery and 3D terrain models for site assessment.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faCertificate} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Specialized Skills
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                Our team possesses diverse specialized skills in CAD, BIM, geospatial software, project management, regulatory compliance, and environmental analysis. We prioritize continuous training and development to stay ahead in industry trends.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <FontAwesomeIcon icon={faGlobe} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Innovative Technologies by Geospatial
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                ADV leverages Geographic Information Systems (GIS) for spatial data analysis, guiding decision-making throughout the project lifecycle. Remote sensing techniques like satellite imagery and LiDAR scanning monitor construction progress, assess environmental impacts, and facilitate informed decision-making.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default Building;
