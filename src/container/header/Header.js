import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/images/colored-logo.svg";

const Header = () => {
  const [menu, setMenu] = useState(null);
  const onScrollEvent = (e) => {
    console.log('scroll')
  }
  return (
    <>
      <header >
        <div onScroll={onScrollEvent} className="container">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="#" className="logo">
              <img src={logo} alt="colored logo" />
              <div>
                <span>مؤسسة بدر لخدمات الغاز</span>
                <span>Badr Gas Services Corporation</span>
              </div>
            </a>
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
                <a href="contact.html">العربية</a>
              </li>
            </ul>
            <a onClick={() => setMenu("open")} className="menu-trigger">
              <span>Menu</span>
            </a>

            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </header>
      <div className={`menu ${menu}`}>
        <a onClick={() => setMenu('')} className="close-trigger">
          <span>X</span>
        </a>
        <div className="menu__container">
          <ul className="menu__list" role="list">
            <li>
              <a href="#test" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#test">Category</a>
            </li>
            <li>
              <a href="#test">Listing</a>
            </li>
            <li>
              <a href="#test">Contact Us</a>
            </li>
            <li>
              <a href="#test">العربية</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
