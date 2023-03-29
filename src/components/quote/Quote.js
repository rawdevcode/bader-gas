import React from "react";
import "./quote.css";
import quote from '../../assets/images/quote.jpg'

const Quote = () => {
  return (
      <div className="row">
        <div className="col-lg-6 py-6 px-5">
          <h1 className="display-5 mb-4">Request A Free Quote</h1>
          <p className="mb-4">
            Kasd vero erat ea amet justo no stet, et elitr no dolore no elitr
            sea kasd et dolor diam tempor. Nonumy sed dolore no eirmod sit
            nonumy vero lorem amet stet diam at. Ea at lorem sed et, lorem et
            rebum ut eirmod gubergren, dolor ea duo diam justo dolor diam ipsum
            dolore stet stet elitr ut. Ipsum amet labore lorem lorem diam magna
            sea, eos sed dolore elitr.
          </p>
          <form>
            <div className="row gx-3">
              <div className="col-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="form-floating-1"
                    placeholder="John Doe"
                  />
                  <label for="form-floating-1">Full Name</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="form-floating-2"
                    placeholder="name@example.com"
                  />
                  <label for="form-floating-2">Email address</label>
                </div>
              </div>
              <div className="col-6">
                <button className="btn btn-primary w-100 h-100" type="submit">
                  Request A Quote
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6" 
        // style={{ minHeight: 400 }}
        >
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100"
              src={quote}
            //   style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
  );
};

export default Quote;
