import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header-area header-sticky wow slideInDown animated">
      <div className="container">
        <nav className="main-nav">
          {/* ***** Logo Start ***** */}
          <a href="index.html" className="logo"></a>
          {/* ***** Logo End ***** */}
          {/* ***** Menu Start ***** */}
          <ul className="nav" role="list">
            <li>
              <a href="index.html" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="category.html">Category</a>
            </li>
            <li>
              <a href="listing.html">Listing</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
            <li>
              <div className="main-white-button">
                <a href="#">
                  <i className="fa fa-plus"></i> Add Your Listing
                </a>
              </div>
            </li>
          </ul>
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
          {/* ***** Menu End ***** */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
