import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container first-footer">
        <div className="footer-nav">
          <div className="col">
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="inner-nav">
              <a className="text-secondary mb-2" href="#">
                Home
              </a>
              <a className="text-secondary mb-2" href="#">
                About Us
              </a>
              <a className="text-secondary mb-2" href="#">
                Our Services
              </a>
              <a className="text-secondary mb-2" href="#">
                Latest Blog
                Post
              </a>
              <a className="text-secondary" href="#">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col">
            <h3 className="text-white mb-4">Popular Links</h3>
            <div className="inner-nav">
              <a className="text-secondary mb-2" href="#">
                Home
              </a>
              <a className="text-secondary mb-2" href="#">
                About Us
              </a>
              <a className="text-secondary mb-2" href="#">
                Our Services
              </a>
              <a className="text-secondary mb-2" href="#">
                Latest Blog
                Post
              </a>
              <a className="text-secondary" href="#">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2">
              <i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New
              York, USA
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-open text-primary me-2"></i>
              info@example.com
            </p>
            <p className="mb-0">
              <i className="bi bi-telephone text-primary me-2"></i>+012 345 67890
            </p>
          </div>
          <div className="col">
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="d-flex">
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                href="#"
              >
                <i className="fab fa-instagram fw-normal"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container second-footer"
        style={{borderColor: `rgba(256, 256, 256, .1)`}}
      >
        <p>
          ©{" "}
          <a className="text-secondary border-bottom" href="#">
            Your Site Name
          </a>
          . All Rights Reserved. Designed by{" "}
          <a className="text-secondary border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
