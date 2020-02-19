import React from "react";
import styled from "styled-components";
//import "../../public/fontawesome/css/all.min.css";

const I = styled.i`
  display: inline-block;
  vertical-align: baseline;
  padding: 15px;
  color: white;
`;

const HeaderLogo = props => <I className={props.avatar}></I>;

export default HeaderLogo;
