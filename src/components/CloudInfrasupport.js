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
                Empowering Businesses with Comprehensive Cloud Support Services: Here's how AdvitServices can assist your company in leveraging cloud computing effectively
              </h1>
              <p class="lead container text-capitalize text-white opacity-75">
                Our team comprises skilled professionals proficient in leading cloud computing platforms such as AWS, Azure, and GCP.
                We leverage advanced tools and technologies, including infrastructure as code (IaC) tools like Terraform and AWS CloudFormation, to automate infrastructure deployment and management.
                AdvitServices utilizes cloud management consoles, monitoring services, security tools, and cost management tools to deliver comprehensive cloud support services tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <Row className="pt-3 ">
          <Col data-aos="fade-right" lg={6}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage src={softwareServices} />
            </Suspense>
          </Col>
          <Col data-aos="fade-left" lg={6}>
            
              <div className="pt-3 text-white"><h2 className="text-white">Flexibility and Scalability</h2>
                <p className='lead container text-white opacity-75'>
                  We understand the importance of adapting quickly to changing demands. AdvitServices works closely with your team to design and implement cloud solutions that offer unparalleled flexibility and scalability, allowing your business to scale resources up or down as needed without disruption.
                </p>
              </div>
            
          </Col>
        </Row>

        <Row className="pt-3 ">
          <Col data-aos="zoom-out" className='order-2 order-lg-1' lg={6}>
            
              <div className="pt-3 text-white"><h2 className="text-white">Cost-Efficiency</h2>
                <p className='lead container text-white opacity-75'>
                  With AdvitServices, you can eliminate the need for upfront infrastructure investments. Our experts optimize resource utilization and leverage cost-effective cloud solutions, helping you reduce expenses while maximizing performance.
                </p>
              </div>
            
          </Col>
          <Col data-aos="zoom-in" className='order-1 order-lg-2' lg={6}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage src={Mobile} />
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

            
              <div className="pt-3 text-white"><h2 className="text-white">Infrastructure Management</h2>
                <p className='lead container text-white opacity-75'>
                  Our team handles the entire spectrum of infrastructure management, from provisioning and monitoring to maintenance. We ensure that your cloud environment operates seamlessly, allowing you to focus on core business activities.
                </p>
              </div>
            
          </Col>
        </Row>

        <Row className="pt-3 pb-3 ">
          <Col data-aos="zoom-in" className='order-2 order-lg-1' lg={6}>
            
              <div className="pt-3 text-white"><h2 className="text-white">Migration Assistance</h2>
                <p className='lead container text-white opacity-75'>
                  AdvitServices provides expert assistance for migrating your on-premises infrastructure and applications to the cloud. Our proven methodologies and tools ensure a smooth and efficient transition, minimizing downtime and mitigating risks.
                </p>
              </div>
            
          </Col>
          <Col data-aos="zoom-out" className='order-1 order-lg-2' lg={6}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage src={pms} />
            </Suspense>
          </Col>
        </Row>

        <Row className="pt-3 pb-3 ">
          <Col data-aos="fade-left" lg={6}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage src={ana} />
            </Suspense>
          </Col>
          <Col data-aos="fade-right" lg={6}>
            
              <div className="pt-3 text-white"><h2 className="text-white">Security and Compliance</h2>
                <p className='lead container text-white opacity-75'>
                  Security is our top priority. AdvitServices implements robust security measures and compliance controls to protect your data and ensure regulatory compliance. From identity and access management to threat detection and compliance auditing, we have you covered.
                </p>
              </div>
            
          </Col>
        </Row>
      </Container >
    </div>
  );
};

export default CloudSupport;
