import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import Middle from "../middle/middle";
import Footer from "../footer/footer";
const Body = styled.body`
  background-color: #3a4a58;
  color: #8c8c8c;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: 400;
  padding: 15px;
  margin: 0;
  display: block;
`;
const TmContainer = styled.div`
  display: block;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

function Home() {
  return (
    <Body>
      <TmContainer>
        <Header></Header>
        <Middle></Middle>
        <Footer></Footer>
      </TmContainer>
    </Body>
  );
}

export default Home;
