import React from "react";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon
          onClick={() => window.open("https://github.com/azimUtkirovich")}
        />
        <LinkedInIcon
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/azim-utkirovich-3505a320a/"
            )
          }
        />
        <TelegramIcon onClick={() => window.open("https://t.me/N0Win")}/>
        <WhatsappIcon onClick={() => window.open("https://wa.me/998915885528")}/>
      </div>
      <p>&copy; 2023 AzimBRO</p>
    </div>
  );
};

export default Footer;
