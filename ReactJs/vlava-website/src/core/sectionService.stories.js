import React from "react";
import SectionService from "./sectionService";

const data1 = [
  {
    classname: " hi-icon hi-icon-screen",
    title: "Responsive",
    label: "Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad."
  },
  {
    classname: " hi-icon hi-icon hi-icon-location",
    title: "Multi usage",
    label: "Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad."
  },
  {
    classname: " hi-icon hi-icon-images",
    title: "Beautiful",
    label: "Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad."
  }
];
const data2 = [
  {
    classname: " hi-icon hi-icon-archive",
    title: "Valid HTML5",
    label: "Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad."
  },
  {
    classname: " hi-icon hi-icon-contract",
    title: "Modern",
    label: "Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad."
  },
  {
    classname: " hi-icon hi-icon-clock",
    title: "Fast loading",
    label: "Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad."
  }
];
export const sectionService = () => {
  return <SectionService data1={data1} data2={data2} />;
};

export default {
  title: "Section Service",
  component: SectionService
};
