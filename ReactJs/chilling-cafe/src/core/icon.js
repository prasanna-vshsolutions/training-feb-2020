import React from "react";
import styled from "styled-components";
import "../../public/fontawesome/css/all.min.css";
const TmSocialLinkContainer = styled.div`
  display: inline-block;
`;

const TmSocialLink = styled.a`
  color: white;
  background-color: #c5ced8;
  border-radius: 2px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
`;

const Icon = props => (
  <TmSocialLinkContainer>
    <TmSocialLink href={props.url}>
      <i className={props.avatar}></i>
    </TmSocialLink>
  </TmSocialLinkContainer>
);

export default Icon;
