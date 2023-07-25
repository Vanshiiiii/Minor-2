import React, { useEffect, useContext, useState } from "react";
import "./home.css";
import styles from "./homepage.module.css";
import stockbg from "../../data/stockbg.mp4";
import $ from "jquery";
import authContext from "../../utils/auth-hook";
import firebase from "firebase";
import About from "../About/About";
import Img from "../../data/SharkUpLogoTwo.png";



const Homepage = (props) => {
  const auth = firebase.auth();
  const db = firebase.firestore();
  const authData = useContext(authContext);
  const isAuth = useContext(authContext);

  useEffect(() => {
    $(".left")
      .on("mouseenter", function () {
        $(".containerrr").addClass("left-is-hovered");
      })
      .on("mouseleave", function () {
        $(".containerrr").removeClass("left-is-hovered");
      });

    $(".right")
      .on("mouseenter", function () {
        $(".containerrr").addClass("right-is-hovered");
      })
      .on("mouseleave", function () {
        $(".containerrr").removeClass("right-is-hovered");
      });
  }, []);

  const signouttt = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.setLoggedIn(false);
        props.setStartLoggedIn(false);
        authData.authTriggered();
      });
  };

  return (
    <div>
      <div className="land">
        <div className="containerrr" >
          <div className="one-half left">
            <h1>INVESTOR</h1>
            {props.loggedIn ? (
              <a href="/investor/dashboard" className="cta" style={{width:"200px"}}>
                Dashboard
              </a>
            ) : (
              <a href="/ilogin" className="cta">
                Login
              </a>
            )}
          </div>
          <div className="one-half right">
            <h1>START-UP</h1>
            {props.startLoggedIn ? (
              <a href="user/dashboard" className="cta">
                LogOut
              </a>
            ) : (
              <a href="/login" className="cta">
                Login
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="homepageWrapper">
        <div className="videoPlay">
          <video
            style={{ width: "2000px", marginBottom: "-60px" }}
            className={`${styles.cover}`}
            src={stockbg}
            autoPlay
            loop
            muted
          />
        </div>
        <div className={`${styles.homepageWrapperOne}`}>
          <div
            style={{ marginTop: "-1500px", marginLeft: "100px" }}
            className={`${styles.homepageImage}`}
          >
            <div className={`${styles.imageWrapper}`}>
              <img
                style={{
                  width: "500px",
                  marginLeft: "-660px",
                }}
                className={`${styles.cover}`}
                src={Img}
                alt="sharkUp Logo"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.homepageDetails}`}>
          <div
            style={{
              background: "rgba(255,255,255,0.3)",
              width: "650px",
              borderRadius: "20px",
              marginLeft: "50px",
              marginTop: "-50px",
            }}
            className="para"
          >
            <p
              style={{
                padding: "15px",
                color: "white",
              }}
            >
              Welcome to our startup investor website! We provide a platform for
              investors to discover and invest in innovative startups with high
              growth potential. Our mission is to connect promising
              entrepreneurs with smart investrs and help them bring their ideas
              to life. As an investor, you will have access to a diverse range
              of startups across different sectors and stages of growth. Our
              platform offers comprehensive information about each startup,
              including their business model, market opportunity, and growth
              potential. You can also connect with the founders and management
              teams directly to gain deeper insights into their vision and
              strategy.
            </p>
            <p style={{ padding: "15px", color: "white" }}>
              We have a rigorous selection process in place to ensure that only
              the most promising startups make it onto our platform. Our team of
              experienced investment professionals conducts thorough due
              diligence on each startup, including an analysis of their
              financials, market position, and competitive landscape. We
              understand that investing in startups can be risky, which is why
              we provide ongoing support to our investors throughout the
              investment journey. Our platform offers tools and resources to
              help you manage your investments effectively and track their
              performance over time.
            </p>
          </div>

          <div
            style={{ marginTop: "100px" }}
            id="about"
            className="about__content"
          >
            
            <About />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
