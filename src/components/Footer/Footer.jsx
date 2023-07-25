import React from "react";
import styles from "./footer.module.css";
import sharkUpLogo from "../../data/SharkUpLogoTwo.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";



const Footer = () => {
  return (
    <div>
      <div className={`${styles.footerWrapper}`}>
        <div className={`${styles.footerWrapperOne}`}>
          <div className={`${styles.imageWrapper}`}>
            <img
              className={`${styles.cover}`}
              src={sharkUpLogo}
              alt="sharkUp Logo"
            />
          </div>
        </div>

        <div className={`${styles.footerWrapperThree}`}>
          <BsFacebook
            style={{ fontSize: "30px", marginRight: "50px", cursor: "pointer" }}
          />

          <BsInstagram
            style={{ fontSize: "30px", marginRight: "50px", cursor: "pointer" }}
          />

          <BsTwitter
            style={{ fontSize: "30px", marginRight: "50px", cursor: "pointer" }}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
