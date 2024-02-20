import React, { Suspense, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../swiper-bundle.css';
import '../navigation.min.css';
import '../pagination.min.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Col, Row } from 'react-bootstrap';
import softwareServices from "../assets/images/tele.jpg"
import customization from "../assets/images/customization.jpg"
import user from "../assets/images/UserExperience.jpg"
import LazyImage from './LazyImage';

const AutoReactSwiperSlider = () => {
  const swiperRef = useRef(null);

  const slides = [
    <>
      <Row>
        <Col lg={6}>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src={customization} />
          </Suspense>
        </Col>
        <Col lg={6}>

          
            <div className="pt-3 text-white"><h2 className="text-white">Customization:</h2>
              <p className="lead opacity-75">
                One size does not fit all. Our team of expert developers works closely with you to understand your specific requirements, crafting personalized software solutions that align seamlessly with your business objectives.
              </p>
            </div>
          
        </Col>
      </Row>
    </>,
    <>
      <Row>
        <Col lg={6}>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src={"https://media.istockphoto.com/id/1152446348/photo/software-development-after-sundown.jpg?b=1&s=612x612&w=0&k=20&c=w39iNVWajc-7rRuxmfyWtZrDxr-6seLdn6xUInKwhI0="} />
          </Suspense>
        </Col>
        <Col lg={6}>

          
            <div className="pt-3 text-white"><h2 className="text-white">Cutting-Edge Technology:</h2>

              <p className="lead opacity-75">
                We stay at the forefront of technological advancements, harnessing the latest tools and frameworks to develop software that is not just functional but future-proof.
              </p>
            </div>
          
        </Col>
      </Row>
    </>,
    <>
      <Row>
        <Col lg={6}>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src={"https://media.istockphoto.com/id/1399000024/photo/white-and-black-wooden-arrow-symbols-sitting-over-wooden-seesaw-scale-before-defocused.jpg?b=1&s=612x612&w=0&k=20&c=m39zb5AAqvE2ThdXqepC5nu-j0plBWRXuOzxovfaxcQ="} />
          </Suspense>
        </Col>
        <Col lg={6}>

          
            <div className="pt-3 text-white"><h2 className="text-white">Scalability:</h2>
              <p className="lead opacity-75">
                As your business grows, so should your software. Our scalable solutions ensure that your systems can adapt and expand effortlessly, accommodating increased demands without compromising performance.
              </p>
            </div>
          
        </Col>
      </Row >
    </>,
    <>
      <Row>
        <Col lg={6}>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src={"https://media.istockphoto.com/id/901609212/photo/press-enter-button-on-the-keyboard-computer-shield-cyber-key-lock-security-system-abstract.jpg?b=1&s=612x612&w=0&k=20&c=aafPVuMbCangWGvIRJmUAzHDjjNTf1IOZQtqQrxmj78="} />
          </Suspense>
        </Col>
        <Col lg={6}>

          
            <div className="pt-3 text-white">
              <h2 className="text-white">Security:</h2>
              <p className="lead opacity-75">
                Protecting your valuable data is paramount. With robust security measures integrated into every aspect of our software development process, you can rest assured that your information remains safe from cyber threats.
              </p>
            </div>
        </Col>
      </Row>
    </>,
    <>
      <Row>
        <Col lg={6}>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src={user} />
          </Suspense>
        </Col>
        <Col lg={6}>

          
            <div className="pt-3 text-white"><h2 className="text-white">User Experience:</h2>
              <p className="lead opacity-75">
                A well-designed user interface can make all the difference. We prioritize user experience, creating intuitive interfaces that enhance productivity and drive user engagement.
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
    }, 3000); // Adjust autoplay speed as needed

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
          <div className="pt-3 text-white">
            {slide}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoReactSwiperSlider;
