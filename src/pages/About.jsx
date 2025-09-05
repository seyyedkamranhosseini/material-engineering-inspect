import React from "react";
import BannerArea from "../components/general/BannerArea";

function About() {
  return (
    <>
      <BannerArea
        title="Company"
        subtitle="About Us"
        Intro="Learn more about us!"
      />
      <section id="ts-features" className="ts-features">
        <div className="container">
          <div className="row">
            <h3 className="into-sub-title">Our Company</h3>
            <p>
              Founded with a commitment to excellence, Material Engineering
              Inspection, Inc. (MEI) is a leading Special Inspection Agency
              dedicated to providing independent third-party material testing
              and quality assurance services. Our mission is to support
              contractors, engineers, and regulatory agencies in achieving safe
              and reliable construction through rigorous inspections and
              testing. With a focus on integrity, accuracy, and professionalism,
              MEI is your trusted partner in ensuring compliance and safety in
              every project.
            </p>
            <div
              className="accordion accordion-group"
              id="our-values-accordion"
            >
              <div
                className="card"
                style={{
                  width: "100%",
                }}
              >
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
                      We Specialize in
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
                    <ul>
                      <li>
                        Reinforced concrete, post-tension (PT), and masonry
                        inspections
                      </li>
                      <li>
                        Welding, bolting, and structural steel inspections
                      </li>
                      <li>Fireproofing and fire stopping inspections</li>
                      <li>
                        Seismic anchorage, epoxy, pull testing, and torque
                        testing inspections
                      </li>
                      <li>
                        Soil compaction, grading, and geotechnical testing
                      </li>
                      <li>Asphalt and aggregate testing</li>
                      <li>
                        Wood framing inspection (residential and commercial)
                      </li>
                      <li>Concrete testing inspection</li>
                    </ul>
                    <p>
                      Our company follows industry best practices to support
                      contractors, engineers, and regulatory agencies in
                      achieving safe and reliable construction.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "100%",
                }}
              >
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
                      Our Industry Standards
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
                    <p>
                      Material Engineering Inspection, Inc. operates under the
                      guidelines of the following industry standards:
                    </p>
                    <ul>
                      <li>
                        ASTM International (American Society for Testing and
                        Materials)
                      </li>
                      <li>ACI (American Concrete Institute)</li>
                      <li>ICC (International Code Council)</li>
                      <li>CWI (Certified Welding Inspector)</li>
                      <li>AWS (American Welding Society)</li>
                      <li>AISC (American Institute of Steel Construction)</li>
                      <li>OSHA & Cal/OSHA Safety Regulations</li>
                    </ul>
                    <p>
                      Our inspectors stay updated with code changes, regulatory
                      requirements, and best practices to ensure full
                      compliance.
                    </p>
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
                      Certifications & Awards
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
                    Our team holds certifications from ICC, ACI, CWI ,AWS, ASTM,
                    and more. We stay updated with the latest industry standards
                    to ensure our services are always top-notch.
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header p-0 bg-transparent"
                  id="headingFour"
                >
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Our Approach
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#our-values-accordion"
                >
                  <div className="card-body">
                    We utilize advanced technology and innovative methodologies
                    to perform thorough and meticulous inspections. By
                    identifying potential issues early, we offer practical
                    solutions to mitigate risks, helping developers,
                    contractors, and project owners achieve their goals
                    efficiently and effectively.
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header p-0 bg-transparent"
                  id="headingFive"
                >
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Our Commitment
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#our-values-accordion"
                >
                  <div className="card-body">
                    Our commitment to excellence drives us to provide reliable,
                    accurate, and efficient inspection solutions. We are
                    dedicated to supporting the success of your construction
                    project from start to finish, ensuring that it meets the
                    highest standards of quality and safety.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-0 bg-transparent" id="headingSix">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Partner With Us
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#our-values-accordion"
                >
                  <div className="card-body">
                    Join the many satisfied clients who have trusted Material
                    Engineering Inspection Inc. (MEI) with their construction
                    projects. Let us be your partner in delivering safe,
                    compliant, and high-quality outcomes.
                  </div>
                </div>
              </div>
            </div>
            {/*/ Accordion end */}
            {/* Col end */}
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </section>
    </>
  );
}

export default About;
