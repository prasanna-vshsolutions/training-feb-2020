import React from "react";
import styled from "styled-components";
import "../assets/css/font-awesome.css";
import Photo from "../assets/img/portfolio/img3.jpg";
import "../assets/js/fancybox/jquery.fancybox.css";

const ColMd = styled.div`
  width: 100%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`;

const Row = styled.div`
  z-index: 9999;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
  display: block;
`;

const PortfolioItems = styled.div`
  position: relative;
  overflow: hidden;
  height: 915px;
  transition-property: height, width;
  transition-duration: 0.8s;
  box-sizing: border-box;
  display: block;
`;

const Article = styled.article`
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  transform: translate3d(0px, 0px, 0px);
  transition-property: transform, opacity;
  transition-duration: 0.8s;

  display: block;
  box-sizing: border-box;
  float: left;
  position: absolute;
  left: 0px;
  top: 0px;
  margin-bottom: 30px;
  width: 33.33333333%;
`;

const PortfolioItem = styled.div`
  display: block;
  position: relative;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  transition: all 300ms linear;
  vertical-align: middle;
  border: 0;
  box-sizing: border-box;
`;

const PortfolioCenter = styled.div`
  background: #85b0be;
  display: block;
  opacity: 0;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  color: rgba(220, 220, 220);
  z-index: 10;
  text-align: center;
  box-sizing: border-box;
`;

const FolioInfo = styled.div`
  top: -20px;
  padding: 30px;
  height: 0;
  opacity: 0;
  position: relative;
  box-sizing: border-box;
  display: block;
`;

const H5 = styled.h5`
  text-transform: uppercase;
  font-size: 16px;
  font-style: normal;
  margin: 0 0 20px 0;
  color: #222;
`;

const A = styled.a`
  color: #fff;
  background-color: transparent;
  cursor: pointer;
`;

const I = styled.i``;

export default class workGallery extends React.Component {
  render() {
    console.log("In side workGallery");
    return (
      <ColMd>
        <Row>
          <PortfolioItems>
            <Article>
              <PortfolioItem>
                <Image src={Photo} alt="image block" />
              </PortfolioItem>
            </Article>
            <Article>
              <PortfolioItem>
                <Image src={Photo} alt="image block" />
              </PortfolioItem>
            </Article>
          </PortfolioItems>
        </Row>
      </ColMd>
    );
  }
}
