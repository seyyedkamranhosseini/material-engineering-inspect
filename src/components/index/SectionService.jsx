import React from "react";

function SectionService() {
  return (
    <section id="ts-service-area" className="ts-service-area pb-0">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title">We Are Specialists In</h2>
            <h3 className="section-sub-title">What We Do</h3>
          </div>
        </div>
        {/*/ Title row end */}
        <div className="row">
          <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
            <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon1.jpg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="#">Special Inspections</a>
                </h3>
                <p>
                  We perform structural, geotechnical, and civil inspections to
                  verify code compliance and construction integrity — from
                  foundations to framing.
                </p>
              </div>
            </div>
            {/* Service 1 end */}
            <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon2.jpg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="#">Material Testing</a>
                </h3>
                <p>
                  Our lab conducts thorough testing on concrete, steel, soil,
                  asphalt, and other materials to ensure strength, durability,
                  and performance.
                </p>
              </div>
            </div>
            {/* Service 2 end */}
            {/* <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon3.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="#">Interior Design</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div> */}
            {/* Service 3 end */}
          </div>
          {/* Col end */}
          <div className="col-lg-4 text-center">
            <img
              loading="lazy"
              className="img-fluid"
              src="images/services/service-center.png"
              alt="service-avater-image"
            />
          </div>
          {/* Col end */}
          <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
            <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon3.jpg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="#">Code Compliance</a>
                </h3>
                <p>
                  We help you meet local and national building codes by
                  verifying that materials and practices align with current
                  regulations.
                </p>
              </div>
            </div>
            {/* Service 4 end */}
            <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon4.jpg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="#">Construction Safety</a>
                </h3>
                <p>
                  We assess job site safety practices and provide guidance to
                  protect workers, the public, and your project timeline.
                </p>
              </div>
            </div>
            {/* Service 5 end */}
            {/* <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon6.png"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="#">Safety Management</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div> */}
            {/* Service 6 end */}
          </div>
          {/* Col end */}
        </div>
        {/* Content row end */}
      </div>
      {/*/ Container end */}
    </section>
  );
}

export default SectionService;
