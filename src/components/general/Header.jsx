import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header" className="header-one">
      <div className="bg-white">
        <div className="container">
          <div className="logo-area">
            <div className="row align-items-center">
              <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                <Link className="d-block" to="/">
                  <img loading="lazy" src="images/logo.png" alt="mei" />
                </Link>
              </div>
              {/* logo end */}
              <div className="col-lg-9 header-right">
                <ul className="top-info-box">
                  <li>
                    <div className="info-box">
                      <div className="info-box-content">
                        <p className="info-box-title">Call Us</p>
                        <p className="info-box-subtitle">+1 (408) 844-3775</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="info-box">
                      <div className="info-box-content">
                        <p className="info-box-title">Email Us</p>
                        <p className="info-box-subtitle">
                          info@engineeringinspect.com
                        </p>
                        <p className="info-box-subtitle">
                          schedule@engineeringinspect.com
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="last">
                    <div className="info-box last">
                      <div className="info-box-content">
                        <p className="info-box-title">Global Certificate</p>
                        <p className="info-box-subtitle">ISO 9001:2017</p>
                      </div>
                    </div>
                  </li> */}
                  <li className="header-get-a-quote">
                    <Link className="btn btn-primary" to="/contact">
                      Get A Quote
                    </Link>
                  </li>
                </ul>
                {/* Ul end */}
              </div>
              {/* header right end */}
            </div>
            {/* logo area end */}
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </div>
      <div className="site-navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                  aria-controls="navbar-collapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div id="navbar-collapse" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item dropdown active">
                      <Link
                        to="/"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Home
                        {/* <i className="fa fa-angle-down" /> */}
                      </Link>
                      {/* <ul className="dropdown-menu" role="menu">
                        <li className="active">
                          <Link to="/">Home One</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        to="/about"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        About Us
                        {/* <i className="fa fa-angle-down" /> */}
                      </Link>
                      {/* <ul className="dropdown-menu" role="menu">
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <a href="team.html">Our People</a>
                        </li>
                        <li>
                          <a href="testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        to="/services"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Services <i className="fa fa-angle-down" />
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <Link to="/services">‌Special Inspections</Link>
                        </li>
                        <li>
                          <Link to="/services">Laboratory Testing</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        to="/projects"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Projects
                        {/* <i className="fa fa-angle-down" /> */}
                      </Link>
                      {/* <ul className="dropdown-menu" role="menu">
                        <li>
                          <Link to="/projects">Projects All</Link>
                        </li>
                        <li>
                          <a href="projects-single.html">Projects Single</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        News
                        {/* <i className="fa fa-angle-down" /> */}
                      </a>
                      {/* <ul className="dropdown-menu" role="menu">
                        <li>
                          <a href="news-left-sidebar.html">News Left Sidebar</a>
                        </li>
                        <li>
                          <a href="news-right-sidebar.html">
                            News Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="news-single.html">News Single</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/*/ Col end */}
          </div>
          {/*/ Row end */}
          <div className="nav-search">
            <span id="search">
              <i className="fa fa-search" />
            </span>
          </div>
          {/* Search end */}
          <div className="search-block" style={{ display: "none" }}>
            <label htmlFor="search-field" className="w-100 mb-0">
              <input
                type="text"
                className="form-control"
                id="search-field"
                placeholder="Type what you want and enter"
              />
            </label>
            <span className="search-close">×</span>
          </div>
          {/* Site search end */}
        </div>
        {/*/ Container end */}
      </div>
      {/*/ Navigation end */}
    </header>
  );
}

export default Header;
