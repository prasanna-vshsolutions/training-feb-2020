import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
  display: inline-block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
`;

const button = props => <Button>{props.btnTitle}</Button>;
export default button;
