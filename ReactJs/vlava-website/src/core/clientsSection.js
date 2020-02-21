import React from "react";
import styled from "styled-components";
import "../assets/css/font-awesome.css";
import Photo from "../assets/img/clients/logo1.png";
import Photo2 from "../assets/img/clients/logo2.png";
import Photo3 from "../assets/img/clients/logo3.png";
import Photo4 from "../assets/img/clients/logo4.png";
import Photo5 from "../assets/img/clients/logo5.png";
import Photo6 from "../assets/img/clients/logo6.png";

import "../assets/js/fancybox/jquery.fancybox.css";

const Section = styled.section`
  margin: 0;
  padding: 80px 0 60px 0;
  background-color: #fff;
  display: block;
  padding: 80px 0 60px 0;
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
const Col = styled.div`
  width: 100%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  display: block;
`;
const Client = styled.div`
  text-align: center;
  width: 16.66666667%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  display: block;
`;

const Image = styled.img`
  opacity: 0.7;
  vertical-align: middle;
  border: 0;
  box-sizing: border-box;
`;

export default class workGallery extends React.Component {
  render() {
    console.log("In side workGallery");
    return (
      <Section>
        <Container>
          <Row>
            <Col>
              <Row>
                <Client>
                  <Image src={Photo} />
                </Client>
                <Client>
                  <Image src={Photo2} />
                </Client>
                <Client>
                  <Image src={Photo3} />
                </Client>
                <Client>
                  <Image src={Photo4} />
                </Client>
                <Client>
                  <Image src={Photo5} />
                </Client>
                <Client>
                  <Image src={Photo6} />
                </Client>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}
