import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

import { useTranslation } from "react-i18next";

import "../styles/Home.css";

const Home = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="home">
      <div className="about">
        <h2>{t("home.title")}</h2>
        <div className="prompt">
          <p>{t("home.description")}</p>
          <LinkedInIcon
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/azim-utkirovich-3505a320a/"
              )
            }
          />
          <EmailIcon
            style={{ cursor: "pointer" }}
            onClick={() => window.open("mailto:azimutkirovich80@gmail.com")}
          />
          <GitHubIcon
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://github.com/azimUtkirovich")
            }
          />
        </div>
      </div>
      <div className="skills">
        <h1>{t("skills.title")}</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>
              ReactJS, HTML, CSS, NPM, Yarn, Bootstrap, TailwindCSS, Vite, Vue,
              MaterialUI, ThreeJS
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>NodeJS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
