import React from "react";

function MainContent() {
  return (
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="error-page text-center">
              <div className="error-code">
                <h2>
                  <strong>404</strong>
                </h2>
              </div>
              <div className="error-message">
                <h3>Oops... Page Not Found!</h3>
              </div>
              <div className="error-body">
                Try using the button below to go to main page of the site <br />
                <a href="index.html" className="btn btn-primary">
                  Back to Home Page
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Content row */}
      </div>
      {/* Conatiner end */}
    </section>
  );
}

export default MainContent;
