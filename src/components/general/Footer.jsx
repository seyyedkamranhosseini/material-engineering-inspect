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
                alt="EMI"
              />
              <p>
                Material Engineering Inspection, Inc. (MEI) is a trusted Special
                Inspection agency providing quality assurance, quality control,
                and testing. We deliver accurate, code-compliant inspections to
                support owners, engineers, contractors, and agencies in
                constructing safe and reliable structures.
              </p>
              <div className="footer-social">
                <ul>
                  <li>
                    <a
                      title="Facebook"
                      href="https://www.facebook.com/inspectwithmei"
                    >
                      <span className="social-icon">
                        <i className="fab fa-facebook-f" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a title="X.com" href="https://x.com/inspectwithmei">
                      <span className="social-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          style={{
                            transition: "color 0.2s",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "white")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "")
                          }
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 310.9 119.5 464H0L185.1 253.8 0 48H170.3L283.3 209.8 389.2 48zM364.4 421.8h39.4L133.6 89.1H91.8L364.4 421.8z" />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      title="Instagram"
                      href="https://www.instagram.com/inspectwithmei/"
                    >
                      <span className="social-icon">
                        <i className="fab fa-instagram" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      title="Linkdin"
                      href="https://www.linkedin.com/in/inspectwithmei"
                    >
                      <span className="social-icon">
                        <i className="fab fa-linkedin" />
                      </span>
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
                <span className="text-right">
                  Email:
                  <br />{" "}
                </span>
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
                We work 5 days a week, every day excluding major holidays.
                Contact us if you have an emergency, with our Hotline and
                Contact form.
                <br />
                <br /> Monday - Friday:{" "}
                <span className="text-right">08:00 AM - 05:00 PM</span>
                <br /> Saturday - Sunday:{" "}
                <span className="text-right">Closed</span>
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
                  <Link to="/Home">Material Engineering Inspect, Inc. | </Link>
                </span>
                <span>
                  <Link to="/whatsapp" style={{ textDecoration: "none" }}>
                    Design by <span>Seyyed Kamran Hosseini</span>
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-menu text-center text-md-right">
                <ul className="list-unstyled">
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/specialinspections">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/news">
                      News
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
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
