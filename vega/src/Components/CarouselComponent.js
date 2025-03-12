import React from "react";
import slide1 from '../Assests/slide1.jpeg';
import slide2 from '../Assests/slide2.jpeg';
import slide3 from '../Assests/slide3.jpeg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';  

function CarouselComponent() {
  return (
    <div>
      {/* Carousel starts... */}
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="true" > {/* Set 3 seconds interval */}
        <div className="carousel-inner" >
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100 h-100 object-fit-cover" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100 h-100 object-fit-cover" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100 h-100 object-fit-cover" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel ends... */}
    </div>
  );
}

export default CarouselComponent;
