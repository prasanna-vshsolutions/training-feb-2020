import React from "react";
import styled from "styled-components";

const P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 0 0 10px;
`;

const Para = props => <P>{props.label}</P>;

export default Para;
