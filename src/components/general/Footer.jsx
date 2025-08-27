import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="footer bg-overlay">
      <div className="footer-main">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 footer-widget footer-about">
              <h3 className="widget-title">About MEI</h3>
              <img
                loading="lazy"
                width="200px"
                className="footer-logo"
                src="images/footer-logo.png"
                alt="Constra"
              />
              <p>
                Material Engineering Inspection, Inc. provides certified
                inspections and lab testing for construction projects across the
                Bay Area. We’re committed to precision, integrity, and
                responsive service.
              </p>
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="" aria-label="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="" aria-label="Twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="" aria-label="Instagram">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="" aria-label="LinkedIn">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer social end */}
            </div>
            {/* Col end */}
            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              <h3 className="widget-title">Contact Us</h3>
              <div className="contact-us">
                Email:{" "}
                <span className="text-right">info@engineeringinspect.com </span>
                <span className="text-right">
                  schedule@engineeringinspect.com{" "}
                </span>
                <br />
                Phone: <span className="text-right">+1 (408) 844-3775</span>
                <br /> Location:{" "}
                <span className="text-right">
                  1900 Camden Avenue, Suite 101, San Jose, CA 95124
                </span>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              <h3 className="widget-title">Contact Us</h3>
              <div className="contact-us">
                <div className="d-flex">
                  <span className="fw-bold me-2">Email:</span>
                  <div>
                    <div>info@engineeringinspect.com</div>
                    <div>schedule@engineeringinspect.com</div>
                  </div>
                </div>

                <div className="d-flex mt-2">
                  <span className="fw-bold me-2">Phone:</span>
                  <span>+1 (408) 844-3775</span>
                </div>
                <div className="d-flex mt-2">
                  <span className="fw-bold me-2">Location:</span>
                  <span>1900 Camden Avenue, Suite 101, San Jose, CA 95124</span>
                </div>
              </div>
            </div> */}

            {/* Col end */}
            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              <h3 className="widget-title">Working Hours</h3>
              <div className="working-hours">
                We work 7 days a week, every day excluding major holidays.
                Contact us if you have an emergency, with our Hotline and
                Contact form.
                <br />
                <br /> Monday - Friday:{" "}
                <span className="text-right">06:00 AM - 06:00 PM</span>
                <br /> Saturday:{" "}
                <span className="text-right">08:00 AM - 05:00 PM</span>
                <br /> Sunday: <span className="text-right">Closed</span>
                <br /> Labor Day:{" "}
                <span className="text-right">Hours Might Differ</span>
              </div>
            </div>
            {/* Col end */}
            {/* <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
              <h3 className="widget-title">Services</h3>
              <ul className="list-arrow">
                <li>
                  <a href="service-single.html">Pre-Construction</a>
                </li>
                <li>
                  <a href="service-single.html">General Contracting</a>
                </li>
                <li>
                  <a href="service-single.html">Construction Management</a>
                </li>
                <li>
                  <a href="service-single.html">Design and Build</a>
                </li>
                <li>
                  <a href="service-single.html">Self-Perform Construction</a>
                </li>
              </ul>
            </div> */}
            {/* Col end */}
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </div>
      {/* Footer main end */}
      <div className="copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright-info">
                <span>
                  Copyright © by{" "}
                  <Link to="/Home">Material Engineering Inspect, Inc.</Link>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-menu text-center text-md-right">
                <ul className="list-unstyled">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="team.html">Services</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="news-left-sidebar.html">News</a>
                  </li>
                  <li>
                    <a href="pricing.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Row end */}
          <div
            id="back-to-top"
            data-spy="affix"
            data-offset-top={10}
            className="back-to-top position-fixed"
          >
            <button className="btn btn-primary" title="Back to Top">
              <i className="fa fa-angle-double-up" />
            </button>
          </div>
        </div>
        {/* Container end */}
      </div>
      {/* Copyright end */}
    </footer>
  );
}

export default Footer;
