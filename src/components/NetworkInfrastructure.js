import React, { Suspense, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../swiper-bundle.css';
import '../navigation.min.css';
import '../pagination.min.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Col, Row } from 'react-bootstrap';
import softwareServices from "../assets/images/rs.jpg"
import sp from "../assets/images/Telecom_01.jpg"
import user from "../assets/images/qos.png"
import support from "../assets/images/smt.jpg"
import ni from "../assets/images/NetworkInfrastructure1.png"
import DTM from "../assets/images/Data-Transmission-Methods.png"
import nms from "../assets/images/Network-monitoring-critical-issues.jpg"
import te from "../assets/images/TestingEquip.png"
import phone from "../assets/images/phone.jpg"
import LazyImage from './LazyImage';
// install Swiper modules
// SwiperCore.use([Autoplay, Pagination]);

const Nis = () => {
    const swiperRef = useRef(null);

    const slides = [
        <>
            <Row>
                <Col lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={ni} />
                    </Suspense>
                </Col>
                <Col lg={6}>

                    
                        <div className="pt-3 text-white"><h2 className="text-white">Network Infrastructure:</h2>
                            <p className='lead container text-white opacity-75'>
                                We invest in high-quality equipment and infrastructure, including fiber-optic cables, routers, switches, and towers, to ensure reliable and high-speed connectivity.
                            </p>
                        </div>
                    
                </Col>
            </Row>
        </>,
        <>
            <Row>
                <Col lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={sp} />
                    </Suspense>
                </Col>
                <Col lg={6}>

                    
                        <div className="pt-3 text-white"><h2 className="text-white">Service Providers:</h2>

                            <p className='lead container text-white opacity-75'>
                                ADV serves as a trusted telecom service provider, offering a wide range of services such as internet connectivity, VoIP solutions, and managed network services to meet diverse customer needs.|
                            </p>
                        </div>
                    
                </Col>
            </Row>
        </>,
        <>
            <Row>
                <Col lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={support} />
                    </Suspense>
                </Col>
                <Col lg={6}>

                    
                        <div className="pt-3 text-white"><h2 className="text-white">Support and Maintenance:</h2>
                            <p className='lead container text-white opacity-75'>
                                Our dedicated teams of engineers and technicians are available round-the-clock to monitor, maintain, and optimize network performance, ensuring minimal downtime and maximum efficiency
                            </p>
                        </div>
                    
                </Col>
            </Row >
        </>,
        <>
            <Row>
                <Col lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={DTM} />
                    </Suspense>
                </Col>
                <Col lg={6}>

                    
                        <div className="pt-3 text-white">
                            <p className='lead container text-white opacity-75'>
                                <h2 className="text-white">Data Transmission:</h2>
                                Leveraging advanced modulation techniques, encoding schemes, and multiplexing algorithms, we ensure efficient and secure transmission of data over our networks.
                            </p>
                        </div>
                </Col>
            </Row>
        </>,
        <>
            <Row>
                <Col lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={softwareServices} />
                    </Suspense>
                </Col>
                <Col lg={6}>

                    
                        <div className="pt-3 text-white"><h2 className="text-white">Routing and Switching:</h2>
                            <p className='lead container text-white opacity-75'>
                                Our skilled network engineers implement intelligent routing protocols and switching mechanisms to ensure smooth and seamless data flow across our infrastructure.
                            </p>
                        </div>
                    
                </Col>
            </Row >
        </>,
        <>
            <Row>
                <Col lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={user} />
                    </Suspense>
                </Col>
                <Col lg={6}>

                    
                        <div className="pt-3 text-white"><h2 className="text-white">QoS Management:</h2>
                            <p className='lead container text-white opacity-75'>
                                Through rigorous quality of service management, we prioritize critical traffic, optimize bandwidth utilization, and proactively address network congestion to deliver superior service quality.
                            </p>
                        </div>
                    
                </Col>
            </Row >
        </>,
        <>
            <Row>
                <Col lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={nms} />
                    </Suspense>
                </Col>
                <Col lg={6}>

                    
                        <div className="pt-3 text-white"><h2 className="text-white">Network Monitoring and Management:</h2>
                            <p className='lead container text-white opacity-75'>
                                ADV utilizes state-of-the-art monitoring tools and management platforms to continuously monitor network performance, analyze traffic patterns, and identify potential issues in real-time.
                            </p>
                        </div>
                    
                </Col>
            </Row >
        </>,
        <>
            <Row>
                <Col lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={te} />
                    </Suspense>
                </Col>
                <Col lg={6}>

                    
                        <div className="pt-3 text-white"><h2 className="text-white">Testing Equipment:</h2>
                            <p className='lead container text-white opacity-75'>
                                We employ advanced testing equipment and diagnostic tools to conduct thorough performance tests, signal measurements, and troubleshooting exercises, ensuring optimal network functionality.
                            </p>
                        </div>
                    
                </Col>
            </Row >
        </>,
        <>
            <Row>
                <Col lg={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={phone} />
                    </Suspense>
                </Col>
                <Col lg={6}>

                    
                        <div className="pt-3 text-white"><h2 className="text-white">Configuration and Provisioning Systems:</h2>
                            <p className='lead container text-white opacity-75'>
                                Our streamlined provisioning systems enable efficient configuration of network devices, rapid deployment of services, and seamless integration with customer environments.
                            </p>
                        </div>
                    
                </Col>
            </Row >
        </>,
    ];


    useEffect(() => {
        const swiper = swiperRef.current.swiper;
        const interval = setInterval(() => {
            if (swiper) {
                if (swiper.activeIndex === swiper.slides.length - 1) {
                    swiper.slideTo(0);
                } else {
                    swiper.slideNext();
                }
            }
        }, 5000); // Adjust autoplay speed as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
            {slides.map((slide) => (
                <SwiperSlide >
                    <div className="pt-3 mb-3 text-white">
                        {slide}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Nis;