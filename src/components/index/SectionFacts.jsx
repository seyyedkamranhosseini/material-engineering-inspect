import React from "react";

function SectionFacts() {
  return (
    <section id="facts" className="facts-area dark-bg">
      <div className="container">
        <div className="facts-wrapper">
          <div className="row">
            <div className="col-md-3 col-sm-6 ts-facts">
              <div className="ts-facts-img">
                <img
                  loading="lazy"
                  src="images/icon-image/fact1.ico"
                  alt="facts-img"
                />
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span className="counterUp" data-count={12}>
                    0
                  </span>
                </h2>
                <h3 className="ts-facts-title">Project Completed</h3>
              </div>
            </div>
            {/* Col end */}
            <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
              <div className="ts-facts-img">
                <img
                  loading="lazy"
                  src="images/icon-image/fact2.ico"
                  alt="facts-img"
                />
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span className="counterUp" data-count={38}>
                    0
                  </span>
                </h2>
                <h3 className="ts-facts-title">Lab Tests Performed</h3>
              </div>
            </div>
            {/* Col end */}
            <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div className="ts-facts-img">
                <img
                  loading="lazy"
                  src="images/icon-image/fact3.ico"
                  alt="facts-img"
                />
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span className="counterUp" data-count={24}>
                    0
                  </span>
                </h2>
                <h3 className="ts-facts-title">Certified Reports Delivered</h3>
              </div>
            </div>
            {/* Col end */}
            <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div className="ts-facts-img">
                <img
                  loading="lazy"
                  src="images/icon-image/fact4.ico"
                  alt="facts-img"
                />
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span className="counterUp" data-count={15}>
                    0
                  </span>
                </h2>
                <h3 className="ts-facts-title">Years of Combined Experience</h3>
              </div>
            </div>
            {/* Col end */}
          </div>{" "}
          {/* Facts end */}
        </div>
        {/*/ Content row end */}
      </div>
      {/*/ Container end */}
    </section>
  );
}

export default SectionFacts;
