import React from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./about.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="aboutUs__container">
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
            Welcome To <span className="text-primary">Badr Gas Services Corporation</span>
          </h1>
          <h4 className="text-primary mb-4">
            who are we?
          </h4>
          <p style={{textAlign: 'center'}} className="mb-4">
            It was founded by a group of former technicians in the National Gas and Industrialization Company, who have long experience in the field of liquefied petroleum gas services, harnessing in this institution a juice of experience of up to thirty-six years of giving to provide all the necessary services to our valued customers with a group of qualified and excellently trained workers To reach the highest levels of professionalism.
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