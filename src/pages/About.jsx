import React from "react";
import BannerArea from "../components/general/BannerArea";

function About() {
  return (
    <>
      <BannerArea title="About Us" subtitle="Learn more about our company" />
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>About Our Company</h2>
              <p>
                We are a leading engineering inspection company with over 17 years of experience 
                in the construction industry. Our team of professionals is dedicated to providing 
                high-quality services and ensuring the safety and integrity of your projects.
              </p>
              <p>
                Our expertise spans across various sectors including commercial, residential, 
                healthcare, government, and infrastructure projects. We pride ourselves on our 
                commitment to excellence and our ability to deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

