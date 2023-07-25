import React from "react";
import styled from "@emotion/styled";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./about.module.css";

import Calendar from "react-calendar";

const StyledCard = styled.div`
  backgroundcolor: #f0f4ef;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  border: 1px solid #eaeaea;
  margin: 0 0 20px;
  width: 300px;
  margin: 10px;
  height: 450px;
  width: 389px;
  color: #eaeaea;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  text-align: justify;
  h2 {
    font-size: 1.5rem;
    margin: 0 0 20px;
    justify-self: center;
    align-self: center;
  }
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
`;

const HiddenButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1px;
  margin: 10px 0px;
  border: none;
  outline: none;
  width: 50px;
  border-radius: 8px;
  background-color: #262626;
  transition: all 0.3s ease-in-out;
  &:hover {
    width: 70px;
    background-color: #262626;
    color: #eaeaea;
  }
`;

const BeautifulSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1px;
  margin: 0px 0px;
  border: none;
  outline: none;
  width: 150px;
  height: 50px;
  border-radius: 15px;
  background-color: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  color: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 170px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    width: 150px;
    background-color: #262626;
    color: #eaeaea;
  }
`;

function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "centre",
        marginLeft: "-610px",
        padding: "70px",
        Margin: "10px",
        alignItems: "center",
        height: "400px",
        width: "1400px",
      }}
    >
      <StyledCard
        style={{ backgroundColor: "rgba(13, 24, 33,0.5)", marginLeft: "15px" }}
      >
        <h4
          style={{
            marginTop: "50px",
            color: "white",
            fontWeight: "bold",
            fontSize: "25px",
            width: "200px",
            marginLeft: "130px",
            alignText: "centre",
            borderRadius: "25px",
            padding: "5px",
          }}
        >
          ABOUT US
        </h4>
        <div
          style={{ marginTop: "70px", marginLeft: "20px", marginRight: "22px" }}
        >
          <p style={{ fontSize: "14px", width: "350px" }}>
            There exists no such platform where the investor can directly invest
            in a startup of their choice . Shark Up will bridge this gap and
            provide an interface for the startup to promote their idea and for
            the company to invest in a startup in a safe and trusted way. We at
            Shark Up aim to provide a platform to startups to raise external
            funding or capital in order to expand their businesses into new
            markets or locations. It also allows them to invest in research &
            development (R&D) or to fend off the competition. This in turn helps
            generate more employment.
          </p>
        </div>
      </StyledCard>
      <StyledCard
        style={{ backgroundColor: "rgba(13, 24, 33,0.5)", marginLeft: "30px" }}
      >
        <div>
          <h5
            style={{
              marginTop: "40px",
              color: "white",
              fontWeight: "bold",
              fontSize: "25px",
              width: "200px",
              marginLeft: "115px",
              borderRadius: "25px",
              padding: "5px",
            }}
          >
            CONTACT US
          </h5>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <HiddenButton>
              <span>
                <FaFacebook
                  style={{ color: "white", width: "25px", height: "25px" }}
                />
              </span>
            </HiddenButton>
            <HiddenButton>
              <span>
                <FaInstagram
                  style={{ color: "white", width: "25px", height: "25px" }}
                />
              </span>
            </HiddenButton>
            <HiddenButton>
              <span>
                <FaTwitter
                  style={{ color: "white", width: "25px", height: "25px" }}
                />
              </span>
            </HiddenButton>
            <HiddenButton>
              <span>
                <FaWhatsapp
                  style={{ color: "white", width: "25px", height: "25px" }}
                />
              </span>
            </HiddenButton>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.001101633671!2d77.36986691547693!3d28.62972908241893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce551491b3ce7%3A0x7335d9fcfd4d9db0!2sJAYPEE%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1670133218412!5m2!1sen!2sin"
              width="300"
              height="300"
              style={{
                border: "2px solid",
                width: "250px",
                height: "175px",
                borderRadius: "20px",
                marginLeft: "70px",
                padding: "10px",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              <h6
                style={{
                  marginLeft: "20px",
                  padding: "5px",
                  fontSize: "14px",
                }}
              >
                ADDRESS: &nbsp;&nbsp;
              </h6>

              <p style={{ fontSize: "14px", marginTop: "3px" }}>
                {" "}
                B21, SECTOR-63,NOIDA PINCODE-XXXXX
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h6
                style={{
                  marginLeft: "20px",
                  padding: "5px",
                  fontSize: "14px",
                }}
              >
                CONTACT US: &nbsp;&nbsp;{" "}
              </h6>
              <p style={{ fontSize: "16px", marginTop: "2px" }}> 9988776321</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h6
                style={{
                  marginLeft: "20px",
                  padding: "5px",
                  fontSize: "15px",
                }}
              >
                EMAIL ID:&nbsp;&nbsp;
              </h6>
              <p style={{ fontSize: "16px" }}> xxyyzz@sharkup.com</p>
            </div>
          </div>
        </div>
      </StyledCard>
      <StyledCard
        style={{ backgroundColor: "rgba(13, 24, 33,0.5)", marginLeft: "30px" }}
      >
        <h5
          style={{
            marginTop: "40px",
            color: "white",
            fontWeight: "bold",
            fontSize: "25px",
            width: "200px",
            marginLeft: "100px",
            marginBottom: "20px",
            borderRadius: "25px",
            padding: "5px",
          }}
        >
          BOOK A DEMO
        </h5>
        <p style={{ padding: "10px" }}>
          
        </p>

        <div style={{ padding: "10px" }}>
          <Calendar />
        </div>
      </StyledCard>
    </div>
  );
}

export default About;
