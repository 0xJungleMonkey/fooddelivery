import React from "react";

const Bslide = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="search">
          <form className="input-group d-flex w-auto mb-3">
            <input
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              type="Search"
            />
            <button
              className="ripple ripple-surface btn btn-outline-primary"
              role="button"
            >
              Search
            </button>
          </form>
        </div>
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
