import React from "react";
import styled from "styled-components";
import "../assets/css/icon-component.css";

import P from "./para";
const Section = styled.div`
  float: left;
  position: relative;
  width: 33.33333333%;
  -webkit-box-sizing: border-box;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  display: block;
`;

const Icon = styled.div`
  margin-top: 20px;
`;

const ImageA = styled.div`
  display: block;
  margin-right: 20px;
  float: left;
`;

const A = styled.a`
  display: inline-block;
  font-size: 0px;
  cursor: pointer;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  text-align: center;
  position: relative;
  z-index: 1;
  color: #fff;
  text-decoration: none;
  color: #85b0be;
  box-shadow: 0 0 0 4px #85b0be;
`;

const H3 = styled.h2`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 24px;
  font-style: normal;
  margin: 0 0 20px 0;
  color: #222;
  font-weight: 500;
  line-height: 1.1;
`;

const Clear = styled.div`
  display: block;
  clear: both;
`;

export default class ServiceCard extends React.Component {
  render() {
    console.log("in side logo");
    return (
      <Section>
        <Icon>
          <ImageA>
            <A href="#" className={this.props.className}>
              screen
            </A>
          </ImageA>
        </Icon>
        <H3>{this.props.title}</H3>
        <P label={this.props.label} />
        <Clear />
      </Section>
    );
  }
}
