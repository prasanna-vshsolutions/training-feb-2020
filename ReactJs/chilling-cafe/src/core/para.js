import React from "react";
import styled from "styled-components";

const P = styled.p`
  color: #8c8c8c;
  font-size: 1rem;
  line-height: 1.7;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Para = props => {
  return <P style={props.style}>{props.content}</P>;
};

export default Para;
