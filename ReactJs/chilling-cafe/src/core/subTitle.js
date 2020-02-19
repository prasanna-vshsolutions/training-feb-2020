import React from "react";
import styled from "styled-components";
const H2 = styled.h2`
  color: #996633;
  text-align: center;
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 30px;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const SubTitle = props => <H2>{props.label}</H2>;
export default SubTitle;
