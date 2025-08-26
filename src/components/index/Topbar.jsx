import React from "react";

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
                <a title="Facebook" href="">
                  <span className="social-icon">
                    <i className="fab fa-facebook-f" />
                  </span>
                </a>
                <a title="Twitter" href="">
                  <span className="social-icon">
                    <i className="fab fa-twitter" />
                  </span>
                </a>
                <a
                  title="Instagram"
                  href=""
                >
                  <span className="social-icon">
                    <i className="fab fa-instagram" />
                  </span>
                </a>
                <a title="Linkdin" href="">
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
