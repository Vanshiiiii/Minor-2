import React,{useState,useEffect,useContext} from 'react'
import authContext from "../../utils/auth-hook";
import Imageupload from "../userRegisteration/Imageupload";
import firebase from "firebase";
import { useNavigate } from 'react-router-dom';

function InvestorDashboard(props) {
     const [userDetails, setUserDetails] = useState({
      imageUrl: "",
       name: "",
       industry: "",
       fundingRange: "",
       desc: "",
     });
     const [registered, setRegistered] = useState(false);
 const auth = firebase.auth();
 const db = firebase.firestore();
 let navigate=useNavigate();

     const handleChange = (event) => {
       event.preventDefault();
       const { name, value } = event.target;
       setUserDetails((prev) => {
         return { ...prev, [name]: value };
       });
     };
     const authData=useContext(authContext);

     useEffect(()=>{
         auth.onAuthStateChanged((userCredentials) => {
           const uid = userCredentials.uid;
                   db.collection("Investors")
                     .doc(uid)
                     .get()
                     .then((res) => {
                        console.log(res.data());
                       authData.authTriggered();
                       setUserDetails(res.data());
                       
                     });
                 });
             
     },[]);
     const signouttt = () => {
       firebase
         .auth()
         .signOut()
         .then(() => {
           props.setLoggedIn(false);
           props.setStartLoggedIn(false);
           authData.authTriggered();
           setRegistered(true);
         });
     };

     
     
     function registerInvestor(e){
        e.preventDefault();
        auth.onAuthStateChanged((userCredentials) => {
        const uid = userCredentials.uid;
         db.collection("Investors")
                  .doc(uid)
                  .set({
                    name: userDetails.name,
                    industry: userDetails.industry,
                    fundingRange: userDetails.fundingRange,
                    imageUrl: userDetails.imageUrl,
                    desc: userDetails.desc,
                    prevCollab:userDetails.prevCollab
                  }).then(()=>{
                    setRegistered(true);
                  })   
    });
     }

  return (
    <div>
      <div className="main">
        {registered ? navigate("/") : null}
        <div className="section-log-ax" id="contact">
          <div className="register_main">
            <form onSubmit={registerInvestor} className="register_form">
              <h3>INVESTOR DASHBOARD</h3>
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  marginBottom: "30px",
                  borderRadius: "50%",
                }}
                src={userDetails.imageUrl}
              />
           
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
              />
          
              <input
                type="text"
                name="industry"
                placeholder="Your Industry"
                value={userDetails.industry}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Funding Range"
                name="fundingRange"
                value={userDetails.fundingRange}
                onChange={handleChange}
              />

              <textarea
                row="3"
                name="desc"
                placeholder="Description"
                value={userDetails.desc}
                onChange={handleChange}
              />
              <textarea
                row="3"
                name="PreviousCollaborations"
                placeholder="Your Previous Collaborations "
                value={userDetails.prevCollab}
                onChange={handleChange}
              />

              { /*<Form.Group style={{ textAlign: "left" }}>
               <Form.File
                 id="userImage"
                 label="Profile Picture"
                 onChange={handleProfileImageChange}
               />
              </Form.Group>*/ }
              <input className="submit_btn" type="submit" value="Edit" />
              <button className="signout_btn" onClick={signouttt}>
                Signout
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorDashboard