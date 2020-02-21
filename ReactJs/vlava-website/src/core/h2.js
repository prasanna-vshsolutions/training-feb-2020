import React from "react";
import styled from "styled-components";
const H2 = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  font-style: normal;
  margin: 0 0 20px 0;
  color: #222;
  line-height: 1.1;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Heading = props => <H2>{props.title}</H2>;
export default Heading;
