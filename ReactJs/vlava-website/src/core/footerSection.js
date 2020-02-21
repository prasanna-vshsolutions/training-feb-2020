import React from "react";
import styled from "styled-components";
import P from "./para";
import "../assets/css/font-awesome.css";

const Section = styled.section`
  background-color: rgba(5, 42, 62, 1);
  margin: 0;
  color: #fff;
  padding: 80px 0 60px 0;
  display: block;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: block;
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 1170px;
  overflow: hidden;
`;
const IconRow = styled.div`
  margin-bottom: 20px;
  z-index: 9999;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
  display: block;
`;

const ColSm12 = styled.div`
  display: block;
  box-sizing: border-box;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  float: left;
  width: 100%;
  text-align: center;
`;

const Ul = styled.ul`
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
  margin-top: 0;
  margin-bottom: 10px;
  box-sizing: border-box;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const Li = styled.li`
  display: inline;
  margin: 0 5px;
  box-sizing: border-box;
  text-align: -webkit-match-parent;
`;

const A = styled.a`
  background: #85b0be;
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  box-sizing: border-box;
`;

const MenuRow = styled.div`
  margin-bottom: 20px;
  text-align: center;
  z-index: 9999;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
  display: block;
`;

const MenuUl = styled.ul`
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
  margin-top: 0;
  margin-bottom: 10px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const MenuA = styled.a`
  color: #337ab7;
  text-decoration: none;
  background-color: transparent;
  box-sizing: border-box;
  cursor: pointer;
`;

const Credits = styled.div`
  text-align: center;
  box-sizing: border-box;
  display: block;
`;
const I = styled.i`
  margin: 0;
  line-height: 50px;
  text-align: center;
  color: #fff;
`;

export default class FooterSection extends React.Component {
  render() {
    console.log("In side ContactSection");
    return (
      <Section>
        <Container>
          <IconRow>
            <ColSm12>
              <Ul>
                <Li>
                  <A>
                    <I className="fa fa-rss"> </I>
                  </A>
                </Li>
                <Li>
                  <A>
                    <I className="fa fa-facebook"> </I>
                  </A>
                </Li>
                <Li>
                  <A>
                    <I className="fa fa-twitter"> </I>
                  </A>
                </Li>
                <Li>
                  <A>
                    <I className="fa fa-google-plus"> </I>
                  </A>
                </Li>
                <Li>
                  <A>
                    <I className="fa fa-linkedin"> </I>
                  </A>
                </Li>
              </Ul>
            </ColSm12>
          </IconRow>
          <MenuRow>
            <MenuUl>
              <Li>
                <MenuA>Home</MenuA>
              </Li>
              <Li>
                <MenuA>About us</MenuA>
              </Li>
              <Li>
                <MenuA>Privacy policy</MenuA>
              </Li>
              <Li>
                <MenuA>Get in touch</MenuA>
              </Li>
            </MenuUl>
          </MenuRow>

          <MenuRow>
            <ColSm12>
              <P label="Copyright © All rights reserved" />
            </ColSm12>
          </MenuRow>
          <Credits>
            Designed by
            <MenuA href="https://bootstrapmade.com/">BootstrapMade.com</MenuA>
          </Credits>
        </Container>
      </Section>
    );
  }
}
