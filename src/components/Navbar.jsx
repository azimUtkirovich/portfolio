import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="links">
        <Link to="/">{t("navbar.home")}</Link>
        <Link to="/projects">{t("navbar.projects")}</Link>
        <Link to="/experience">{t("navbar.experience")}</Link>
      </div>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="lang">
        <button onClick={() => handleChangeLanguage('ru')}>РУ</button>
        <button onClick={() => handleChangeLanguage('uz')}>UZ</button>
        <button onClick={() => handleChangeLanguage('en')}>EN</button>
      </div>
    </div>
  );
};

export default Navbar;
