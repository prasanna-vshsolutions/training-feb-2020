import React from "react";
import { storiesOf } from "@storybook/react";

import HeaderLogo from "../core/headerLogo";

storiesOf("Header Logo", module).add("Hot Mug", () => (
  <HeaderLogo avatar="fas fa-mug-hot fa-2x" />
));
