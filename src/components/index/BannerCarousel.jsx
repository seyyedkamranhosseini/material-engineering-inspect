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
                  Certified Special Inspections & Material Testing
                </h2>
                <h3
                  className="slide-sub-title"
                  data-animation-in="slideInRight"
                >
                  You Can Rely on Us for Every Inspection
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
                {/* <h2 className="slide-title-box" data-animation-in="slideInDown">
                  Precision in Every Inspection
                </h2> */}
                <h3 className="slide-title" data-animation-in="fadeIn">
                  When Safety Matters Most
                </h3>
                <h3 className="slide-sub-title" data-animation-in="slideInLeft">
                  Your Project Deserves the Best Inspection
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
                {/* <h2 className="slide-title" data-animation-in="slideInDown">
                  Building Confidence Into Every Project{" "}
                </h2> */}
                <h3 className="slide-sub-title" data-animation-in="fadeIn">
                  {/* Because Quality Today Protects Tomorrow */}
                  Building Confidence, Protecting Tomorrow
                </h3>
                <p
                  className="slider-description lead"
                  data-animation-in="slideInRight"
                >
                  Inspections and testing designed for lasting performance.
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
