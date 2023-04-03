import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./header.css";
import logo from "../../assets/images/colored-logo.svg";
import i18next from "i18next";

const Header = () => {
  const [menu, setMenu] = useState(null);
  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setBgColor(window.pageYOffset > 200)
      );
    }
  }, []);

  const { t, i18n } = useTranslation();

  const setLanguageHeandler = (e) => {
    i18next.changeLanguage(e);
  }

  return (
    <>
      <header className={bgColor ? 'bgColor' : ''}>
        <div className="container">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="#" className="logo">
              <img className='imgHeight' style={bgColor ? { height: 50, padding: 3 } : {}} src={logo} alt="colored logo" />
              <div style={bgColor ? { fontSize: '0.55rem' } : {}}>
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
                {
                  i18n.language === 'en' ?
                    <button onClick={() => setLanguageHeandler('ar')}>{t('menu.language')}</button>
                    :
                    <button onClick={() => setLanguageHeandler('en')}>{t('menu.language')}</button>
                }
                {/* <a href="contact.html">{t('menu.language')}</a> */}
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
