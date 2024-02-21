import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import res from '../assets/images/infrastructure.jpg'
import softwareServices from '../assets/images/Remote_Work_Cloud_Computing_Security_Flexibility_ThumbnailFlex_Scale.jpg'
import Mobile from '../assets/images/cost.jpg'
import ana from '../assets/images/sec_com.jpeg'
import pms from '../assets/images/Post-migration-support.png'
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';
import ImageSkeletonLoader from '../Layouts/Skeleton';
import { faDollarSign, faExchangeAlt, faExpandArrowsAlt, faServer, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CloudSupport = () => {

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
          <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-6">
            <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
              <h1 class="text-white container fw-bold">
                Empowering Businesses with Comprehensive Cloud Support Services: Here's how ADV can assist your company in leveraging cloud computing effectively
              </h1>
              <p class="lead container text-capitalize text-white opacity-75">
                Our team comprises skilled professionals proficient in leading cloud computing platforms such as AWS, Azure, and GCP.
                We leverage advanced tools and technologies, including infrastructure as code (IaC) tools like Terraform and AWS CloudFormation, to automate infrastructure deployment and management.
                ADV utilizes cloud management consoles, monitoring services, security tools, and cost management tools to deliver comprehensive cloud support services tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <Row className="pt-3 mt-3 mb-3 pb-3">
          {/* <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">WHAT WE DO</h1> */}
          <Col lg={6} data-aos="fade-right">
            <Suspense fallback={<ImageSkeletonLoader />}>
              <LazyImage src={softwareServices} />
            </Suspense>
          </Col>
          <Col lg={6} >
            <div data-aos="fade-left">
              <FontAwesomeIcon icon={faExpandArrowsAlt} size='3x' color='#fff' />
              <h4 className='opacity-75 ms-2 text-white d-inline'>
                Flexibility and Scalability
              </h4>
              <p className='lead opacity-75 text-white d-'>
                We collaborate closely with your team to design and implement cloud solutions offering unparalleled flexibility and scalability. Scale resources up or down as needed without disruption, ensuring your business can adapt quickly to changing demands.
              </p>
            </div>
            <div data-aos="fade-left">
              <FontAwesomeIcon icon={faDollarSign} size='3x' color='#fff' />
              <h4 className='opacity-75 ms-2 text-white d-inline'>
                Cost-Efficiency
              </h4>
              <p className='lead opacity-75 text-white'>
                Eliminate upfront infrastructure investments with ADV. Our experts optimize resource utilization and leverage cost-effective cloud solutions, reducing expenses while maximizing performance for your business.
              </p>
            </div>
            <div data-aos="fade-left">
              <FontAwesomeIcon icon={faServer} size='3x' color='#fff' />
              <h4 className='opacity-75 ms-2 text-white d-inline'>
                Infrastructure Management
              </h4>
              <p className='lead opacity-75 text-white '>
                From provisioning and monitoring to maintenance, our team handles the entire spectrum of infrastructure management. Your cloud environment operates seamlessly, allowing you to focus on core business activities.
              </p>
            </div>
            <div data-aos="fade-left">
              <FontAwesomeIcon icon={faExchangeAlt} size='3x' color='#fff' />
              <h4 className='opacity-75 ms-2 text-white d-inline'>
                Migration Assistance
              </h4>
              <p className='lead opacity-75 text-white d-'>
                Expert assistance for migrating your on-premises infrastructure and applications to the cloud. Our proven methodologies and tools ensure a smooth transition, minimizing downtime and mitigating risks.
              </p>
            </div>
            <div data-aos="fade-left">
              <FontAwesomeIcon icon={faShieldAlt} size='3x' color='#fff' />
              <h4 className='opacity-75 ms-2 text-white d-inline'>
                Security and Compliance
              </h4>
              <p className='lead opacity-75 text-white d-'>
                Security is our top priority. We implement robust security measures and compliance controls to protect your data and ensure regulatory compliance. From identity and access management to threat detection and compliance auditing, we've got you covered.
              </p>
            </div>
          </Col>
        </Row>
      </Container >
    </div>
  );
};

export default CloudSupport;
