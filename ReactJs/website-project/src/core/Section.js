import React from "react";
import Title from "../core/Title";
import Body from "../core/Body";
import Button from "../core/Button";

const Section = props => {
  return (
    <div className="col-sm-3 footer-blurb-item">
      <Title title={props.title} style={props.titlestyle} />
      <Body body={props.body} />
      <Button btnTitle={props.btnName} />
    </div>
  );
};
export default Section;
