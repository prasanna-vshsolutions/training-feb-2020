import React from "react";
import { storiesOf } from "@storybook/react";

import Card from "../components/card";

storiesOf("Card", module)
  .add("Simple Card", () => (
    <Card
      styleCard={{
        background: "white",
        border: "3px solid black"
      }}
      styleImage={{
        background: "white",
        border: "3px solid black"
      }}
      styleInfo={{
        background: "orange",
        color: "white",
        border: "3px solid black"
      }}
    />
  ))
  .add("Some Card", () => (
    <Card
      styleCard={{
        background: "blue",
        border: "3px solid #fecd43"
      }}
      styleImage={{
        background: "white"
      }}
      styleInfo={{
        background: "orange",
        color: "white"
      }}
    />
  ))
  .add("third Card", () => (
    <Card
      styleCard={{
        background: "white",
        border: "3px solid #fecd43"
      }}
      styleImage={{
        background: "white",
        border: "3px solid #fecd43"
      }}
      styleInfo={{
        color: "blackxl",
        border: "3px solid #fecd43"
      }}
    />
  ));
