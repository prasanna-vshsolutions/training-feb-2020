import React from "react";
import styled from "styled-components";
import Header from "../../component/header/header";
import Middle from "../../component/middle/middle";
import Footer from "../../core/footerSection";
const Body = styled.body`
  font-family: "Open Sans", "HelveticaNeue", "Helvetica Neue", Helvetica,
    sans-serif, Arial;
  color: #777;
  background: #f7f7f7;
  line-height: 1.6em;
  font-size: 14px;
  margin: 0;
  display: block;
`;

export default class Home extends React.Component {
  render() {
    console.log("in side Home");
    return (
      <>
        <Body>
          <Header />
          <Middle />
          <Footer />
        </Body>
      </>
    );
  }
}
