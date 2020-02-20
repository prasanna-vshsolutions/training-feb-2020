import React from "react";
import styled from "styled-components";
import BannerImage from "../../core/bannerImage";

export default class Middle extends React.Component {
  render() {
    console.log("in side Middle");
    return (
      <>
        <BannerImage></BannerImage>
      </>
    );
  }
}
