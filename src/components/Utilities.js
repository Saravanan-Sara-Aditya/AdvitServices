import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CRM from '../assets/images/CRM.png'
import pred from '../assets/images/predictive-maintenace-Depositphotos_384463764_S-800x534.jpg'
import Mobile from '../assets/images/IT-Asset-management.png'
import ana from '../assets/images/SCDA.png'
import SCDA from '../assets/images/GismaP.jpg'

import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faBalanceScale, faBuilding, faChartLine, faCogs, faHandshake, faRobot, faTools, faTruckLoading, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import ImageSkeletonLoader from '../Layouts/Skeleton';

const Utilities = () => {

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
          <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-7">
            <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-8 text-center text-xl-start">
              <h1 class="text-white container fw-bold">
                Providing Essential Utilities Solutions </h1>
              <p class="lead container text-capitalize text-white opacity-75">
                ADV stands as a leading provider of utilities solutions, committed to delivering reliable, efficient, and sustainable services to communities while prioritizing customer satisfaction, regulatory compliance, and safety.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <Row className='pt-5 pb-3'>
          <div className="col-md-4" data-aos="fade-left">
            <FontAwesomeIcon icon={faBuilding} size='3x' color='lightblue' />
            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
              Infrastructure Maintenance and Management
            </h4>
            <p className='lead opacity-75 text-white d-'>ADV is dedicated to maintaining and managing crucial infrastructure such as power grids, water distribution systems, and telecommunications networks.</p>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <FontAwesomeIcon icon={faTruckLoading} size='3x' color='lightblue' />
            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
              Service Provision
            </h4>
            <p className='lead opacity-75 text-white'>Our organization ensures the seamless provision of utilities to residential, commercial, and industrial customers, guaranteeing uninterrupted access to electricity, water, gas, and telecommunications.</p>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <FontAwesomeIcon icon={faAmbulance} size='3x' color='lightblue' />
            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
              Emergency Response
            </h4>
            <p className='lead opacity-75 text-white '>
              ADV maintains a rapid response system to address emergencies promptly, including power outages, water main breaks, or gas leaks, prioritizing customer safety and satisfaction.
            </p>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <FontAwesomeIcon icon={faBalanceScale} size='3x' color='lightblue' />
            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
              Regulatory Compliance
            </h4>
            <p className='lead opacity-75 text-white d-'>
              We adhere strictly to regulatory standards and environmental regulations, prioritizing safety, reliability, and sustainability in all our operations.
            </p>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <FontAwesomeIcon icon={faUserFriends} size='3x' color='lightblue' />
            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
              Customer Service
            </h4>
            <p className='lead opacity-75 text-white d-'>ADV is committed to delivering exceptional customer service, handling inquiries, service requests, and billing efficiently to ensure customer satisfaction.</p>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <FontAwesomeIcon icon={faTools} size='3x' color='lightblue' />
            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
              Preventive Maintenance
            </h4>
            <p className='lead opacity-75 text-white'>We implement regular inspections and maintenance schedules to proactively identify and address potential issues, minimizing disruptions and ensuring the longevity of infrastructure.</p>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <FontAwesomeIcon icon={faChartLine} size='3x' color='lightblue' />
            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
              Predictive Analytics
            </h4>
            <p className='lead opacity-75 text-white '>
              ADV employs advanced data analytics and sensor technologies to predict and prevent equipment failures, optimizing maintenance schedules, and enhancing efficiency.
            </p>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <FontAwesomeIcon icon={faCogs} size='3x' color='lightblue' />
            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
              Asset Management
            </h4>
            <p className='lead opacity-75 text-white d-'>
              Our organization utilizes state-of-the-art asset management systems to track and manage infrastructure assets effectively, optimizing maintenance strategies and investment decisions.
            </p>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <FontAwesomeIcon icon={faHandshake} size='3x' color='lightblue' />
            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
              Collaboration
            </h4>
            <p className='lead opacity-75 text-white '>
              We collaborate closely with government agencies, contractors, and regulatory bodies to ensure effective planning, implementation, and compliance with regulations, fostering partnerships for mutual success.
            </p>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <FontAwesomeIcon icon={faRobot} size='3x' color='lightblue' />
            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
              Smart Technologies
            </h4>
            <p className='lead opacity-75 text-white d-'>
              ADV integrates smart meters, sensors, and automation to enhance monitoring, control, and efficiency of utility systems, ensuring optimal performance and resource utilization.
            </p>
          </div>
        </Row>
      </Container >
    </div>
  );
};

export default Utilities;
