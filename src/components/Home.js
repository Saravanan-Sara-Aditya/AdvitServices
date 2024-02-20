import React, { Suspense, useEffect } from 'react'
import AI from '../assets/images/GIS.jpeg'
import utilities from '../assets/images/Utilities.jpeg'
import java from '../assets/images/Java.jpg'
import AboutUs from './Aboutus'
import { Col, Container, Row } from 'react-bootstrap'
import softwareServices from '../assets/images/ourteam.jpg'
import Testimonials from './Testimonial'
import Mobile from "../assets/images/target.jpg"
import Mobile1 from "../assets/images/MobileApp.jpg"
import Carousel from './Carousel'
import AutoReactSwiperSlider from './WhyChooseUs'

// import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'
import ImageSkeletonLoader from '../Layouts/Skeleton'

const Home = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);


    return (
        <div className="">
            <div class="py-0 overflow-hidden" id="banner" data-bs-theme="light">
                {/* <div class="bg-holder overlay bg-img-lnd"></div> */}
                <div class="">
                    <Carousel />
                </div>
            </div>

            <div class="bg-all pt-2 pb-5 white__bg-opacity-50">
                <Container>
                    <Row className="pt-3">
                        <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">WHO WE ARE</h1>
                        <Col lg={6} data-aos="fade-left">
                            <Suspense fallback={<ImageSkeletonLoader />}>
                                <LazyImage src={softwareServices} />
                            </Suspense>
                        </Col>
                        <Col lg={6} data-aos="fade-right">
                            <p className="text-white mt-3 mt-lg-0 lead opacity-75">
                                Welcome to AdvitServices, where our foundation is built on the core principles of prioritizing our customers and fostering excellence in all that we do.
                            </p>
                            <p className="text-white lead opacity-75">
                                At AdvitServices, we believe in putting the customer first, always. Our commitment to "Customer First" ensures that we proactively engage with our clients as an integrated solution provider, working collaboratively across the entire value chain of their business. We understand that every client is unique, which is why our team of industry experts and leaders are dedicated to providing tailor-made solutions that address the specific needs and challenges of each customer.
                            </p>
                            <p className="text-white lead opacity-75">
                                Our goal is to empower our clients to achieve maximum benefits and reach their business objectives. Whether it's enhancing operational efficiency or driving functional excellence, we work tirelessly to deliver results that surpass expectations.
                            </p>
                            <p className="text-white lead opacity-75">
                                With AdvitServices, you can trust that you're partnering with a company that is dedicated to your success. We're here to support you every step of the way, offering innovative solutions and unparalleled expertise to help you thrive in today's competitive landscape. Welcome to a new era of excellence with AdvitServices.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*  */}
            <div class="bg-all pt-2 pb-5 white__bg-opacity-50">
                <Container>
                    <h1 data-aos="fade-left" class="fw-bold mt-3 text-end d-lg-block d-none text-uppercase mb-3 text-white">Our Mission</h1>
                    <h1 data-aos="fade-left" class="fw-bold mt-3 text-start d-lg-none d-block text-uppercase mb-3 text-white">Our Mission</h1>
                    <Row className="pt-3">
                        {/* <h2 className='text-center pt-3 pb-3'>Our Mission</h2> */}
                        <Col data-aos="fade-up" className='order-2 order-lg-1' lg={6}>
                            <p className="text-white mt-3 mt-lg-0  lead opacity-75">
                                At AdvitServices, we are dedicated to prioritizing our customers above all else, adhering to the foundational principles of "Customer First" and "Enabling Excellence." We proactively engage with our clients as an integrated solution provider, guiding them across the entirety of their business value chain to ensure they derive maximum benefits and successfully achieve their objectives. With a team of industry experts and leaders at the helm, we craft bespoke solutions tailored to each client's unique needs, empowering them to attain both operational efficiency and functional excellence. Our mission is to relentlessly support our clients on their journey towards success, driving innovation, and fostering enduring partnerships along the way.
                            </p>
                        </Col>
                        <Col data-aos="fade-down" className='order-1 order-lg-2' lg={6}>
                            <Suspense fallback={<ImageSkeletonLoader />}>
                                <LazyImage src={Mobile} />
                            </Suspense>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*  */}
            <div class="bg-all pb-3 white__bg-opacity-50">
                <div class="container">
                    <h1 data-aos="fade-right" class="fw-bold mt-3 text-white">WHAT WE DO</h1>
                    <div class="row">
                        <div class="col text-center">
                            {/* <h4 class="lead mb-0 text-uppercase text-white">Our Services</h4> */}
                        </div>
                    </div>
                    <div class="row mt-3 mb-3">
                        <div data-aos="zoom-in" class="col-lg-4">
                            <Link to="/GIS&Mapping">
                                <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                    <div class="card-img-top" style={{ filter: "brightness(0.5)" }}>
                                        <Suspense fallback={<ImageSkeletonLoader />}>
                                            <LazyImage class="img-fluid" src={AI} />
                                        </Suspense>
                                    </div>
                                    <div class="card-img-overlay d-flex align-items-end">
                                        <div>
                                            <h5 class="card-title text-white">GIS & Mapping</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-lg-4 mt-3 mb-3 mt-lg-0">
                            <Link to="/Sailpoint">
                                <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                    <div class="card-img-top" style={{ filter: "brightness(0.5)" }}>
                                        <Suspense fallback={<ImageSkeletonLoader />}>
                                            <LazyImage class="img-fluid" src={"https://media.istockphoto.com/id/1488298008/photo/young-businessman-chatting-with-a-smart-ai-or-artificial-intelligence-using-an-artificial.jpg?s=612x612&w=0&k=20&c=ZPd9mkDEn2r_RseQFzkPWLdz1rCWvG_ZT1qACmDjwKw="} />
                                        </Suspense>
                                    </div>
                                    <div class="card-img-overlay d-flex align-items-end">
                                        <div>
                                            <h5 class="card-title text-white">Sailpoint</h5>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-in" class="col-lg-4 mt-3 mb-3 mt-lg-0">
                            <Link to="/Telecommunication">
                                <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                    <div class="card-img-top" style={{ filter: "brightness(0.5)" }}>
                                        <Suspense fallback={<ImageSkeletonLoader />}>
                                            <LazyImage class="img-fluid" src={"https://media.istockphoto.com/id/1363385264/photo/telecommunication-tower-for-2g-3g-4g-5g-network-during-sunset-antenna-bts-microwave-repeater.jpg?b=1&s=612x612&w=0&k=20&c=hjx7n2f8jHYqxOobkMBxc3AAMg8xl2-7wNks2KLMqrc="} />
                                        </Suspense>
                                    </div>
                                    <div class="card-img-overlay d-flex align-items-end">
                                        <div>
                                            <h5 class="card-title text-white">Tele Communications</h5>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-lg-4 mt-3 mb-3 mt-lg-0">
                            <Link to="/BuildingInfrastructure">
                                <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                    <div class="card-img-top" style={{ filter: "brightness(0.5)" }}>
                                        <Suspense fallback={<ImageSkeletonLoader />}>
                                            <LazyImage class="img-fluid" src={"https://media.istockphoto.com/id/493107912/photo/dubai-construction.jpg?b=1&s=612x612&w=0&k=20&c=qLsWK_y1FGN6sla7doXw83K5vYRb9rbVTMPh1jabZzE="} />
                                        </Suspense>
                                    </div>

                                    <div class="card-img-overlay d-flex align-items-end">
                                        <div>
                                            <h5 class="card-title text-white">Building Infrastructure</h5>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-in" class="col-lg-4 mt-3 mb-3 mt-lg-0">
                            <Link to="/OilGas">
                                <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                    <div class="card-img-top" style={{ filter: "brightness(0.5)" }}>
                                        <Suspense fallback={<ImageSkeletonLoader />}>
                                            <LazyImage class="img-fluid" src={"https://media.istockphoto.com/id/533552151/photo/oil-rig.jpg?b=1&s=612x612&w=0&k=20&c=_KQgOK-k4cBbO-HB1zhFgYI3UglbPVM039la5aqibC4="} />
                                        </Suspense>
                                    </div>
                                    <div class="card-img-overlay d-flex align-items-end">
                                        <div>
                                            <h5 class="card-title text-white">Oil & Gas</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-lg-4 mt-3 mb-3 mt-lg-0">
                            <Link to="/Utilities">
                                <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                    <div class="card-img-top" style={{ filter: "brightness(0.5)" }}>
                                        <Suspense fallback={<ImageSkeletonLoader />}>
                                            <LazyImage class="img-fluid" src={utilities} />
                                        </Suspense>
                                    </div>
                                    <div class="card-img-overlay d-flex align-items-end">
                                        <div>
                                            <h5 class="card-title text-white">Utilities</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div data-aos="zoom-in" class="col-lg-4 mt-3 mb-3 mt-lg-0">
                            <Link to="/WebApplicaiton">
                                <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                    <div class="card-img-top" style={{ filter: "brightness(0.5)" }}>
                                        <Suspense fallback={<ImageSkeletonLoader />}>
                                            <LazyImage class="img-fluid" src={Mobile1} />
                                        </Suspense>
                                    </div>
                                    <div class="card-img-overlay d-flex align-items-end">
                                        <div>
                                            <h5 class="card-title text-white">Web & App Development</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div data-aos="zoom-out" class="col-lg-4 mt-3 mb-3 mt-lg-0">
                            <Link to="/Java">
                                <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                    <div class="card-img-top" style={{ filter: "brightness(0.5)" }}>
                                        <Suspense fallback={<ImageSkeletonLoader />}>
                                            <LazyImage class="img-fluid" src={java} />
                                        </Suspense>
                                    </div>
                                    <div class="card-img-overlay d-flex align-items-end">
                                        <div>
                                            <h5 class="card-title text-white">Java</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-in" class="col-lg-4 mt-3 mb-3 mt-lg-0">
                            <Link to="/CloudSupport">
                                <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                    <div class="card-img-top" style={{ filter: "brightness(0.5)" }}>
                                        <Suspense fallback={<ImageSkeletonLoader />}>
                                            <LazyImage class="img-fluid" src={"https://media.istockphoto.com/id/1352203098/photo/devops-software-development-and-it-operations-engineer-working-in-agile-methodology.jpg?b=1&s=612x612&w=0&k=20&c=N66pVJ4UKngFElD7U106XTPLiiuWBrxE7st50c6Cuic="} />
                                        </Suspense>
                                    </div>
                                    <div class="card-img-overlay d-flex align-items-end">
                                        <div>
                                            <h5 class="card-title text-white">Cloud Support</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div >
            </div >
            {/*  */}
            <div data-aos="fade-down" class="bg-all pt-2 pb-5 white__bg-opacity-50">
                <Container>
                    <h1 class="fw-bold mt-3 text-center text-uppercase mb-3 text-white">Why Choose Us</h1>
                    <AutoReactSwiperSlider />
                </Container>
            </div>

            <div class="bg-all  pb-5 white__bg-opacity-50 text-center">
                {/* <App /> */}
            </div>

            {/* <div class="bg-white pb-0 pt-0" data-bs-theme="light">
                <div class="bg-holder overlay" ></div>
                
                <Testimonials />
            </div> */}

        </div >
    )
}

export default Home
