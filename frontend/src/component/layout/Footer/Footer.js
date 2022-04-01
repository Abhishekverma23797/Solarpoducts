import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Solar Product.</h1>
        <p>Go Green Stay</p>

        <p>Copyrights 2021 &copy; Infoway</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a>Instagram</a>
       
        <a>Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
