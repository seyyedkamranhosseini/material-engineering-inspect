import React from "react";
import CaliforniaClock from "../general/CaliforniaClock";

function Topbar() {
  return (
    <div id="top-bar" className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <ul className="top-info text-center text-md-left">
              <li>
                <i className="fas fa-map-marker-alt" />{" "}
                <p className="info-text">
                  1900 Camden Avenue, Suite 101, San Jose, CA 95124
                </p>
              </li>
            </ul>
          </div>
          {/*/ Top info end */}
          <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
            <ul className="list-unstyled">
              <li>
                <CaliforniaClock />
                <span className="mx-2">|</span>
              </li>
              <li>
                <a
                  title="Facebook"
                  href="https://www.facebook.com/inspectwithmei"
                >
                  <span className="social-icon">
                    <i className="fab fa-facebook-f" />
                  </span>
                </a>
                <a title="X.com" href="https://x.com/inspectwithmei">
                  <span className="social-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 310.9 119.5 464H0L185.1 253.8 0 48H170.3L283.3 209.8 389.2 48zM364.4 421.8h39.4L133.6 89.1H91.8L364.4 421.8z" />
                    </svg>
                  </span>
                </a>
                <a
                  title="Instagram"
                  href="https://www.instagram.com/inspectwithmei/"
                >
                  <span className="social-icon">
                    <i className="fab fa-instagram" />
                  </span>
                </a>
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
          {/*/ Top social end */}
        </div>
        {/*/ Content row end */}
      </div>
      {/*/ Container end */}
    </div>
  );
}

export default Topbar;
