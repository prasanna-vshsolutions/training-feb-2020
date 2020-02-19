import React from "react";
import { storiesOf } from "@storybook/react";

import Icon from "../core/icon";

storiesOf("Icon", module)
  .add("Facebook", () => (
    <Icon url="https://fb.com/tooplate" avatar="fab fa-facebook" />
  ))
  .add("Twitter", () => (
    <Icon url="https://twitter.com" avatar="fab fa-twitter" />
  ))
  .add("Instagram", () => (
    <Icon url="https://instagram.com" avatar="fab fa-instagram" />
  ))
  .add("Pinterest", () => (
    <Icon url="https://pinterest.com" avatar="fab fa-pinterest" />
  ))
  .add("Hot Mug", () => (
    <Icon
      url="https://pinterest.com"
      avatar="fas fa-mug-hot fa-2x tm-page-icon"
    />
  ));
