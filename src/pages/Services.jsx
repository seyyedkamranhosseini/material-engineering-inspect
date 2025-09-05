import React from "react";
import BannerArea from "../components/general/BannerArea";

function Services() {
  return (
    <>
      <BannerArea title="Services" subtitle="Special Inspections" Intro="Comprehensive Material Engineering Inspection Services" />
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Professional Services</h2>
              <div className="row">
                <div className="col-md-6">
                  <h4>Home Construction</h4>
                  <p>Complete construction services for residential projects.</p>
                </div>
                <div className="col-md-6">
                  <h4>Building Remodels</h4>
                  <p>Professional remodeling services for existing structures.</p>
                </div>
                <div className="col-md-6">
                  <h4>Interior Design</h4>
                  <p>Creative interior design solutions for all spaces.</p>
                </div>
                <div className="col-md-6">
                  <h4>Exterior Design</h4>
                  <p>Innovative exterior design and landscaping services.</p>
                </div>
                <div className="col-md-6">
                  <h4>Renovation</h4>
                  <p>Complete renovation services for residential and commercial properties.</p>
                </div>
                <div className="col-md-6">
                  <h4>Safety Management</h4>
                  <p>Comprehensive safety management and inspection services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

