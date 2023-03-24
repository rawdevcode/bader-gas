import React, { useState } from "react";
import {useTranslation} from 'react-i18next';
import "./header.css";
import logo from "../../assets/images/colored-logo.svg";

const Header = () => {
  const [menu, setMenu] = useState(null);
  const onScrollEvent = (e) => {
    console.log('scroll')
  }

  const {t} = useTranslation();

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
                  {t('menu.home')}
                </a>
              </li>
              <li>
                <a href="category.html">{t('menu.services')}</a>
              </li>
              <li>
                <a href="listing.html">{t('menu.quote')}</a>
              </li>
              <li>
                <a href="contact.html">{t('menu.aboutUs')}</a>
              </li>
              <li>
                <a href="contact.html">{t('menu.partners')}</a>
              </li>
              <li>
                <a href="contact.html">{t('menu.language')}</a>
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
                <a href="index.html" className="active">
                  {t('menu.home')}
                </a>
              </li>
              <li>
                <a href="category.html">{t('menu.services')}</a>
              </li>
              <li>
                <a href="listing.html">{t('menu.quote')}</a>
              </li>
              <li>
                <a href="contact.html">{t('menu.aboutUs')}</a>
              </li>
              <li>
                <a href="contact.html">{t('menu.partners')}</a>
              </li>
              <li>
                <a href="contact.html">{t('menu.language')}</a>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
