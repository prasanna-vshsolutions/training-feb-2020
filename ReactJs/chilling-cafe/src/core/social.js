import React from "react";
import styled from "styled-components";
//import "../../public/fontawesome/css/all.min.css";

const TmSocialIcon = styled.div`
  text-align: center;
  margin-top: 30px;
  display: block;
`;

const TmSocialLinkContainer = styled.div`
  display: inline-block;
`;

const A = styled.a`
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
`;
const Social = props => {
  return (
    <>
      <TmSocialIcon>
        <TmSocialLinkContainer>
          <A>
            <i className="fab fa-facebook"></i>
          </A>
        </TmSocialLinkContainer>

        <TmSocialLinkContainer>
          <A>
            <i className="fab fa-twitter"></i>
          </A>
        </TmSocialLinkContainer>
        <TmSocialLinkContainer>
          <A>
            <i className="fab fa-instagram"></i>
          </A>
        </TmSocialLinkContainer>
        <TmSocialLinkContainer>
          <A>
            <i className="fab fa-pinterest"></i>
          </A>
        </TmSocialLinkContainer>
      </TmSocialIcon>
    </>
  );
};
export default Social;
