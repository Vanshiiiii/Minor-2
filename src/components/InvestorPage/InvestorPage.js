import React, { useEffect, useState,useContext } from "react";
import firebase from "firebase";
import Card from "../Cards/Card";
import "./investorPage.css";
import {Button, Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoCarSportOutline, IoFastFoodOutline } from "react-icons/io5";
import { GiBookshelf, GiLipstick } from "react-icons/gi";
import {GrCloudComputer} from "react-icons/gr";
import {HiUserGroup} from "react-icons/hi";
import authContext from "../../utils/auth-hook";
import { Navigate, useNavigate } from "react-router-dom";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import "../Homepage/home.css";
import EmailButton from "./EmailButton";
import Login from "../Login/Login";


function Investor(props) {
  const [investorData, setInvestorData] = useState([]);
  const [filteredData,setFilteredData]=useState([]);
  const [selected,setSelected]=useState("All");
  const [redirect,setRedirect]=useState(false);
  const [show,setShow]=useState(false);
const [openData,setOpenData]=useState({});
  const auth = firebase.auth();
  const db = firebase.firestore();
  const authData = useContext(authContext);
  const isAuth = useContext(authContext);
  let navigate=useNavigate();

  const notify = () =>{ 
    toast("Please Login First!", { toastId: "success1" });
    setTimeout(()=>{
      navigate("/ilogin");
    },3000);
    ;
}
 

  function openModal(d){
    setShow(true);
    setOpenData(d);
  }
  function closeModal(){
    setShow(false);
    setOpenData({});
  }
  function check(){
    if(props.loggedIn===false && props.startLoggedIn===false){
    setRedirect(true);
  }
}

  useEffect(() => {
   fetchData();
   check();
   
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

  function handleClick(name){
    if(name==="All"){
        setSelected("All");
    }
    if (name === "Automobile") {
      setSelected("Automobile");
    }
    if (name === "Education") {
      setSelected("Education");
    }
    if (name === "IT") {
    setSelected("IT");
    } 
    if (name === "Cosmetics") {
      setSelected("Cosmetics");
    } 
    if (name === "Food") {
      setSelected("Food");
    }

    if(name==="All"){
        setFilteredData(investorData);
    }else{
let sample = [];
investorData.map((d) => {
  if (d.industry === name) {
    sample.push(d);
  }
});
setFilteredData(sample);
    }
    
  }

  function fetchData(){
     setInvestorData([]);
     const documents = [];
     db.collection("Investors")
       .get()
       .then((querySnapshot) => {
         if (querySnapshot) {
           querySnapshot.docs.forEach((doc) => {
             documents.push(doc.data());
             });
           setInvestorData(documents);
           setFilteredData(documents);
           console.log(investorData);
         }
       });
       
  }
 
  return (
    <div className="investors_main">
      <ToastContainer />
      {redirect ? (
        notify()
      ) : (
        <div>
          <h2 className="head">ALL INVESTORs</h2>
          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <h1 style={{ fontSize: "30px", marginLeft: "90px", }}>
                INVESTOR DETAILS
              </h1>
            </Modal.Header>
            <Modal.Body>
              <div className="modal_main">
                <img className="modal_img_inv" src={openData.imageUrl} />
                <p>
                      <span style={{marginTop:"40px", fontSize:"19px",fontWeight:"bold"}}>{openData.name}</span>
                </p>
                <div className="modal_details">
                  <div className="card_left">
                   
                    <p>
                      INDUSTRY <span>: {openData.industry}</span>
                    </p>
                    <p>
                      FUNDING RANGE  <span>: {openData.fundingRange}</span>
                    </p>
                    <p>
                      DESCRIPTION <span>: {openData.desc}</span>
                    </p>
                    <p>
                      PREVIOUS COLLABORATIONS <span>: {openData.prevCollab}</span>
                    </p>
                    <p>
                      CONTACT <span>: {openData.phoneNumber}</span>
                    </p>
                  </div>
                </div>
                <Button>
                  <a style={{color:"white"}} href="mailto:vanshika.yadavv07@gmail.com">Connect</a>
                </Button>
              </div>
            </Modal.Body>
          </Modal>
          <div className="tabs">
            <div
              className={
                selected === "All" ? "single_tab active" : "single_tab"
              }
              onClick={() => handleClick("All")}
            >
              <HiUserGroup className="tab_icon" />
              <p>ALL</p>
            </div>
            <div
              className={
                selected === "Automobile" ? "single_tab active" : "single_tab"
              }
              onClick={() => handleClick("Automobile")}
            >
              <IoCarSportOutline className="tab_icon" />
              <p>AUTOMOBILE</p>
            </div>
            <div
              className={
                selected === "Education" ? "single_tab active" : "single_tab"
              }
              onClick={() => handleClick("Education")}
            >
              <GiBookshelf className="tab_icon" />
              <p>EDUCATION</p>
            </div>
            <div
              className={selected === "IT" ? "single_tab active" : "single_tab"}
              onClick={() => handleClick("IT")}
            >
              <GrCloudComputer className="tab_icon" />
              <p>IT</p>
            </div>
            <div
              className={
                selected === "Cosmetics" ? "single_tab active" : "single_tab"
              }
              onClick={() => handleClick("Cosmetics")}
            >
              <GiLipstick className="tab_icon" />
              <p>COSMETICS</p>
            </div>
            <div
              className={
                selected === "Food" ? "single_tab active" : "single_tab"
              }
              onClick={() => handleClick("Food")}
            >
              <IoFastFoodOutline className="tab_icon" />
              <p>FOOD</p>
            </div>
          </div>
          <div className="all_cards">
            {filteredData.map((d, index) => (
              <div onClick={() => openModal(d)}>
                <Card data={d} key={index} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Investor;
