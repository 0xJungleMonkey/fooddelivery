import React from "react";
import Searchbar from "./Searchbar";
const Bslide = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {/* <Searchbar /> */}
        <div className="carousel-item custom-slide active">
          <img
            src="images/s1.jpg"
            className="slide-image d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item custom-slide">
          <img
            src="images/s2.jpg"
            className="slide-image d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item custom-slide">
          <img
            src="images/s4.jpg"
            className="slide-image d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Bslide;
