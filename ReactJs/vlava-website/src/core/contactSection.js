import React from "react";
import styled from "styled-components";
import H2 from "./h2";
import P from "./para";
import Form from "./contactForm";

const SectionDiv = styled.section`
  margin: 0;
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
const Row = styled.div`
  margin-bottom: 40px;
  z-index: 9999;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
  display: block;
`;

const Col = styled.div`
  display: block;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  margin-left: 25%;
  width: 50%;
  float: left;
`;

const SectionHeader = styled.div`
  text-align: center;
  box-sizing: border-box;
  display: block;
`;
const content =
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam.";

export default class ContactSection extends React.Component {
  render() {
    console.log("In side ContactSection");
    return (
      <SectionDiv>
        <Container>
          <Row>
            <Col>
              <SectionHeader>
                <H2 title="CONTACT US" />
                <P label={content} />
              </SectionHeader>
            </Col>
          </Row>
          <Form></Form>
        </Container>
      </SectionDiv>
    );
  }
}
