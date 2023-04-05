import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next';
import "./services.css";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="service__container">
      <div className="container mb-4">
        <div className="media-container-row">
          <div className="col-12 align-center">
            <h2 className="mbr-section-title pb-2 mbr-fonts-style display-2">
              {t('services.header')}
            </h2>
            {/* <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style display-7">
              Clients Template for Business Website
            </h3> */}
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="pad col-lg-4 col-md-6">
          <div className="service-item bg-secondary text-center px-5">
            <div
              className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 item__size"
            >
              {/* <i className="fa fa-user-tie fa-2x"></i> */}
              <FontAwesomeIcon size="2xl" style={{ color: "#336C70" }} icon="fa-solid fa-wrench" />
            </div>
            <h3 className="mb-3">
              {t('services.card1.title')}</h3>
            <p className="mb-0">
              {t('services.card1.description')}
            </p>
          </div>
        </div>
        <div className="pad col-lg-4 col-md-6">
          <div className="service-item bg-secondary text-center px-5">
            <div
              className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 item__size"
            >
              {/* <i className="fa fa-chart-pie fa-2x"></i> */}
              <FontAwesomeIcon size="2xl" style={{ color: "#336C70" }} icon="fa-solid fa-lightbulb" />
            </div>
            <h3 className="mb-3">
              {t('services.card2.title')}</h3>
            <p className="mb-0">
              {t('services.card2.description')}
            </p>
          </div>
        </div>
        <div className="pad col-lg-4 col-md-6">
          <div className="service-item bg-secondary text-center px-5">
            <div
              className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 item__size"
            >
              {/* <i className="fa fa-chart-line fa-2x"></i> */}
              <FontAwesomeIcon size="2xl" style={{ color: "#336C70" }} icon="fa-solid fa-right-left" />
            </div>
            <h3 className="mb-3">
              {t('services.card3.title')}</h3>
            <p className="mb-0">
              {t('services.card2.description')}
            </p>
          </div>
        </div>
        <div className="pad col-lg-4 col-md-6">
          <div className="service-item bg-secondary text-center px-5">
            <div
              className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 item__size"
            >
              {/* <i className="fa fa-chart-area fa-2x"></i> */}
              <FontAwesomeIcon size="2xl" style={{ color: "#336C70" }} icon="fa-solid fa-helmet-safety" />
            </div>
            <h3 className="mb-3">
              {t('services.card4.title')}</h3>
            <p className="mb-0">
              {t('services.card4.description')}
            </p>
          </div>
        </div>
        <div className="pad col-lg-4 col-md-6">
          <div className="service-item bg-secondary text-center px-5">
            <div
              className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 item__size"
            >
              {/* <i className="fa fa-balance-scale fa-2x"></i> */}
              <FontAwesomeIcon size="2xl" style={{ color: "#336C70" }} icon="fa-solid fa-hand-holding-heart" />
            </div>
            <h3 className="mb-3">
              {t('services.card5.title')}</h3>
            <p className="mb-0">
              {t('services.card5.description')}
            </p>
          </div>
        </div>
        <div className="pad col-lg-4 col-md-6">
          <div className="service-item bg-secondary text-center px-5">
            <div
              className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 item__size"
            >
              {/* <i className="fa fa-house-damage fa-2x"></i> */}
              <FontAwesomeIcon size="2xl" style={{ color: "#336C70" }} icon="fa-solid fa-shield" />
            </div>
            <h3 className="mb-3">
              {t('services.card6.title')}</h3>
            <p className="mb-0">
              {t('services.card6.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
