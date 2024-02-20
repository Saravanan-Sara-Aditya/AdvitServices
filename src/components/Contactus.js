import React, { Suspense, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageSkeletonLoader from '../Layouts/Skeleton';
import LazyImage from './LazyImage';
import contact from "../assets/images/contact.jpg"
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);


    return (
        <Container className="my-5">
            <Row>
                <Col data-aos="fade-left">
                    <Suspense fallback={<ImageSkeletonLoader />}>
                        <LazyImage src={contact} />
                    </Suspense>
                </Col>
                <Col className='text-white' data-aos="fade-right">
                    <h2 className='text-white'>India Office Address</h2>
                    <p className='lead opacity-75'>Plot no 104, Road no 17, Gayatri Nagar,<br />Hyderabad, 500097.</p>
                    <h2 className='text-white'>USA Office Address</h2>
                    <p className='lead opacity-75'>12495 Summertree Dr,<br />Frisco, TX 75035.</p>
                    <h5 className='text-white'><FontAwesomeIcon color='#fff'  icon={faEnvelope} flip={true} size='1x'/> info@advitservices.com</h5>
                    <h5 className='text-white'><FontAwesomeIcon  color='#fff' icon={faPhoneAlt} size='1x' flip={true}  />+91 92931 25210</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
