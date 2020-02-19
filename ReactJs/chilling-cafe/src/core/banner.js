import React from "react";
import styled from "styled-components";

const Image = styled.div`
  background-image: url(/img/chilling-cafe-01.jpg);
  background-position: center;
  background-size: cover;
  min-height: 425px;
`;
const Banner = props => <Image alt="Banner" />;
export default Banner;
