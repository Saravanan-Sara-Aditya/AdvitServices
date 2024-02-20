import React, { useState, useEffect, Suspense } from 'react';
import img01 from "../assets/images/Telecom.jpg"
import img02 from "../assets/images/building.jpg"
import img03 from "../assets/images/Map.jpg"
import img04 from "../assets/images/og.jpg"
import img05 from "../assets/images/Utilities.jpeg"
import LazyImage from './LazyImage';

const slides = [
  {
    image: img01,
    caption: 'Telecomm',
  },
  {
    image: img02,
    caption: 'Building Infrastructure',
  },
  {
    image: img03,
    caption: 'GIS & Mapping',
  },
  {
    image: img04,
    caption: 'Oil & Gas',
  },
  {
    image: img05,
    caption: 'Utilities',
  },
];

const SlideshowBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide slide-${index} ${index === currentSlide ? 'active' : ''}`}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src={slide.image} alt={slide.caption} />
          </Suspense>
          <h1 className="d-none d-lg-block caption">{slide.caption}</h1>
          <h1 className="d-lg-none d-block">{slide.caption}</h1>

        </div>
      ))}
      <style jsx>{`
        .slideshow-banner {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
        }
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .active {
          opacity: 1;
        }
        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.5);
        }
        .caption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 60px; /* Changed to H1 font size */
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          
        }
        .button {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          padding: 10px 20px;
          font-size: 18px;
          color: #000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          background: #FFF67E;
        }
        .button:hover {
          background-color:#000 ;
          color:#FFF67E;
        }
      `}</style>
    </div>
  );
};

export default SlideshowBanner;
