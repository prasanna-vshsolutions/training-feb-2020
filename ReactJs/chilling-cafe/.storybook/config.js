import { configure } from "@storybook/react";
function loadStories() {
  require("../src/stories/titleStories");
  require("../src/stories/imageCardStories");
  require("../src/stories/iconStories");
  require("../src/stories/gridStories");
  require("../src/stories/bannerStories");
  require("../src/stories/tableStories");
  require("../src/stories/paraStories");
  require("../src/stories/headerLogoStories");
  require("../src/stories/socialStories");
}
configure(loadStories, module);
