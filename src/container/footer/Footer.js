import React from "react";
// import '../../components/fontAwesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTranslation} from 'react-i18next';
import qrcode from '../../assets/images/qrcode.svg'
import './footer.css';


const Footer = () => {

  const {t, i18n} = useTranslation();

  return (
    <footer dir={i18n.language === 'en' ? '' : 'rtl'}>
      <div className="container first-footer">
        <div className="footer-nav">
          <div className="col">
            <h3 className="text-white mb-4">{t('footer.title1')}</h3>
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
              {/* <a className="text-secondary mb-2" href="#Quote">
                {t('menu.quote')}
              </a> */}
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
            <h3 className="text-white mb-4">{t('footer.title2')}</h3>
            <p className="mb-2">
              <i className="bi bi-geo-alt text-primary me-2"></i>Riyadh, KSA
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
            <h3 className="text-white mb-4">{t('footer.title3')}</h3>
            <div className="d-flex">
              <a
                className="btn btn-lg  btn-lg-square rounded-circle me-2"
                href="#"
              >
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
              </a>
              <a
                className="btn btn-lg  btn-lg-square rounded-circle me-2"
                href="#"
              >
                <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
              </a>
              <a
                className="btn btn-lg  btn-lg-square rounded-circle me-2"
                href="#"
              >
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>
              <a
                className="btn btn-lg  btn-lg-square rounded-circle"
                href="whatsapp://send?phone=3464478983"
              >
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>
          <div className="col">
            <p className="mb-2">
              <img src={qrcode}  />
            </p>
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
