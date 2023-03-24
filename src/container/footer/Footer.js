import React from "react";
import {useTranslation} from 'react-i18next';
import './footer.css';


const Footer = () => {

  const {t, i18n} = useTranslation();

  return (
    <footer>
      <div className="container first-footer">
        <div className="footer-nav">
          <div className="col">
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="inner-nav">
              <a className="text-secondary mb-2" href="#">
                {t('menu.home')}
              </a>
              <a className="text-secondary mb-2" href="#AboutUs">
                {t('menu.aboutUs')}
              </a>                          
              <a className="text-secondary mb-2" href="#Services">
                {t('menu.services')}
              </a>
              <a className="text-secondary mb-2" href="#Quote">
                {t('menu.quote')}
              </a>
              <a className="text-secondary" href="#Partners">
                {t('menu.partners')}
              </a>
            </div>
          </div>
          {/* <div className="col">
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
          </div> */}
          <div className="col">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2">
              <i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New
              York, USA
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-open text-primary me-2"></i>
              info@badrgas.com
            </p>
            <p className="mb-0">
              <i className="bi bi-telephone text-primary me-2"></i>+966505489212
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
            {t('copyRight.name')}
          </a>
          . {t('copyRight.description')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
