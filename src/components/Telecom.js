import React, { Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import res from '../assets/images/NFV-Virtual-Machine-Concept.jpg'
import softwareServices from '../assets/images/5G.jpg'
import Mobile from '../assets/images/sdn.jpg'
import ana from '../assets/images/sec_com.jpeg'
import pms from '../assets/images/examples-of-IoT.png'
import Nis from './NetworkInfrastructure';
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';


const Telecom = () => {
    return (
        <div className="software-services">
            {/*  */}
            <section class="py-0 overflow-hidden" id="banner" data-bs-theme="light">
                <div class="bg-holder overlay bg-img-lnd"></div>
                <div class="">
                    <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-9">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 class="text-white container fw-bold">
                                Empowering Connectivity Through Advanced Telecom Solutions
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                At AdvitServices, we are committed to delivering cutting-edge telecom services that connect people, businesses, and devices seamlessly. Our comprehensive approach encompasses a robust work structure, innovative methods, state-of-the-art tools, and a team of skilled professionals adept at leveraging advanced technologies. Here's how we excel in providing top-notch telecom solutions:
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Container>

                <Row className="pt-3 ">
                    <Col lg={6}>
                        <div data-aos="fade-right">
                            <Suspense fallback={<div>Loading...</div>}>
                                <LazyImage src={softwareServices} />
                            </Suspense>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div data-aos="fade-left" >
                            
                                <div className="pt-4 text-white"><h2 className="text-white">5G Networks</h2>
                                    <p className='lead container text-white opacity-75'>
                                        As pioneers in 5G technology, AdvitServices is at the forefront of delivering next-generation wireless connectivity, offering unparalleled speed, reliability, and low latency for emerging applications and services.
                                    </p>
                                </div>
                            
                        </div>
                    </Col>
                </Row>

                <Row className="pt-4 ">
                    <Col className='order-2 order-lg-1' lg={6}>
                        <div data-aos="zoom-out">
                            
                                <div className="pt-4 text-white"><h2 className="text-white">Software-Defined Networking (SDN)</h2>
                                    <p className='lead container text-white opacity-75'>
                                        Our SDN-enabled infrastructure empowers dynamic network management, agility, and scalability, enabling us to adapt to evolving customer demands and deliver customized solutions with ease.
                                    </p>
                                </div>
                            
                        </div>
                    </Col>

                    <Col className='order-1 order-lg-2' lg={6}>
                        <div data-aos="zoom-in" >
                            <Suspense fallback={<div>Loading...</div>}>
                                <LazyImage src={Mobile} />
                            </Suspense>
                        </div>
                    </Col>
                </Row>

                <Row className="pt-4 pb-3 ">
                    <Col lg={6}>
                        <div data-aos="fade-down">
                            <Suspense fallback={<div>Loading...</div>}>
                                <LazyImage src={res} />
                            </Suspense>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div data-aos="fade-up">
                            
                                <div className="pt-4 text-white"><h2 className="text-white">Network Function Virtualization (NFV)</h2>
                                    <p className='lead container text-white opacity-75'>
                                        By virtualizing network functions, we optimize resource utilization, reduce costs, and accelerate service delivery, providing our clients with scalable and flexible telecom solutions tailored to their specific requirements.
                                    </p>
                                </div>
                            
                        </div>
                    </Col>
                </Row>

                <Row className="pt-4 pb-3 ">
                    <Col className='order-2 order-lg-1' lg={6}>
                        <div data-aos="zoom-in">
                            
                                <div className="pt-4 text-white"><h2 className="text-white">Internet of Things (IoT)</h2>
                                    <p className='lead container text-white opacity-75'>
                                        AdvitServices harnesses the power of IoT to enable innovative services and applications, facilitating smart city initiatives, industrial automation, and connected ecosystems that drive efficiency, productivity, and sustainability
                                    </p>
                                </div>
                            
                        </div>
                    </Col>
                    <Col className='order-1 order-lg-2' lg={6}>
                        <div data-aos="zoom-out">
                            <Suspense fallback={<div>Loading...</div>}>
                                <LazyImage src={pms} />
                            </Suspense>
                        </div>
                    </Col>
                </Row>
                <h2 className="text-center mt-5 mb-3 text-white">What We Do</h2>
                <Nis />
            </Container >
        </div>
    );
};

export default Telecom;
