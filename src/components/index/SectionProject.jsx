import React from "react";

function SectionProject() {
  return (
    <section id="project-area" className="project-area solid-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h2 className="section-title">Work of Excellence</h2>
            <h3 className="section-sub-title">Recent Projects</h3>
          </div>
        </div>
        {/*/ Title row end */}
        <div className="row">
          <div className="col-12">
            <div className="shuffle-btn-group">
              <label className="active" htmlFor="all">
                <input
                  type="radio"
                  name="shuffle-filter"
                  id="all"
                  defaultValue="all"
                  defaultChecked="checked"
                />
                Show All
              </label>
              <label htmlFor="commercial">
                <input
                  type="radio"
                  name="shuffle-filter"
                  id="commercial"
                  defaultValue="commercial"
                />
                Commercial
              </label>
              <label htmlFor="education">
                <input
                  type="radio"
                  name="shuffle-filter"
                  id="education"
                  defaultValue="education"
                />
                Education
              </label>
              <label htmlFor="government">
                <input
                  type="radio"
                  name="shuffle-filter"
                  id="government"
                  defaultValue="government"
                />
                Government
              </label>
              <label htmlFor="infrastructure">
                <input
                  type="radio"
                  name="shuffle-filter"
                  id="infrastructure"
                  defaultValue="infrastructure"
                />
                Infrastructure
              </label>
              <label htmlFor="residential">
                <input
                  type="radio"
                  name="shuffle-filter"
                  id="residential"
                  defaultValue="residential"
                />
                Residential
              </label>
              <label htmlFor="healthcare">
                <input
                  type="radio"
                  name="shuffle-filter"
                  id="healthcare"
                  defaultValue="healthcare"
                />
                Healthcare
              </label>
            </div>
            {/* project filter end */}
            <div className="row shuffle-wrapper">
              <div className="col-1 shuffle-sizer" />
              <div
                className="col-lg-4 col-md-6 shuffle-item"
                data-groups='["government","healthcare"]'
              >
                <div className="project-img-container">
                  <a
                    className="gallery-popup"
                    href="images/projects/project1.jpg"
                    aria-label="project-img"
                  >
                    <img
                      className="img-fluid"
                      src="images/projects/project1.jpg"
                      alt="project-img"
                    />
                    <span className="gallery-icon">
                      <i className="fa fa-plus" />
                    </span>
                  </a>
                  <div className="project-item-info">
                    <div className="project-item-info-content">
                      <h3 className="project-item-title">
                        <a href="projects-single.html">
                          Capital Teltway Building
                        </a>
                      </h3>
                      <p className="project-cat">Commercial, Interiors</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* shuffle item 1 end */}
              <div
                className="col-lg-4 col-md-6 shuffle-item"
                data-groups='["healthcare"]'
              >
                <div className="project-img-container">
                  <a
                    className="gallery-popup"
                    href="images/projects/project2.jpg"
                    aria-label="project-img"
                  >
                    <img
                      className="img-fluid"
                      src="images/projects/project2.jpg"
                      alt="project-img"
                    />
                    <span className="gallery-icon">
                      <i className="fa fa-plus" />
                    </span>
                  </a>
                  <div className="project-item-info">
                    <div className="project-item-info-content">
                      <h3 className="project-item-title">
                        <a href="projects-single.html">Ghum Touch Hospital</a>
                      </h3>
                      <p className="project-cat">Healthcare</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* shuffle item 2 end */}
              <div
                className="col-lg-4 col-md-6 shuffle-item"
                data-groups='["infrastructure","commercial"]'
              >
                <div className="project-img-container">
                  <a
                    className="gallery-popup"
                    href="images/projects/project3.jpg"
                    aria-label="project-img"
                  >
                    <img
                      className="img-fluid"
                      src="images/projects/project3.jpg"
                      alt="project-img"
                    />
                    <span className="gallery-icon">
                      <i className="fa fa-plus" />
                    </span>
                  </a>
                  <div className="project-item-info">
                    <div className="project-item-info-content">
                      <h3 className="project-item-title">
                        <a href="projects-single.html">TNT East Facility</a>
                      </h3>
                      <p className="project-cat">Government</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* shuffle item 3 end */}
              <div
                className="col-lg-4 col-md-6 shuffle-item"
                data-groups='["education","infrastructure"]'
              >
                <div className="project-img-container">
                  <a
                    className="gallery-popup"
                    href="images/projects/project4.jpg"
                    aria-label="project-img"
                  >
                    <img
                      className="img-fluid"
                      src="images/projects/project4.jpg"
                      alt="project-img"
                    />
                    <span className="gallery-icon">
                      <i className="fa fa-plus" />
                    </span>
                  </a>
                  <div className="project-item-info">
                    <div className="project-item-info-content">
                      <h3 className="project-item-title">
                        <a href="projects-single.html">Narriot Headquarters</a>
                      </h3>
                      <p className="project-cat">Infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* shuffle item 4 end */}
              <div
                className="col-lg-4 col-md-6 shuffle-item"
                data-groups='["infrastructure","education"]'
              >
                <div className="project-img-container">
                  <a
                    className="gallery-popup"
                    href="images/projects/project5.jpg"
                    aria-label="project-img"
                  >
                    <img
                      className="img-fluid"
                      src="images/projects/project5.jpg"
                      alt="project-img"
                    />
                    <span className="gallery-icon">
                      <i className="fa fa-plus" />
                    </span>
                  </a>
                  <div className="project-item-info">
                    <div className="project-item-info-content">
                      <h3 className="project-item-title">
                        <a href="projects-single.html">Kalas Metrorail</a>
                      </h3>
                      <p className="project-cat">Infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* shuffle item 5 end */}
              <div
                className="col-lg-4 col-md-6 shuffle-item"
                data-groups='["residential"]'
              >
                <div className="project-img-container">
                  <a
                    className="gallery-popup"
                    href="images/projects/project6.jpg"
                    aria-label="project-img"
                  >
                    <img
                      className="img-fluid"
                      src="images/projects/project6.jpg"
                      alt="project-img"
                    />
                    <span className="gallery-icon">
                      <i className="fa fa-plus" />
                    </span>
                  </a>
                  <div className="project-item-info">
                    <div className="project-item-info-content">
                      <h3 className="project-item-title">
                        <a href="projects-single.html">Ancraft Avenue House</a>
                      </h3>
                      <p className="project-cat">Residential</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* shuffle item 6 end */}
            </div>
            {/* shuffle end */}
          </div>
          <div className="col-12">
            <div className="general-btn text-center">
              <a className="btn btn-primary" href="projects.html">
                View All Projects
              </a>
            </div>
          </div>
        </div>
        {/* Content row end */}
      </div>
      {/*/ Container end */}
    </section>
  );
}

export default SectionProject;
