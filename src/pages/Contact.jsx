import React from "react";
import BannerArea from "../components/general/BannerArea";

function Contact() {
  return (
    <>
      <BannerArea title="Company" subtitle="Contact Us" />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p>
                Fill out the form below, and our team will get back to you
                shortly.
              </p>
              <form>
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E.g. John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E.g. john.doe@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="E.g. +1 (123) 456-7890"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    Message <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="gap-60" />
          <div className="row text-center">
            <div className="col-12">
              <h2 className="section-title">Reaching our Office</h2>
              <h3 className="section-sub-title">Find Our Location</h3>
            </div>
          </div>
          {/*/ Title row end */}
          <div className="row">
            <div className="col-md-4">
              <div className="ts-service-box-bg text-center h-100">
                <span className="ts-service-icon icon-round">
                  <i className="fas fa-map-marker-alt mr-0" />
                </span>
                <div className="ts-service-box-content">
                  <h4>Visit Our Office</h4>
                  <p>1900 Camden Avenue, Suite 101, San Jose, CA 95124</p>
                </div>
              </div>
            </div>
            {/* Col 1 end */}
            <div className="col-md-4">
              <div className="ts-service-box-bg text-center h-100">
                <span className="ts-service-icon icon-round">
                  <i className="fa fa-envelope mr-0" />
                </span>
                <div className="ts-service-box-content">
                  <h4>Email Us</h4>
                  <p>info@engineeringinspect.com</p>
                  <p>schedule@engineeringinspect.com</p>
                </div>
              </div>
            </div>
            {/* Col 2 end */}
            <div className="col-md-4">
              <div className="ts-service-box-bg text-center h-100">
                <span className="ts-service-icon icon-round">
                  <i className="fa fa-phone-square mr-0" />
                </span>
                <div className="ts-service-box-content">
                  <h4>Call Us</h4>
                  <p>+1 (408) 844-3775</p>
                </div>
              </div>
            </div>
            {/* Col 3 end */}
          </div>
          {/* 1st row end */}
          <div className="gap-60" />
          {/* <div className="google-map">
            <div
              id="map"
              className="map"
              data-latitude="40.712776"
              data-longitude="-74.005974"
              data-marker="images/marker.png"
              data-marker-name="MEI"
            />
          </div> */}
          <div className="google-map">
            <div
              id="map"
              className="map"
              data-latitude="37.2566"
              data-longitude="-121.9306"
              data-marker="images/marker.png"
              data-marker-name="MEI"
            />
          </div>
          {/* <div className="gap-40" /> */}
          {/* Content row */}
        </div>
        {/* Conatiner end */}
      </section>
      {/* Main container end */}
    </>
  );
}

export default Contact;
