import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Para from "../core/para";

const aboutUs =
  "Chilling Cafe is a simple HTML website template provided by Tooplate. Feel free to use it for your cafe or coffee shop. This layout is a mobile and tablet friendly.";

const secondPara =
  "You can download and use this HTML one-page template for your business. You are not allowed to re-host the template ZIP file on your template collection sites. Thank you.";

const talkToUs = () => {
  return (
    <>
      Reach us via <a href="mailto:info@example.com">Email</a> or follow us on
      social icons below. Thank you.
    </>
  );
};

const footerNote = () => {
  return (
    <>
      Copyright © 2020 Company Name . Design:
      <a href="https://www.tooplate.com">Tooplate</a>
    </>
  );
};

storiesOf("Para", module)
  .add(" About us p1", () => <Para content={aboutUs} />)
  .add(" About us p2", () => <Para content={secondPara} />)
  .add(" Talk To us", () => (
    <Para style={{ "margin-bottom": 0 }} content={talkToUs()} />
  ))
  .add(" Footer Note", () => (
    <Para style={{ color: " white" }} content={footerNote()} />
  ));
