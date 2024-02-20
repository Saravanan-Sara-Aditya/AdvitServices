import React, { Suspense, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import founder from "../assets/images/training.jpg"
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';


const AboutUs = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);

    return (
        <Container className="my-5">
             <h1 className="fw-bold mt-3 mb-3 text-center text-white" data-aos="fade-up">ABOUT US</h1>
            <Row>
                <Col data-aos="fade-left" md={6} className="mb-4">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage alt={"Founder"} src={founder} />
                    </Suspense>
                </Col>
                <Col data-aos="fade-right " md={6}>
                    <p className='text-white lead opacity-75'>
                        AdvitServices is a dynamic company at the forefront of geospatial technology, staff recruiting, and software services. We specialize in providing innovative solutions tailored to meet the unique needs of our clients across various industries. Our commitment to excellence, coupled with our passion for innovation, drives us to deliver superior results and exceed expectations.
                        At AdvitServices, we are committed to fostering long-term partnerships with our clients, built on trust, integrity, and a shared commitment to excellence. Whether you're looking to harness the power of geospatial technology, recruit top talent for your organization, or develop custom software solutions, AdvitServices is your trusted partner for success.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
