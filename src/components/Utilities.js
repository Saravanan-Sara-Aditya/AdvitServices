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
          <div class="row flex-center pt-8 pt-lg-5 pb-lg-9 pb-xl-0 glassmorphism-bg-7">
            <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-8 text-center text-xl-start">
              <h1 class="text-white container fw-bold">
                Providing Essential Utilities Solutions </h1>
              <p class="lead container text-capitalize text-white opacity-75">
                AdvitServices stands as a leading provider of utilities solutions, committed to delivering reliable, efficient, and sustainable services to communities while prioritizing customer satisfaction, regulatory compliance, and safety.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className='container pt-4'>
        <h2 className="text-white text-center mb-3">Work Structure</h2>
        <div className="row">
          <div data-aos="zoom-in" className="col-sm-6 col-lg-4 mb-4">
            <div style={{ height: "260px" }} className="card text-bg-info">
              <div className="card-body">
                <div className="card-title">Infrastructure Maintenance and Management</div>
                <p className="card-text">
                  AdvitServices is dedicated to maintaining and managing crucial infrastructure such as power grids, water distribution systems, and telecommunications networks.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-out" className="col-sm-6 col-lg-4 mb-4">
            <div style={{ height: "260px" }} className="card text-bg-light">
              <div className="card-body">
                <div className="card-title">Service Provision</div>
                <p className="card-text">
                  Our organization ensures the seamless provision of utilities to residential, commercial, and industrial customers, guaranteeing uninterrupted access to electricity, water, gas, and telecommunications.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="col-sm-6 col-lg-4 mb-4">
            <div style={{ height: "260px" }} className="card text-bg-dark">
              <div className="card-body">
                <div className="card-title">Emergency Response</div>
                <p className="card-text">
                  AdvitServices maintains a rapid response system to address emergencies promptly, including power outages, water main breaks, or gas leaks, prioritizing customer safety and satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-out" className="col-sm-6 col-lg-4 mb-4">
            <div style={{ height: "260px" }} className="card text-bg-danger">
              <div className="card-body">
                <div className="card-title">Regulatory Compliance</div>
                <p className="card-text">We adhere strictly to regulatory standards and environmental regulations, prioritizing safety, reliability, and sustainability in all our operations.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="col-sm-6 col-lg-4 mb-4">
            <div style={{ height: "260px" }} className="card text-bg-warning">
              <div className="card-body">
                <div className="card-title">Customer Service</div>
                <p className="card-text">AdvitServices is committed to delivering exceptional customer service, handling inquiries, service requests, and billing efficiently to ensure customer satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  className='container pt-4'>
        <h2 className="text-white text-center mb-3">Methods</h2>
        <div className="row">
          <div data-aos="zoom-out" className="col-sm-6 col-lg-4 mb-4">
            <div style={{ height: "220px", background: "#ff8000", color: "#fff" }} className="card">
              <div className="card-body">
                <div className="card-title">Preventive Maintenance</div>
                <p className="card-text">
                  We implement regular inspections and maintenance schedules to proactively identify and address potential issues, minimizing disruptions and ensuring the longevity of infrastructure.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="col-sm-6 col-lg-4 mb-4">
            <div style={{ height: "220px" }} className="card text-bg-secondary">
              <div className="card-body">
                <div className="card-title">Predictive Analytics</div>
                <p className="card-text">
                  AdvitServices employs advanced data analytics and sensor technologies to predict and prevent equipment failures, optimizing maintenance schedules, and enhancing efficiency.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-out" className="col-sm-6 col-lg-4 mb-4">
            <div style={{ height: "220px" }} className="card text-bg-success">
              <div className="card-body">
                <div className="card-title">Asset Management</div>
                <p className="card-text">
                  Our organization utilizes state-of-the-art asset management systems to track and manage infrastructure assets effectively, optimizing maintenance strategies and investment decisions.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="col-sm-6 col-lg-4 mb-4">
            <div style={{ height: "220px" }} className="card text-bg-primary">
              <div className="card-body">
                <div className="card-title"> Smart Technologies</div>
                <p className="card-text">
                  AdvitServices integrates smart meters, sensors, and automation to enhance monitoring, control, and efficiency of utility systems, ensuring optimal performance and resource utilization.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-out" className="col-sm-6 col-lg-4 mb-4">
            <div style={{ height: "220px", background: "#df2020", color: "#fff" }} className="card">
              <div className="card-body">
                <div className="card-title">Collaboration</div>
                <p className="card-text">
                  We collaborate closely with government agencies, contractors, and regulatory bodies to ensure effective planning, implementation, and compliance with regulations, fostering partnerships for mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
          <h2 className="text-white text-center mb-3">What We Do</h2>

        <div  className="row">
          <div data-aos="fade-down" className="col-sm-6 col-lg-4 ">
            <div style={{ height: "500px" }} class="card mt-3 mb-3 overflow-hidden" >
              <div style={{ height: "300px" }} class="card-img-top">
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImage class="img-fluid" src={SCDA} />
                </Suspense>
              </div>
              <div class="card-body">
                <h5 class="card-title">GIS (Geographic Information Systems)</h5>
                <p class="card-text"> Utilized for mapping and analyzing infrastructure networks, facilitating informed decision-making and efficient resource allocation.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" className="col-sm-6 col-lg-4 ">
            <div style={{ height: "500px" }} class="card mt-3 mb-3 overflow-hidden" >
              <div style={{ height: "300px" }} class="card-img-top">
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImage class="img-fluid" src={ana} />
                </Suspense>
              </div>
              <div class="card-body">
                <h5 class="card-title"> SCADA (Supervisory Control and Data Acquisition)</h5>
                <p class="card-text"> Enables real-time monitoring and control of utility systems, ensuring reliability and responsiveness to changing conditions.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" className="col-sm-6 col-lg-4">
            <div style={{ height: "500px" }} class="card mt-3 mb-3 overflow-hidden" >
              <div style={{ height: "300px" }} class="card-img-top">
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImage class="img-fluid" src={Mobile} />
                </Suspense>
              </div>
              <div class="card-body">
                <h5 class="card-title">Asset Management Software</h5>
                <p class="card-text">Our organization employs advanced software solutions for comprehensive asset tracking, maintenance planning, and financial management.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" className="col-sm-6 col-lg-4">
            <div style={{ height: "500px" }} class="card mt-3 mb-3 overflow-hidden" >
              <div style={{ height: "300px" }} class="card-img-top">
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImage class="img-fluid" src={pred} />
                </Suspense>
              </div>
              <div class="card-body">
                <h5 class="card-title">Predictive Maintenance Software</h5>
                <p class="card-text">AdvitServices utilizes predictive maintenance software to analyze data and anticipate equipment failures, optimizing maintenance activities.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" className="col-sm-6 col-lg-4 ">
            <div style={{ height: "500px" }} class="card mt-3 mb-3 overflow-hidden" >
              <div style={{ height: "300px" }} class="card-img-top">
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImage class="img-fluid" src={CRM} />
                </Suspense>
              </div>
              <div class="card-body">
                <h5 class="card-title">Customer Relationship Management (CRM)</h5>
                <p class="card-text">
                  We leverage CRM systems to manage customer interactions, inquiries, and service requests, ensuring personalized and efficient customer service.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
