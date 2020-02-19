import React from "react";
import styled from "styled-components";
import Para from "../../core/para";

const footerNote = () => {
  return (
    <>
      Copyright © 2020 Company Name . Design:
      <a href="https://www.tooplate.com">Tooplate</a>
    </>
  );
};

const FooterText = styled.p`
display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.7;

  font-size: 0.9rem;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
`;

function Footer() {
  return (
    <FooterText>
      <Para style={{ color: " white" }} content={footerNote()} />
    </FooterText>
  );
}

export default Footer;
