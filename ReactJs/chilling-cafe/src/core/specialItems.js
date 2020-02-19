import React from "react";
import styled from "styled-components";
import ImageCard from "./imageCard";
import Avatar1 from "../assets/chilling-cafe-11.jpg";
import Avatar2 from "../assets/chilling-cafe-12.jpg";
import Avatar3 from "../assets/chilling-cafe-13.jpg";

const TmSpecialItems = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
`;

const SpecialItems = props => {
  return (
    <TmSpecialItems>
      <ImageCard Avatar={Avatar1} name="Soft Deli Cup" price="$25" />
      <ImageCard Avatar={Avatar2} name="Coffee Art" price="$30" />
      <ImageCard Avatar={Avatar3} name="Speciality Tea" price="$35" />
    </TmSpecialItems>
  );
};
export default SpecialItems;
