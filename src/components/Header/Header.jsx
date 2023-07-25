import React, { useContext ,useState} from "react";
import styles from "./header.module.css";
import sharkUpLogo from "../../data/SharkUpLogoTwo.png";
import { Link, useNavigate } from "react-router-dom";
import authContext from "../../utils/auth-hook";
import firebase from "firebase";
const Header = (props) => {
  const isAuth = useContext(authContext);
    const auth = firebase.auth();
    const authData = useContext(authContext);


   
    
  let navigate = useNavigate();
  return (
    <div>
      <div className={`${styles.headerWrapper}`}>
        <div className={`${styles.imageWrapper}`}>
          <img
            className={`${styles.cover}`}
            src={sharkUpLogo}
            alt="sharkUp Logo"
          />
        </div>
        <div className={`${styles.headerContentWrapper}`}>
          <ul  className={`${styles.headerContent}`}>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <a href="/#about">
              {" "}
              <li>ABOUT US</li>
            </a>
            <Link to="/objectives">
              <li>OBJECTIVEs</li>
            </Link>
            {(props.loggedIn || props.startLoggedIn) ? (
            <Link to="/articles">
              <li>ARTICLES</li>
            </Link>
            ) : null}
            <Link to="/investors">
              <li>INVESTORs</li>
            </Link>
            <Link to="/startup">
              <li>START-UPs</li>
            </Link>
            {props.loggedIn ? (
              <Link to="/investor/dashboard">
                <li>DASHBOARD</li>
              </Link>
            ) : null}
            {props.startLoggedIn ? (
              <Link to="/user/dashboard">
                <li>DASHBOARD</li>
              </Link>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
