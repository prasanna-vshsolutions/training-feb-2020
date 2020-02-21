import React from "react";
import styled from "styled-components";
import "../assets/css/font-awesome.css";
import backgroundImage from "../assets/img/parallax/img1.jpg";

const Section = styled.section`
  background-position: 0% -148.297px;
  background-image: url(${backgroundImage});
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
  box-sizing: border-box;
  display: block;
`;

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

const Center = styled.div`
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  display: block;
`;
const Icon = styled.div`
  margin: 0 0 20px 0;
  box-sizing: border-box;
  display: block;
`;
const I = styled.i``;

const Strong = styled.strong`
  font-size: 38px;
  font-weight: bold;
  box-sizing: border-box;
`;
const Br = styled.br``;

const Span = styled.span`
  font-weight: 700;
  font-size: 24px;
  box-sizing: border-box;
`;

export default class parallaxCard extends React.Component {
  render() {
    console.log("In side parallaxCard");
    return (
      <Section>
        <Container>
          <Row>
            {this.props.data.map(el => (
              <ColMd>
                <Center>
                  <Icon>
                    <I className={el.classname} />
                  </Icon>
                  <Strong>{el.no}</Strong>
                  <Br />
                  <Span>{el.name}</Span>
                </Center>
              </ColMd>
            ))}
          </Row>
        </Container>
      </Section>
    );
  }
}
