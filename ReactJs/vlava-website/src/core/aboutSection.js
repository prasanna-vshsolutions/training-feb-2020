import React from "react";
import styled from "styled-components";
import H2 from "./h2";
import P from "./para";
import EmployeCards from "./employeCards";

const Section = styled.section`
  margin: 0;
  padding: 80px 0 60px 0;
  display: block;
  box-sizing: border-box;
`;

const Container = styled.div`
  overflow: hidden;
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  display: block;
`;

const Row = styled.div`
  z-index: 9999;
  margin-right: -15px;
  margin-left: -15px;
  display: block;
  margin-bottom: 40px;
`;

const Col = styled.div`
  margin-left: 25%;
  width: 50%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  display: block;
`;

const Header = styled.div`
  text-align: center;
  box-sizing: border-box;
  display: block;
`;
const content =
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam.";

const Data = [
  {
    name: "Jason Doe",
    worktitle: "User experiences",
    avatar: "../assets/img/team/member1.jpg"
  },
  {
    name: "Timothy Clark",
    worktitle: "Web developer",
    avatar: "Timothy"
  },
  {
    name: "Vicky Tan",
    worktitle: "Web designer",
    avatar: "Vicky"
  },
  {
    name: "Kevin Peterson",
    worktitle: "UI designer",
    avatar: "Kevin"
  }
];

export default class AboutSection extends React.Component {
  render() {
    console.log("In side about Section");
    return (
      <Section>
        <Container>
          <Row>
            <Col>
              <Header>
                <H2 title="Behind Vlava" />
                <P label={content} />
              </Header>
            </Col>
          </Row>
          <EmployeCards data={Data} />
        </Container>
      </Section>
    );
  }
}
