import React from "react";
import styled from "styled-components";

import Jason from "../assets/img/team/member1.jpg";
import Timothy from "../assets/img/team/member2.jpg";
import Vicky from "../assets/img/team/member3.jpg";
import Kevin from "../assets/img/team/member4.jpg";

const arr = [Jason, Timothy, Vicky, Kevin];

const ColMd = styled.div`
  display: block;
  width: 25%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  -webkit-box-sizing: border-box;
  text-align: center;
  float: left;
`;

const TeamMemberInfo = styled.div`
  -webkit-box-sizing: border-box;
`;
const Figure = styled.figure`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
  display: block;
  box-sizing: border-box;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin: 0 0 20px 0;
`;

const Details = styled.div`
  display: block;
  -webkit-box-sizing: border-box;
`;

const H4 = styled.h4`
  color: #222;
  font-style: normal;
  margin: 0 0 20px 0;
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Span = styled.span``;

const Image = styled.img`
  -webkit-box-sizing: border-box;
  vertical-align: middle;
  border-radius: 50%;
  border: 0;
`;
const AllMembers = styled.div`
  display: block;
  margin-bottom: 40px;
  text-align: center;
  z-index: 9999;
  margin-right: -15px;
  margin-left: -15px;
  -webkit-box-sizing: border-box;
`;

export default class EmployeCardDetails extends React.Component {
  render() {
    console.log("In side EmploeCard Details");
    return (
      <AllMembers>
        {this.props.data.map((el, index) => (
          <ColMd>
            <TeamMemberInfo>
              <Figure>
                <Image src={arr[index]} alt="Member Photo" />
              </Figure>
              <Details>
                <H4> {el.name}</H4>
                <Span>{el.worktitle}</Span>
              </Details>
            </TeamMemberInfo>
          </ColMd>
        ))}
      </AllMembers>
    );
  }
}
