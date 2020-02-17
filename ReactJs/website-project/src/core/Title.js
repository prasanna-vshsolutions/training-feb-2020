import React from "react";
import styled from "styled-components";
const title = styled.h1`
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-weight: normal;
  font-stretch: normal;
  font-size: inherit;
  line-height: 1;
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
`;

const Title = props => <h1 className={props.style}>{props.title}</h1>;
export default Title;
