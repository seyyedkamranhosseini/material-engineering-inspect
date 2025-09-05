import React from "react";
import { Link } from "react-router-dom";

function BannerArea({ title, subtitle, Intro }) {
  return (
    <div
      id="banner-area"
      className="banner-area"
      style={{ backgroundImage: "url(images/banner/banner3.jpg)" }}
    >
      <div className="banner-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-heading">
                <h1 className="banner-title">{title}</h1>
                {subtitle && <p className="banner-subtitle">{Intro}</p>}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {title}
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {subtitle}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            {/* Col end */}
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </div>
      {/* Banner text end */}
    </div>
  );
}

export default BannerArea;
