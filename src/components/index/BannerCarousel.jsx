import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const BannerCarousel = () => {
  useEffect(() => {
    // Initialize the banner carousel when component mounts
    const initializeSlider = () => {
      // Destroy existing slick instance if it exists
      if (
        window.$ &&
        window
          .$(".banner-carousel.banner-carousel-1")
          .hasClass("slick-initialized")
      ) {
        window.$(".banner-carousel.banner-carousel-1").slick("unslick");
      }

      // Initialize the slider
      if (
        window.$ &&
        window.$(".banner-carousel.banner-carousel-1").length > 0
      ) {
        window.$(".banner-carousel.banner-carousel-1").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
          speed: 600,
          arrows: true,
          prevArrow:
            '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
          nextArrow:
            '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
        });

        // Initialize slick animation if available
        if (window.$(".banner-carousel.banner-carousel-1").slickAnimation) {
          window.$(".banner-carousel.banner-carousel-1").slickAnimation();
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeSlider, 100);

    // Cleanup function to destroy slider when component unmounts
    return () => {
      clearTimeout(timer);
      if (
        window.$ &&
        window
          .$(".banner-carousel.banner-carousel-1")
          .hasClass("slick-initialized")
      ) {
        window.$(".banner-carousel.banner-carousel-1").slick("unslick");
      }
    };
  }, []); // Empty dependency array means this runs once when component mounts
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
                  <Link
                    to="/specialinspections"
                    className="slider btn btn-primary"
                  >
                    Our Services
                  </Link>
                  <Link to="/contact" className="slider btn btn-primary border">
                    Contact Now
                  </Link>
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
                <h3 className="slide-title" data-animation-in="fadeIn">
                  When Safety Matters Most
                </h3>
                <h3 className="slide-sub-title" data-animation-in="slideInLeft">
                  Your Project Deserves the Best Inspection
                </h3>
                <p data-animation-in="slideInRight">
                  <Link
                    to="/specialinspections"
                    className="slider btn btn-primary border"
                  >
                    Our Services
                  </Link>
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
                <h3 className="slide-sub-title" data-animation-in="fadeIn">
                  Building Confidence, Protecting Tomorrow
                </h3>
                <p
                  className="slider-description lead"
                  data-animation-in="slideInRight"
                >
                  Inspections and testing designed for lasting performance.
                </p>
                <div data-animation-in="slideInLeft">
                  <Link
                    to="/contact"
                    className="slider btn btn-primary"
                    aria-label="contact-with-us"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    to="/about"
                    className="slider btn btn-primary border"
                    aria-label="learn-more-about-us"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
