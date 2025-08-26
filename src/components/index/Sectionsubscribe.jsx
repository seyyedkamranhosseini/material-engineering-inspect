import React from "react";

function Sectionsubscribe() {
  return (
    <section className="subscribe no-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="subscribe-call-to-acton">
              <h3>Can We Help?</h3>
              <h4>+1 (408) 844-3775</h4>
            </div>
          </div>
          {/* Col end */}
          <div className="col-lg-8">
            <div className="ts-newsletter row align-items-center">
              <div className="col-md-5 newsletter-introtext">
                <h4 className="text-white mb-0">Newsletter Sign-up</h4>
                <p className="text-white">Latest updates and news</p>
              </div>
              <div className="col-md-7 newsletter-form">
                <form action="#" method="post">
                  <div className="form-group">
                    <label
                      htmlFor="newsletter-email"
                      className="content-hidden"
                    >
                      Newsletter Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="newsletter-email"
                      className="form-control form-control-lg"
                      placeholder="Your your email and hit enter"
                      autoComplete="off"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* Newsletter end */}
          </div>
          {/* Col end */}
        </div>
        {/* Content row end */}
      </div>
      {/*/ Container end */}
    </section>
  );
}

export default Sectionsubscribe;
