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
import ImageSkeletonLoader from '../Layouts/Skeleton';
import { faClipboardList, faCode, faCogs, faGlobe, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                                Streamlining Java Development : How ADV Delivers Comprehensive Services
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                harnessing the power of Java programming is crucial for organizations aiming to develop robust and scalable software solutions. At ADV, we specialize in providing comprehensive services tailored to leverage the full potential of Java technology. Our holistic approach encompasses versatile development, efficient project management methodologies, and a skilled team equipped with the latest tools and frameworks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <Row className="pt-3 mt-3 mb-3 pb-3">
                    {/* <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">WHAT WE DO</h1> */}
                    <Col lg={12} data-aos="fade-right">
                        <Suspense fallback={<ImageSkeletonLoader />}>
                            <LazyImage src={softwareServices} />
                        </Suspense>
                    </Col>
                    <Row className="pt-3 mt-3 mb-3 pb-3" >
                        <div className="col-md-4" data-aos="fade-left">
                            <FontAwesomeIcon icon={faCogs} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Versatile Development
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                Leveraging Java's versatility, we design and develop custom solutions tailored to your specific needs. Whether it's scalable enterprise applications or intuitive mobile apps, we ensure your software ecosystem is built on a solid Java foundation.
                            </p>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <FontAwesomeIcon icon={faGlobe} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Cross-Platform Compatibility
                            </h4>
                            <p className='lead opacity-75 text-white'>
                                With Java's cross-platform compatibility, we optimize your applications to seamlessly run across various devices and operating systems. Our expertise ensures a consistent user experience across desktop, web, and mobile platforms
                            </p>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <FontAwesomeIcon icon={faClipboardList} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Agile Project Management</h4>
                            <p className='lead opacity-75 text-white '>
                                At ADV, we embrace Agile and Scrum methodologies for project management, ensuring flexibility and adaptability throughout the development lifecycle. Our collaborative approach fosters communication and transparency, delivering high-quality software within stipulated timelines.
                            </p>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <FontAwesomeIcon icon={faCode} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Comprehensive Skill Set
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                Our team comprises highly skilled professionals proficient in Java programming language and frameworks like Spring and Hibernate. With expertise in object-oriented principles and design patterns, we develop modular, maintainable code that scales with your business needs.
                            </p>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <FontAwesomeIcon icon={faTools} size='3x' color='#fff' />
                            <h4 className='opacity-75 ms-2 text-white d-inline'>
                                Advanced Tools and Technologies</h4>
                            <p className='lead opacity-75 text-white d-'>
                                Equipped with industry-leading tools and technologies, we streamline development using IDEs like IntelliJ IDEA and Eclipse, build automation tools such as Apache Maven and Gradle, and version control systems like Git. Testing frameworks like JUnit and Mockito ensure code integrity and collaborative development.
                            </p>
                        </div>
                    </Row>
                </Row>
            </Container >
        </div>
    );
};

export default Java;
