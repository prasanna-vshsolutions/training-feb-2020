import React from "react";
import styled from "styled-components";
import "../assets/css/font-awesome.css";

import avatar from "../assets/img/testimonial/testimonial3.png";

const Ul = styled.ul`
display: block;
    margin-block-start: 1em;
     margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start:  40px;
    text-align: center;   
  width: 1000%;
  zoom: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
`;
const Li = styled.li`
  width: 1140px;
  float: left;
  display: block;
  box-sizing: border-box;
  text-align: -webkit-match-parent;
`;
const TestimonialDetails = styled.div`
  color: white;
`;
const DivImage = styled.div`
  display: block;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: auto;
  display: inline;
  border-radius: 50%;
  vertical-align: middle;
  border: 0;
`;

const H5 = styled.h5`
  display: block;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-style: normal;
  margin: 0 0 20px 0;
  color: #fff;
  font-size: 18px;
  font-family: Georgia, sans-serif;
  line-height: 1.5em;
`;

const Span = styled.span`
  color: #fff;
`;

const A = styled.a`
  text-decoration: none;
  color: #95cbdd;
  background-color: transparent;
  cursor: pointer;
`;

const Br = styled.br``;
const content =
  "	Nunc velit risus, dapibus non interdum quis, suscipit nec dolor. Vivamus tempor tempus mauris vitae fermentum. In vitae nulla lacus. Sed sagittis tortor vel arcu sollicitudin nec tincidunt metus suscipit.Nunc velit risus, dapibus non interdum.";
export default class TestimonailCard extends React.Component {
  render() {
    console.log("in side Testimonial");
    return (
      <Ul>
        <Li>
          <TestimonialDetails>
            <DivImage>
              <Image src={avatar} />
            </DivImage>
            <i className="fa fa-quote-left fa-5x"></i>
            <H5>{content}</H5>
            <Br />
            <Span>
              DASON KRUN <A href="">www.siteurl.com </A>
            </Span>
          </TestimonialDetails>
        </Li>
      </Ul>
    );
  }
}
