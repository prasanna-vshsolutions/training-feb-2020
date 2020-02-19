import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: #333333;
`;

const P = styled.p`
  color: #8c8c8c;
  font-size: 1rem;
  line-height: 1.7;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  > ${Link} {
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
`;
const Para = props => <P style={props.style}>{props.content}</P>;
export default Para;
