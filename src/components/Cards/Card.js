import React,{useState} from 'react'
import "./card.css";
function Card(props) {
 

  return (
    <div className="card_main">
      <img className="card_img" src={props.data.imageUrl} />
      <p style={{textAlign:"center",textTransform:"uppercase" ,fontWeight:"500"}}>{props.data.name}</p>
      <div className="card_details">
     
        <div  className="card_left">
        
          <p>INDUSTRY:</p>
          <p>FUNDING RANGE:</p>
        </div>
        <div className="card_right">
         
          <p>{props.data.industry}</p>
          <p>{props.data.fundingRange}</p>
        </div>
      </div>
      
    </div>
  );
}

export default Card