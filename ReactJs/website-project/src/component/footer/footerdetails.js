import React from "react";
import styled from "styled-components";

const Section = styled.div`
  padding: 30px 0;
  margin-top: 20px;
  background-color: #eee;
  color: black;
`;
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

    const Row = styled.row`
  margin-left: -15px;
  margin-right: -15px;
`;

const FooterItems = styled.div`
  padding: 20px;
`;

const H3 = styled.h3`
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
`;
const LI = styled.i``;
const Li = styled.i`
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-weight: normal;
  font-stretch: normal;
  font-size: inherit;
  line-height: 1;
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
`;

const FooterDetails = props => {
  return (
    <>
      <Section>
        <Container>
          <Row>
            <H3>
              Dynamic
              <Li></Li>
            </H3>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default FooterDetails;
