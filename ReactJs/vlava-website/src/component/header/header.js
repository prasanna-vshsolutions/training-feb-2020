import React from "react";
import styled from "styled-components";
import Logo from "../../core/logoImage";
import Menu from "../../core/navBarMenu";
const NavBar = styled.div`
  line-height: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  vertical-align: middle;
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;
  top: 0;
  border-width: 0 0 1px;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
`;

const Container = styled.div`
  display: block;
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 750px;
  overflow: hidden;
`;
const NavBarCollapse = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-right: 0;
  margin-left: 0;
`;
export default class Header extends React.Component {
  render() {
    console.log("in side logo");
    return (
      <>
        <NavBar>
          <Container>
            <NavBarCollapse>
              <Logo />
              <Menu />
            </NavBarCollapse>
          </Container>
        </NavBar>
      </>
    );
  }
}
