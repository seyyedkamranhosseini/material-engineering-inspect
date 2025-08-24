import React from "react";

function SectionNews() {
  return (
    <section id="news" className="news">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title">Work of Excellence</h2>
            <h3 className="section-sub-title">Recent Projects</h3>
          </div>
        </div>
        {/*/ Title row end */}
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="latest-post">
              <div className="latest-post-media">
                <a href="news-single.html" className="latest-post-img">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="images/news/news1.jpg"
                    alt="img"
                  />
                </a>
              </div>
              <div className="post-body">
                <h4 className="post-title">
                  <a href="news-single.html" className="d-inline-block">
                    We Just Completes $17.6 million Medical Clinic in
                    Mid-Missouri
                  </a>
                </h4>
                <div className="latest-post-meta">
                  <span className="post-item-date">
                    <i className="fa fa-clock-o" /> July 20, 2017
                  </span>
                </div>
              </div>
            </div>
            {/* Latest post end */}
          </div>
          {/* 1st post col end */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="latest-post">
              <div className="latest-post-media">
                <a href="news-single.html" className="latest-post-img">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="images/news/news2.jpg"
                    alt="img"
                  />
                </a>
              </div>
              <div className="post-body">
                <h4 className="post-title">
                  <a href="news-single.html" className="d-inline-block">
                    Thandler Airport Water Reclamation Facility Expansion
                    Project Named
                  </a>
                </h4>
                <div className="latest-post-meta">
                  <span className="post-item-date">
                    <i className="fa fa-clock-o" /> June 17, 2017
                  </span>
                </div>
              </div>
            </div>
            {/* Latest post end */}
          </div>
          {/* 2nd post col end */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="latest-post">
              <div className="latest-post-media">
                <a href="news-single.html" className="latest-post-img">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="images/news/news3.jpg"
                    alt="img"
                  />
                </a>
              </div>
              <div className="post-body">
                <h4 className="post-title">
                  <a href="news-single.html" className="d-inline-block">
                    Silicon Bench and Cornike Begin Construction Solar
                    Facilities
                  </a>
                </h4>
                <div className="latest-post-meta">
                  <span className="post-item-date">
                    <i className="fa fa-clock-o" /> Aug 13, 2017
                  </span>
                </div>
              </div>
            </div>
            {/* Latest post end */}
          </div>
          {/* 3rd post col end */}
        </div>
        {/*/ Content row end */}
        <div className="general-btn text-center mt-4">
          <a className="btn btn-primary" href="news-left-sidebar.html">
            See All Posts
          </a>
        </div>
      </div>
      {/*/ Container end */}
    </section>
  );
}

export default SectionNews;
