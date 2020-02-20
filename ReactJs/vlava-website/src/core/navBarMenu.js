import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  list-style: none;
  padding-left: 0;
  margin: 0;
  float: right;
  margin-bottom: 0;
  padding-bottom: 0;
`;
const Li = styled.li`
  text-align: -webkit-match-parent;
  position: relative;
  display: block;
  float: left;
  height: 100%;
  line-height: 100%;
  margin-bottom: 0;
  padding-bottom: 0;
`;
const A = styled.a`
  background-color: transparent;
  text-decoration: none;
  position: relative;
  padding: 10px 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: table-cell;
  height: 100%;
  line-height: 100%;
  vertical-align: middle;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 20px;
`;

export default class NavBarMenu extends React.Component {
  render() {
    console.log("in side logo");
    return (
      <Ul>
        <Li>
          <A>Home</A>
          <A>About</A>
          <A>Portfolio</A>
          <A>Contact</A>
        </Li>
      </Ul>
    );
  }
}
