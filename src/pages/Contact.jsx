import React from "react";
import BannerArea from "../components/general/BannerArea";

function Contact() {
  return (
    <>
      <BannerArea title="Contact Us" subtitle="Get in touch with our team" />
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Contact Information</h2>
              <div className="contact-info">
                <div className="info-item">
                  <h4>Phone</h4>
                  <p>(+9) 847-291-4353</p>
                </div>
                <div className="info-item">
                  <h4>Email</h4>
                  <p>office@Constra.com</p>
                </div>
                <div className="info-item">
                  <h4>Address</h4>
                  <p>9051 Constra Incorporate, USA</p>
                </div>
                <div className="info-item">
                  <h4>Global Certificate</h4>
                  <p>ISO 9001:2017</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h3>Send us a message</h3>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

