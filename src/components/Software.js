import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import javaskill from '../assets/images/javauser.jpg'
import softwareServices from '../assets/images/JavaChoice.jpg'
import Mobile from '../assets/images/javacross.png'
import agm from '../assets/images/agm2.png'
import download from '../assets/images/download.png'

import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';


const Java = () => {

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
                    <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-5">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 class="text-white container fw-bold">
                                Streamlining Java Development : How AdvitServices Delivers Comprehensive Services
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                harnessing the power of Java programming is crucial for organizations aiming to develop robust and scalable software solutions. At AdvitServices, we specialize in providing comprehensive services tailored to leverage the full potential of Java technology. Our holistic approach encompasses versatile development, efficient project management methodologies, and a skilled team equipped with the latest tools and frameworks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Container> */}
            <Row className="pt-3 ms-4 me-4">
                <Col data-aos="fade-right" lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={softwareServices} />
                    </Suspense>
                </Col>
                <Col data-aos="fade-left" lg={6}>
                    
                        <div className="pt-3 text-white"><h2 className="text-white">Versatile Development</h2>
                            <p className='lead container text-white opacity-75'>
                                We understand the diverse needs of modern businesses, ranging from enterprise-level systems to mobile applications. Leveraging Java's versatility, our team designs and develops custom solutions that align with your specific requirements. Whether it's building scalable enterprise applications or crafting intuitive mobile apps, we ensure that your software ecosystem is built on a solid Java foundation.
                            </p>
                        </div>
                    
                </Col>
            </Row>

            <Row className="pt-3 ms-4 me-4">
                <Col data-aos="zoom-out" className='order-2 order-lg-1' lg={6}>
                    
                        <div className="pt-3 text-white"><h2 className="text-white">Cross-Platform Compatibility:</h2>
                            <p className='lead container text-white opacity-75'>
                                With Java's cross-platform compatibility, we ensure that your applications seamlessly run across various devices and operating systems. Our expertise in Java development allows us to optimize your software for different environments, providing a consistent user experience across platforms. Whether it's desktop, web, or mobile, our solutions are tailored to reach your target audience wherever they are.
                            </p>
                        </div>
                    
                </Col>
                <Col data-aos="zoom-in" className='order-1 order-lg-2' lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={Mobile} />
                    </Suspense>
                </Col>
            </Row>

            <Row className="pt-3 pb-3 ms-4 me-4">
                <Col data-aos="fade-down" lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={agm} />
                    </Suspense>
                </Col>
                <Col data-aos="fade-up" lg={6}>
                    
                        <div className="pt-3 text-white"><h2 className="text-white">Agile Project Management</h2>
                            <p className='lead container text-white opacity-75'>
                                At AdvitServices, we embrace Agile and Scrum methodologies for project management, ensuring flexibility and adaptability throughout the development lifecycle. Our collaborative approach fosters communication and transparency, enabling us to deliver high-quality software within stipulated timelines. By prioritizing customer feedback and iterating continuously, we ensure that your project stays on track and meets evolving requirements.
                            </p>
                        </div>
                    
                </Col>
            </Row>

            <Row className="pt-3 pb-3 ms-4 me-4">
                <Col data-aos="zoom-in" className='order-2 order-lg-1' lg={6}>
                    
                        <div className="pt-3 text-white"><h2 className="text-white">Comprehensive Skill Set</h2>
                            <p className='lead container text-white opacity-75'>
                                Our team comprises highly skilled professionals proficient in Java programming language and its associated frameworks such as Spring and Hibernate. With a deep understanding of object-oriented principles, design patterns, and software architecture, we develop modular and maintainable code that scales with your business needs. From debugging and testing to performance optimization, our experts ensure that your software meets the highest standards of quality and reliability.
                            </p>
                        </div>
                    
                </Col>
                <Col data-aos="zoom-out" className='order-1 order-lg-2' lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={download} />
                    </Suspense>
                </Col>
            </Row>

            <Row className="pt-3 pb-3 ms-4 me-4">
                <Col lg={6}>
                    <img src={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191129172715/What-Will-Be-The-Best-Java-IDEs-in-2020.png"} className='w-100  h-100' style={{ objectFit: "cover", borderRadius: "10px" }} />
                </Col>
                <Col lg={6}>
                    
                        <div className="pt-3 text-white"><h2 className="text-white">Advanced Tools and Technologies</h2>
                            <p className='lead container text-white opacity-75'>
                                Equipped with industry-leading tools and technologies, we streamline the development process to deliver superior results. Our developers leverage Integrated Development Environments (IDEs) like IntelliJ IDEA and Eclipse for efficient coding, while build automation tools such as Apache Maven and Gradle ensure seamless integration and deployment. With version control systems like Git and testing frameworks like JUnit and Mockito, we maintain code integrity and facilitate collaborative development.
                            </p>
                        </div>
                    
                </Col>
            </Row>
            {/* </Container > */}
        </div>
    );
};

export default Java;
