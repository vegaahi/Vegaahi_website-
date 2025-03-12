import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import BasicprogrammingImage from '../Assests/BasicProgramming.jpg';
import programmingImage from '../Assests/programming.jpg';
import Designing from '../Assests/designing.jpg';
import Testing from '../Assests/testing.jpg';
import Cloud from '../Assests/Cloud.jpg';

const CardComponent = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const handleCardClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // This ensures the page scrolls to the top
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 font-weight-bold">Course Content</h1>
      <div className="position-relative">
        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="d-flex overflow-auto px-5"
          style={{
            gap: '16px',
            paddingBottom: '16px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            position: 'relative',
          }}
        >
          <style>
            {`
              ::-webkit-scrollbar {
                display: none;
              }
              .card:hover {
                transform: scale(1.05);
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
              }
            `}
          </style>
          {[ 
            { title: "LEVEL-1 Basic Programming", img: BasicprogrammingImage, path: "/level1", text: "Welcome to the Basic Programming course!" },
            { title: "LEVEL-2 Programming", img: programmingImage, path: "/level2", text: "Welcome to the Programming course!" },
            { title: "LEVEL-3 Designing", img: Designing, path: "/level3", text: "Welcome to the Designing course! Add color to your journey and start blooming like a flower on earth." },
            { title: "LEVEL-4 Testing", img: Testing, path: "/level4", text: "Welcome to the Testing course! Add color to your journey and start blooming like a flower." },
            { title: "LEVEL-5 Cloud Technology", img: Cloud, path: "/level5", text: "Welcome to the Cloud Technology course!" },
          ].map((card, index) => (
            <div className="card" key={index} style={{ width: '100%', maxWidth: '18rem', flexShrink: 0 }}>
              <img
                src={card.img}
                className="card-img-top"
                alt={card.title}
                style={{
                  height: '160px',
                  objectFit: 'cover',
                }}
              />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.text}</p>
                <button onClick={() => handleCardClick(card.path)} className="btn btn-primary mt-auto">
                  See more...
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Left Scroll Button */}
        <button
          className="btn btn-light position-absolute rounded-circle d-flex align-items-center justify-content-center"
          style={{
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            zIndex: 1,
            width: '40px',
            height: '40px',
            fontSize: '20px',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
          }}
          onClick={() => scroll('left')}
        >
          <FaAngleLeft />
        </button>

        {/* Right Scroll Button */}
        <button
          className="btn btn-light position-absolute rounded-circle d-flex align-items-center justify-content-center"
          style={{
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            zIndex: 1,
            width: '40px',
            height: '40px',
            fontSize: '20px',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
          }}
          onClick={() => scroll('right')}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
