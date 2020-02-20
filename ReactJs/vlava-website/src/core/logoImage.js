import React from "react";
import styled from "styled-components";
import logoUrl from "../assets/img/logo.png";

const NavBarLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

`;
const A = styled.a`
  cursor: pointer;
  background-color: transparent;
  color: #337ab7;
  text-decoration: none;
`;
const Img = styled.img`
  width: 155px;
  vertical-align: middle;
`;

export default class Logo extends React.Component {
  render() {
    console.log("in side logo");
    return (
      <NavBarLogo>
        <A href="">
          <Img src={logoUrl} />
        </A>
      </NavBarLogo>
    );
  }
}
