import { configure } from "@storybook/react";
import pinkPanther from "../.storybook/yourTheme";

import { addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
addParameters({
  options: {
    theme: themes.dark //pinkPanther
  }
});

function loadStories() {
  require("../src/stories/buttonStories");
  require("../src/stories/cardStories");
}
configure(loadStories, module);
