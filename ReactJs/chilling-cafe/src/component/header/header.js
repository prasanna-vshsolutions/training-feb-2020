import React from "react";
import styled from "styled-components";
import HeaderLogo from "../../core/headerLogo";
import Title from "../../core/title";
const tmTextWhite = styled.div`
  color: white;
`;

const TmPageHeaderContainer = styled(tmTextWhite)`
  text-align: center;
  display: block;
`;

function Header() {
  return (
    <TmPageHeaderContainer>
      <HeaderLogo avatar="fas fa-mug-hot fa-2x" />
      <Title
        style={{
          marginBlockStart: "0.67em",
          marginBlockEnd: "0.67em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
          textAlign: "center",
          display: "inline-block",
          verticalAlign: "baseline",
          marginTop: "20px",
          marginBottom: "35px",
          fontSize: "2.1rem",
          fontWeight: "400",
          color: "white"
        }}
        label=" Chilling Cafe"
      />
    </TmPageHeaderContainer>
  );
}

export default Header;
