import React, { useEffect } from "react";
import BannerArea from "../components/general/BannerArea";
import ReactAccordion from "../components/general/ReactAccordion";

function About() {
    const accordionItems = [
      {
        title: "We Specialize in",
        content: (
          <div>
            <ul>
              <li>
                Reinforced concrete, post-tension (PT), and masonry inspections
              </li>
              <li>Welding, bolting, and structural steel inspections</li>
              <li>Fireproofing and fire stopping inspections</li>
              <li>
                Seismic anchorage, epoxy, pull testing, and torque testing
                inspections
              </li>
              <li>Soil compaction, grading, and geotechnical testing</li>
              <li>Asphalt and aggregate testing</li>
              <li>Wood framing inspection (residential and commercial)</li>
              <li>Concrete testing inspection</li>
            </ul>
            <p>
              Our company follows industry best practices to support
              contractors, engineers, and regulatory agencies in achieving safe
              and reliable construction.
            </p>
          </div>
        ),
      },
      {
        title: "Our Industry Standards",
        content: (
          <div>
            <p>
              Material Engineering Inspection, Inc. operates under the
              guidelines of the following industry standards:
            </p>
            <ul>
              <li>
                ASTM International (American Society for Testing and Materials)
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
              requirements, and best practices to ensure full compliance.
            </p>
          </div>
        ),
      },
      {
        title: "Certifications & Awards",
        content: (
          <div>
            <p>
              Our team holds certifications from ICC, ACI, CWI ,AWS, ASTM, and
              more. We stay updated with the latest industry standards to ensure
              our services are always top-notch.
            </p>
          </div>
        ),
      },
      {
        title: "Our Approach",
        content: (
          <div>
            <p>
              We utilize advanced technology and innovative methodologies to
              perform thorough and meticulous inspections. By identifying
              potential issues early, we offer practical solutions to mitigate
              risks, helping developers, contractors, and project owners achieve
              their goals efficiently and effectively.
            </p>
          </div>
        ),
      },
      {
        title: "Our Commitment",
        content: (
          <div>
            <p>
              Our commitment to excellence drives us to provide reliable,
              accurate, and efficient inspection solutions. We are dedicated to
              supporting the success of your construction project from start to
              finish, ensuring that it meets the highest standards of quality
              and safety.
            </p>
          </div>
        ),
      },
      {
        title: "Partner With Us",
        content: (
          <div>
            <p>
              Join the many satisfied clients who have trusted Material
              Engineering Inspection Inc. (MEI) with their construction
              projects. Let us be your partner in delivering safe, compliant,
              and high-quality outcomes.
            </p>
          </div>
        ),
      },
    ];

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
              <div className="col-lg-12">
                <h3 className="into-sub-title">Our Company</h3>
                <div style={{ marginLeft: "10px" }}>
                  Founded with a commitment to excellence, Material Engineering
                  Inspection, Inc. (MEI) is a leading Special Inspection
                  Agency...
                </div>
                <ReactAccordion items={accordionItems} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default About;
