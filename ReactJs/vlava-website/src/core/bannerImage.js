import React from "react";
import styled from "styled-components";
import logoUrl from "../assets/img/intro-background.jpg";
import style from "react-syntax-highlighter/dist/esm/styles/prism/duotone-space";

const Section = styled.section`
  background-attachment: fixed;
  width: 100%;
  height: 60vh;
  position: relative;
  background: url(${logoUrl}) top center;
  background-size: cover;
  display: block;
`;

const IntroContent = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 15px;
`;

const H2 = styled.h2`
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.1;
  font-style: normal;
  margin: 0 0 20px 0;
  color: #fff;
  margin-bottom: 30px;
  font-size: 64px;
  font-weight: 700;
  font-family: "Open Sans", "HelveticaNeue", "Helvetica Neue", Helvetica,
    sans-serif, Arial;
`;

const H3 = styled.h3`
  line-height: 1.1;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-style: normal;
  margin: 0 0 20px 0;
  color: #fff;
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: 500;
  font-family: "Open Sans", "HelveticaNeue", "Helvetica Neue", Helvetica,
    sans-serif, Arial;
`;
const A = styled.a`
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 32px;
  border-radius: 2px;
  transition: 0.5s;
  margin: 10px;
  color: #fff;
  background: #85b0be;
`;
export default class BannerImage extends React.Component {
  render() {
    console.log("in side logo");
    return (
      <Section>
        <IntroContent>
          <H2>Welcome to Vlava!</H2>
          <H3>Lorem ipsum dolor sit amet, elit persecuti efficiendi</H3>
          <A>Get Started</A>
        </IntroContent>
      </Section>
    );
  }
}
