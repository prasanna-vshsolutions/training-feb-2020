import React from "react";
import styled from "styled-components";
import ServiceCard from "./serviceCard";

const Section = styled.section`
  margin: 0;
  padding: 80px 0 60px 0;
  -webkit-box-sizing: border-box;
  background-color: #fff;
  display: block;
`;
const Container = styled.div`
  display: block;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 1170px;
  overflow: hidden;
`;
const Row = styled.div`
  display: block;
  margin-right: -15px;
  margin-left: -15px;

  z-index: 9999;
  margin-bottom: 40px;
`;

export default class SectionService extends React.Component {
  render() {
    console.log("in side SectionService");
    return (
      <Section>
        <Container>
          <Row>
            {this.props.data1.map(el => (
              <ServiceCard
                className={el.classname}
                title={el.title}
                label={el.label}
              />
            ))}
          </Row>
          <Row>
            {this.props.data2.map(el => (
              <ServiceCard
                className={el.classname}
                title={el.title}
                label={el.label}
              />
            ))}
          </Row>
        </Container>
      </Section>
    );
  }
}
