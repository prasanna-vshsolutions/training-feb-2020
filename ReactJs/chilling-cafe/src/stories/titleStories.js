import React from "react";
import { storiesOf } from "@storybook/react";

import Title from "../core/title";

storiesOf("Title", module)
  .add(" Chilling Cafe", () => (
    <Title
      style={{
        display: "inline-block",
        verticalAlign: "baseline",
        marginTop: "20px",
        marginBottom: "35px",
        fontSize: "2.1rem",
        fontWeight: "400",
        color: "white",
        display: "block",
        fontSize: "2em",
        marginBlockStart: "0.67em",
        marginBlockEnd: "0.67em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        fontWeight: "bold",
        textAlign: "center"
      }}
      label=" Chilling Cafe"
    />
  ))
  .add("Coffee Menu", () => (
    <Title
      style={{
        color: "#996633",
        textAlign: "center",
        fontWeight: "400",
        fontSize: "1.5rem",
        marginTop: "30px",
        marginBottom: "30px"
      }}
      label="Coffee Menu"
    />
  ))
  .add("Tea Menu", () => (
    <Title
      style={{
        color: "#996633",
        textAlign: "center",
        fontWeight: "400",
        fontSize: "1.5rem",
        marginTop: "30px",
        marginBottom: "30px"
      }}
      label="Tea Menu"
    />
  ))
  .add("Special Items", () => (
    <Title
      style={{
        color: "#996633",
        textAlign: "center",
        fontWeight: "400",
        fontSize: "1.5rem",
        marginTop: "30px",
        marginBottom: "30px"
      }}
      label="Special Items"
    />
  ))
  .add("About our cafe", () => (
    <Title
      style={{
        color: "#996633",
        textAlign: "center",
        fontWeight: "400",
        fontSize: "1.5rem",
        marginTop: "30px",
        marginBottom: "30px"
      }}
      label="About our cafe"
    />
  ))
  .add("Talk to us", () => (
    <Title
      style={{
        color: "#996633",
        textAlign: "center",
        fontWeight: "400",
        fontSize: "1.5rem",
        marginTop: "30px",
        marginBottom: "30px"
      }}
      label="Talk to us"
    />
  ));
