import  "./startuppage.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import newEduLogo from "../../data/newEduLogo.png";
import newEduGraph from "../../data/newEduGraph.png";
import cosmexLogo from "../../data/cosmexLogo.png";
import cosmexGraph from "../../data/cosmexGraph.png";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Card from "../Cards/card2";
import "../InvestorPage/investorPage.css";
import { Navigate, useNavigate } from "react-router-dom";
import {Modal,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoCarSportOutline, IoFastFoodOutline } from "react-icons/io5";
import { GiBookshelf, GiLipstick } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
  import { CanvasJSChart } from "canvasjs-react-charts";
import { HiUserGroup } from "react-icons/hi";
import { Form } from "react-bootstrap";
import { BsCheck } from "react-icons/bs";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";



const Startuppage = (props) => {
  const [investorData, setInvestorData] = useState([]);
  const [payShow,setPayShow]=useState(false);
  const [options,setOptions]=useState(
    
    {animationEnabled: true,
			title:{
				text: "Monthly Sales - 2017"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Sales (in USD)",
				prefix: "$"
			},
      data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 42800 },
					{ x: new Date(2017, 3), y: 32400 },
					{ x: new Date(2017, 4), y: 35260 },
					{ x: new Date(2017, 5), y: 33900 },
					{ x: new Date(2017, 6), y: 40000 },
					{ x: new Date(2017, 7), y: 52500 },
					{ x: new Date(2017, 8), y: 32300 },
					{ x: new Date(2017, 9), y: 42000 },
					{ x: new Date(2017, 10), y: 37160 },
					{ x: new Date(2017, 11), y: 38400 }
				]
			}]});
      const [options2, setOptions2] = useState({
        animationEnabled: true,
        title: {
          text: "Monthly Sales - 2017",
        },
        axisX: {
          valueFormatString: "MMM",
        },
        axisY: {
          title: "Sales (in USD)",
          prefix: "$",
        },
        data: [
          {
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: [
              { x: new Date(2017, 0), y: 25060 },
              { x: new Date(2017, 1), y: 27980 },
              { x: new Date(2017, 2), y: 42800 },
              { x: new Date(2017, 3), y: 32400 },
              { x: new Date(2017, 4), y: 35260 },
              { x: new Date(2017, 5), y: 33900 },
              { x: new Date(2017, 6), y: 40000 },
              { x: new Date(2017, 7), y: 52500 },
              { x: new Date(2017, 8), y: 32300 },
              { x: new Date(2017, 9), y: 42000 },
              { x: new Date(2017, 10), y: 37160 },
              { x: new Date(2017, 11), y: 38400 },
            ],
          },
        ],
      });
 
  const [show,setShow]=useState(false);
   const [filteredData, setFilteredData] = useState([]);
   const [selected, setSelected] = useState("All");
   const [payableAmount, setPayableAmount] = useState(20000);
   const [openData,setOpenData]=useState({});
   const [redirect,setRedirect]=useState(false);
    let navigate=useNavigate();

  const notify = () =>{ 
    toast("Please Login First!", { toastId: "success1" });
    setTimeout(()=>{
      navigate("/login");
    },3000);
    ;
}
   const generateTokenRazor = (payableAmount) => {
     return fetch(`https://minor-payment-api.vercel.app/api/payment/details`, {
       method: "Post",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ amount: payableAmount }),
     })
       .then((response) => {
         console.log(response);
         return response.json();
       })
       .catch((err) => {
         console.log(err);
       });
   };

   const completeBooking = (transaction_id) => {
     console.log("Complete Booking");
   };

   const paymentHandler = async () => {
     if (payableAmount>0) {
       const getToken = (payableAmount) => {
         generateTokenRazor(payableAmount).then((data) => {
           const options = {
             key: "rzp_test_IVJoD9ft3rH2lg",
             name: openData.name,
             description: "Thank You for choosing us.",
             currency: "INR",
             amount:payableAmount*100,
             handler: async (response) => {
               await completeBooking(response.razorpay_payment_id);
               console.log("payment done", response.razorpay_payment_id);
               // processPayment(userId, token, response, data.amount);
             },
             theme: {
               color: "#f1bc19",
             },
           };
           const rzp1 = new window.Razorpay(options);
           rzp1.open();
         });
       };

       await getToken(payableAmount);
     } else {
       alert("Please select package first !!!");
     }
   }; 

  const db = firebase.firestore();

  function openModal(d){
    setShow(true);
    setOpenData(d);
  }
  function closeModal(){
    setShow(false);
    setOpenData({});
    setPayShow(false);
  }

  function check(){
        if(props.loggedIn===false && props.startLoggedIn===false){
    setRedirect(true);}
  }

  useEffect(() => {
   fetchData();
  check();
  }, []);


  function fetchData(){
     setInvestorData([]);
     const documents = [];
     db.collection("Users")
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

   function handleClick(name) {
     if (name === "All") {
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
     
     if (name === "All") {
       setFilteredData(investorData);
     } else {
       let sample = [];
       investorData.map((d) => {
         if (d.industry === name) {
           sample.push(d);
         }
       });
       setFilteredData(sample);
     }
   }

   const handleChange=(e)=>{
    e.preventDefault();
    let {name,value}=e.target;
    if ((name === "payableAmount")) {
      setPayableAmount(value);
      console.log(payableAmount);
    }
   }
 
  return (
    <div className="investors_main">
      <ToastContainer />
      {redirect ? (
        notify()
      ) : (
        <div>
          <h2 className="head">ALL STARTUPs</h2>
          <Modal size="lg" show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <h1 style={{ fontSize: "30px", marginLeft: "270px" }}>
                STARTUP DETAILS
              </h1>
            </Modal.Header>
            <Modal.Body>
              <div className="modal_main">
                <img className="modal_img" src={openData.imageUrl} />
                <div className="modal_details">
                  <div className="modal_left">
                    <p>
                      Name: <span  classname="h1"> {openData.name}</span>
                    </p>
                    <p>
                      Industry <span>: {openData.industry}</span>
                    </p>
                    <p>
                      Funding <span>: {openData.funding}</span>
                    </p>
                    <p>
                      TurnOver <span>: {openData.turnover}</span>
                    </p>
                    <p>
                      Description <span>: {openData.desc}</span>
                    </p>
                  </div>
                  <div className="modal_right">
                    <CanvasJSChart
                      options={options}
                      /* onRef={ref => this.chart = ref} */
                    />
                  </div>
                </div>
                <Modal show={payShow} onHide={closeModal}>
                  <Modal.Body>
                    <Form>
                      <Form.Label>Enter Amount</Form.Label>
                      <Form.Control
                        type="input"
                        value={payableAmount}
                        placeholder="Enter Amount"
                        onChange={handleChange}
                        name="payableAmount"
                      ></Form.Control>
                      <Button
                        variant="success"
                        style={{ marginRight: "20px" }}
                        className="mt-3 center"
                        onClick={() => paymentHandler()}
                      >
                        Invest
                      </Button>
                      <Button
                        variant="danger"
                        className="mt-3"
                        onClick={() => setPayShow(false)}
                      >
                        Cancel
                      </Button>
                    </Form>
                  </Modal.Body>
                </Modal>

                <button className="invest_btn" onClick={() => setPayShow(true)}>
                  INVEST
                </button>
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
              <p>All</p>
            </div>
            <div
              className={
                selected === "Automobile" ? "single_tab active" : "single_tab"
              }
              onClick={() => handleClick("Automobile")}
            >
              <IoCarSportOutline className="tab_icon" />
              <p>Automobile</p>
            </div>
            <div
              className={
                selected === "Education" ? "single_tab active" : "single_tab"
              }
              onClick={() => handleClick("Education")}
            >
              <GiBookshelf className="tab_icon" />
              <p>Education</p>
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
              <p>Cosmetics</p>
            </div>
            <div
              className={
                selected === "Food" ? "single_tab active" : "single_tab"
              }
              onClick={() => handleClick("Food")}
            >
              <IoFastFoodOutline className="tab_icon" />
              <p>Food</p>
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
  
    
  
};

export default Startuppage;
