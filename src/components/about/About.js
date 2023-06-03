import React from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./about.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="aboutUs" className="aboutUs__container">
      <div className="container mb-4">
        <div className="media-container-row">
          <div className="col-12 align-center">
            <h2 className="mbr-section-title pb-2 mbr-fonts-style display-2">
              {t('aboutUs.header')}
            </h2>
            {/* <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style display-7">
                Clients Template for Business Website
            </h3> */}
          </div>
        </div>
      </div>
      <div className="first-col">
        <div className="about__container">
          <h1 className="display-5 mb-4">
            {t('aboutUs.body.header')}
          </h1>
          <h4 className="text-primary mb-4">
            {t('aboutUs.body.question')}
          </h4>
          <p style={{textAlign: 'center'}} className="mb-4">
            {t('aboutUs.body.answer')}
          </p>
        </div>
      </div>
      <div className="second-col">
        <div className="about__container">
          <div className="second-col__list">
            <div className="list__item">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
                style={{ width: 60, height: 60 }}
              >
                <FontAwesomeIcon icon="fa-solid fa-eye" size='2xl'/>
              </div>
              <div className="ps-4">
                <h3>{t('aboutUs.target1.title')}</h3>
                <p className="mb-0">
                  {t('aboutUs.target1.content')}
                </p>
              </div>
            </div>
            <div className="list__item">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
                style={{ width: 60, height: 60 }}
              >
                <FontAwesomeIcon icon="fa-solid fa-message" size='2xl'/>
              </div>
              <div className="ps-4">
                <h3>{t('aboutUs.target2.title')}</h3>
                <p className="mb-0">
                  {t('aboutUs.target2.content')}
                </p>
              </div>
            </div>
            <div className="list__item">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
                style={{ width: 60, height: 60 }}
              >
                <FontAwesomeIcon icon="fa-solid fa-anchor" size='2xl'/>
              </div>
              <div className="ps-4">
                <h3>{t('aboutUs.target3.title')}</h3>
                <p className="mb-0">
                  {t('aboutUs.target3.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;