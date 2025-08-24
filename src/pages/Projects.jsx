import React from "react";
import BannerArea from "../components/general/BannerArea";

function Projects() {
  return (
    <>
      <BannerArea title="Our Projects" subtitle="Showcasing our work of excellence" />
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Recent Projects</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="project-item">
                    <h4>Capital Teltway Building</h4>
                    <p>Commercial, Interiors</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item">
                    <h4>Ghum Touch Hospital</h4>
                    <p>Healthcare</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item">
                    <h4>TNT East Facility</h4>
                    <p>Government</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item">
                    <h4>Narriot Headquarters</h4>
                    <p>Infrastructure</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item">
                    <h4>Kalas Metrorail</h4>
                    <p>Infrastructure</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item">
                    <h4>Ancraft Avenue House</h4>
                    <p>Residential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;

