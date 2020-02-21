import React from "react";
import styled from "styled-components";
import SingleTestimonailCard from "./testimonialCard";
import Photo from "../assets/img/parallax/img3.jpg";
const Section = styled.section`
    display: block;
margin: 0;
background-image: url(${Photo});

    padding: 80px 0 60px 0;
background-position: 0% -159.297px;

}
`;
const Container = styled.div`
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
const Row = styled.div`
  display: block;
  z-index: 9999;
  margin-right: -15px;
  margin-left: -15px;
`;
const ColLg = styled.div`
  display: block;
  width: 100%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

const Center = styled.div`
  display: block;
  text-align: center;
`;

const FlexSlider = styled.div`
  display: block;
  position: relative;
  margin: 0;
  background: 0;
  border: 0;
  -webkit-box-shadow: none;
  zoom: 1;
  padding: 0;
`;
const FlexView = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 2000px;
  display: block;
`;
export default class TestimonailCardSection extends React.Component {
  render() {
    console.log("in side TestimonailCardSection");
    return (
      <Section>
        <Container>
          <Row>
            <ColLg>
              <Center>
                <FlexSlider>
                  <FlexView>
                    <SingleTestimonailCard></SingleTestimonailCard>
                  </FlexView>
                </FlexSlider>
              </Center>
            </ColLg>
          </Row>
        </Container>
      </Section>
    );
  }
}
