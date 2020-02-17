import React from "react";
import styled from "styled-components";

const GridRow = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 20px;
  background-color: #2196f3;
  padding: 10px;
  align-content: space-evenly;
`;
//  justify-content: space-evenly;
const GridItem = styled.h1`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 7px 0;
  font-size: 30px;
`;

const TwoColm = styled(GridItem)`
  grid-column-start: 2;
  grid-column-end: 5;
`;

const TwoRow = styled(GridItem)`
  grid-row: 2 / 4;
`;

const RandomTwoColm = styled(GridItem)`
  background-color: white;
`;

const App = () => {
  return (
    <GridRow>
      <GridItem>2</GridItem>
      <TwoColm>Two colm</TwoColm>

      <GridItem>3</GridItem>
      <GridItem>5</GridItem>
      <RandomTwoColm>white</RandomTwoColm>

      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
      <GridItem>8</GridItem>

      <GridItem>8</GridItem>

      <TwoRow>Two Row</TwoRow>
    </GridRow>
  );
};

export default App;
