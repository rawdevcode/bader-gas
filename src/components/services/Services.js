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
            <h3 className="mb-3">Maintenance</h3>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
              ipsum lorem et sit sed stet lorem
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
            <h3 className="mb-3">Implement</h3>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
              ipsum lorem et sit sed stet lorem
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
            <h3 className="mb-3">Supply</h3>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
              ipsum lorem et sit sed stet lorem
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
            <h3 className="mb-3">Supervisor</h3>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
              ipsum lorem et sit sed stet lorem
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
            <h3 className="mb-3">Provide</h3>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
              ipsum lorem et sit sed stet lorem
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
            <h3 className="mb-3">Contracts &amp; Protection</h3>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
              ipsum lorem et sit sed stet lorem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
