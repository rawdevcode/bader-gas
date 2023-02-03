import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./about.css";

const About = () => {
  return (
    <div className="bg-secondary">
      <div className="row">
        <div className="first-col">
          <h1 className="display-5 mb-4">
            Welcome To <span className="text-primary">CONSULT</span>
          </h1>
          <h4 className="text-primary mb-4">
            Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem
            sit clita duo justo magna dolore
          </h4>
          <p className="mb-4">
            Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet
            magna at et sanctus, vero sea sit amet dolores, sit dolor duo
            invidunt dolor, kasd rebum consetetur diam invidunt erat stet.
            Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea invidunt
            rebum sadipscing consetetur. Amet diam amet amet sanctus sanctus
            invidunt erat ipsum eirmod.
          </p>
          <a href="" className="btn btn-primary py-md-3 px-md-5 rounded-pill">
            Get A Quote
          </a>
        </div>
        <div className="second-col">
          <div className="second-col__list">
            <div className="list__item">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
                style={{width: 60, height: 60}}
              >
                <FontAwesomeIcon icon="check-square" />

                <FontAwesomeIcon icon={['fab', 'apple']} />
                <FontAwesomeIcon icon="check-square" />
              </div>
              <div className="ps-4">
                <h3>Business Planning</h3>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
                  erat ipsum lorem et sit sed stet lorem sit clita duo
                </p>
              </div>
            </div>
            <div className="list__item">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
                style={{width: 60, height: 60}}
              >
                <FontAwesomeIcon icon="check-square" />
              </div>
              <div className="ps-4">
                <h3>Financial Analaysis</h3>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
                  erat ipsum lorem et sit sed stet lorem sit clita duo
                </p>
              </div>
            </div>
            <div className="list__item">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
                style={{width: 60, height: 60}}
              >
                <FontAwesomeIcon icon="check-square" />
              </div>
              <div className="ps-4">
                <h3>legal Advisory</h3>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
                  erat ipsum lorem et sit sed stet lorem sit clita duo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;