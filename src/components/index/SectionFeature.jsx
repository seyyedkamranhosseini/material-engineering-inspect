import React from "react";

function SectionFeature() {
  return (
    <section id="ts-features" className="ts-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ts-intro">
              <h2 className="into-title">About Us</h2>
              <h3 className="into-sub-title">
                We Deliver Confidence Through Certified Inspections
              </h3>
              <p>
                Material Engineering Inspection, Inc. provides trusted special
                inspections and material testing for construction projects
                across the Bay Area. Led by certified engineers, we help
                developers, contractors, and owners meet safety and compliance
                standards with precision and care.
              </p>
            </div>
            {/* Intro box end */}
            <div className="gap-20" />
            <div className="row">
              <div className="col-md-6">
                <div className="ts-service-box">
                  <span className="ts-service-icon">
                    <i className="fas fa-trophy" />
                  </span>
                  <div className="ts-service-box-content">
                    <h3 className="service-box-title">
                      Proven Commitment to Excellence
                    </h3>
                  </div>
                </div>
                {/* Service 1 end */}
              </div>
              {/* col end */}
              <div className="col-md-6">
                <div className="ts-service-box">
                  <span className="ts-service-icon">
                    <i className="fas fa-handshake" />
                  </span>
                  <div className="ts-service-box-content">
                    <h3 className="service-box-title">
                      Reliable Parternship That Last
                    </h3>
                  </div>
                </div>
                {/* Service 2 end */}
              </div>
              {/* col end */}
            </div>
            {/* Content row 1 end */}
            <div className="row">
              <div className="col-md-6">
                <div className="ts-service-box">
                  <span className="ts-service-icon">
                    <i className="fas fa-compass" />
                  </span>
                  <div className="ts-service-box-content">
                    <h3 className="service-box-title">
                      Driven by Percision & Integrity
                    </h3>
                  </div>
                </div>
                {/* Service 1 end */}
              </div>
              {/* col end */}
              <div className="col-md-6">
                <div className="ts-service-box">
                  <span className="ts-service-icon">
                    <i className="fas fa-hard-hat" />
                  </span>
                  <div className="ts-service-box-content">
                    <h3 className="service-box-title">
                      Cretified Professionals, On Every Site
                    </h3>
                  </div>
                </div>
                {/* Service 2 end */}
              </div>
              {/* col end */}
            </div>
            {/* Content row 1 end */}
          </div>
          {/* Col end */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <h3 className="into-sub-title">Our Values</h3>
            <p>
              At Material Engineering Inspection, Inc., our values guide every
              inspection, report, and recommendation. They reflect our
              commitment to safety, precision, and trust — and shape how we
              serve our clients across the Bay Area.
            </p>
            <div
              className="accordion accordion-group"
              id="our-values-accordion"
            >
              <div className="card">
                <div className="card-header p-0 bg-transparent" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Precision
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#our-values-accordion"
                >
                  <div className="card-body">
                    Every detail matters. We inspect with technical accuracy and
                    care.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-0 bg-transparent" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Integrity
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#our-values-accordion"
                >
                  <div className="card-body">
                    We operate with honesty and transparency, always doing
                    what’s right.
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header p-0 bg-transparent"
                  id="headingThree"
                >
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Responsiveness
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#our-values-accordion"
                >
                  <div className="card-body">
                    We deliver fast, clear communication and timely results.
                  </div>
                </div>
              </div>
            </div>
            {/*/ Accordion end */}
          </div>
          {/* Col end */}
        </div>
        {/* Row end */}
      </div>
      {/* Container end */}
    </section>
  );
}

export default SectionFeature;
