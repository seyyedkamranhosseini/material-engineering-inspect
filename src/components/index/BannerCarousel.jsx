import React from "react";

function BannerCarousel() {
  return (
    <div className="banner-carousel banner-carousel-1 mb-0">
      <div
        className="banner-carousel-item"
        style={{ backgroundImage: "url(images/slider-main/bg1.jpg)" }}
      >
        <div className="slider-content">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12 text-center">
                <h2 className="slide-title" data-animation-in="slideInLeft">
                  17 Years of excellence in
                </h2>
                <h3
                  className="slide-sub-title"
                  data-animation-in="slideInRight"
                >
                  Construction Industry
                </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                  <a href="services.html" className="slider btn btn-primary">
                    Our Services
                  </a>
                  <a
                    href="contact.html"
                    className="slider btn btn-primary border"
                  >
                    Contact Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner-carousel-item"
        style={{ backgroundImage: "url(images/slider-main/bg2.jpg)" }}
      >
        <div className="slider-content text-left">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12">
                <h2 className="slide-title-box" data-animation-in="slideInDown">
                  World Class Service
                </h2>
                <h3 className="slide-title" data-animation-in="fadeIn">
                  When Service Matters
                </h3>
                <h3 className="slide-sub-title" data-animation-in="slideInLeft">
                  Your Choice is Simple
                </h3>
                <p data-animation-in="slideInRight">
                  <a
                    href="services.html"
                    className="slider btn btn-primary border"
                  >
                    Our Services
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner-carousel-item"
        style={{ backgroundImage: "url(images/slider-main/bg3.jpg)" }}
      >
        <div className="slider-content text-right">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12">
                <h2 className="slide-title" data-animation-in="slideInDown">
                  Meet Our Engineers
                </h2>
                <h3 className="slide-sub-title" data-animation-in="fadeIn">
                  We believe sustainability
                </h3>
                <p
                  className="slider-description lead"
                  data-animation-in="slideInRight"
                >
                  We will deal with your failure that determines how you achieve
                  success.
                </p>
                <div data-animation-in="slideInLeft">
                  <a
                    href="contact.html"
                    className="slider btn btn-primary"
                    aria-label="contact-with-us"
                  >
                    Get Free Quote
                  </a>
                  <a
                    href="about.html"
                    className="slider btn btn-primary border"
                    aria-label="learn-more-about-us"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCarousel;
