import React from "react";
import "./card.css";
import avatar from "../../public/img_avatar.png";

const Button = props => (
  <div className="card" style={props.styleCard}>
    <div className="cardImage" style={props.styleImage}>
      <img src={avatar} alt="Avatar" />
      <p>47</p>
    </div>
    <div className="CardDetails" style={props.styleInfo}>
      <label>shubham</label>
      <label>Holkar</label>
      <label>shubham@vsh.com</label>
    </div>
  </div>
);
export default Button;
