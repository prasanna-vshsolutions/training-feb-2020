import React from "react";
import styled from "styled-components";
import Banner from "../../core/banner";
import SubTitle from "../../core/subTitle";
import Table from "../../core/table";
import Grid from "../../core/grid";
import SpecialItems from "../../core/specialItems";
import Para from "../../core/para";
import Social from "../../core/social";

const aboutUs =
  "Chilling Cafe is a simple HTML website template provided by Tooplate. Feel free to use it for your cafe or coffee shop. This layout is a mobile and tablet friendly.";

const secondPara =
  "You can download and use this HTML one-page template for your business. You are not allowed to re-host the template ZIP file on your template collection sites. Thank you.";

const talkToUs = () => {
  return (
    <>
      Reach us via{" "}
      <a style={{ color: "#333333" }} href="mailto:info@example.com">
        Email
      </a>{" "}
      or follow us on social icons below. Thank you.
    </>
  );
};

const TmMainContent = styled.div`
  display: block;
  background-color: #ffffff;
`;

const TmSection = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`;
let coffeeHeader = ["", "Hot", "Iced", "Blended"];
let coffeeRows = [
  { data: ["Americano", "$10", "$15", "-"] },
  { data: ["Cuppucino", "$15", "$18", "$20"] },
  { data: ["Fresh Latte", "$10", "$18", "$20"] },
  { data: ["Mocha", "$15", "$18", "$20"] },
  { data: ["Espresso", "$10", "$15", "-"] },
  { data: ["Black Coffee", "$15", "-", "-"] },
  { data: ["Double Shot Expresso", "$20", "$20", "-"] }
];

let teaHeader = ["", "Hot", "Iced", "Addon"];
let teaRows = [
  { data: ["Pure White Milk", "$5", "$10", "-"] },
  { data: ["Hong Kong Tea", "$8", "$12", "$4"] },
  { data: ["Taiwan Tea", "$4", "$10", "$4"] },
  { data: ["Bubble Tea", "$8", "$12", "-"] },
  { data: ["Mixed Fruit Tea", "$10", "$10", "$8"] },
  { data: ["Original Tea", "$12", "$12", "-"] }
];

const HR = styled.hr`
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  width: 60%;
  border: 0.5px solid #ccc;
`;

const TmSectionSmall = styled(TmSection)`
  max-width: 490px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
`;
function Middle() {
  return (
    <TmMainContent>
      <Banner></Banner>
      <TmSection>
        <SubTitle label="Coffee Menu" />
        <Table header={coffeeHeader} rows={coffeeRows} />
      </TmSection>
      <TmSection>
        <SubTitle label="Tea Menu" />
        <Grid header={teaHeader} rows={teaRows} />
      </TmSection>

      <TmSection>
        <SubTitle label="Special Items" />
        <SpecialItems></SpecialItems>
      </TmSection>
      <HR />

      <TmSection>
        <TmSectionSmall>
          <SubTitle label="About our cafe" />
          <Para content={aboutUs} />
          <Para content={secondPara} />
        </TmSectionSmall>
      </TmSection>
      <HR />
      <TmSection>
        <TmSectionSmall>
          <SubTitle label="Talk to us" />
          <Para content={talkToUs()} />
          <Social />
        </TmSectionSmall>
      </TmSection>
    </TmMainContent>
  );
}

export default Middle;
