import React from "react";
import ParallaxCard from "./parallaxCardSection";

const ParallaxCardData = [
  {
    no: "498",
    name: "Black Coffee Cups",
    classname: "fa fa-coffee fa-5x"
  },
  {
    no: "344",
    name: "MP3 Songs",
    classname: "fa fa-music fa-5x"
  },
  {
    no: "1231",
    name: "Hard Minutes",
    classname: "fa fa-clock-o fa-5x"
  },
  {
    no: "476",
    name: "Lovely Clients",
    classname: "fa fa-heart fa-5x"
  }
];

export const ParallaxCards = () => (
  <ParallaxCard data={ParallaxCardData}></ParallaxCard>
);
export default {
  title: "Parallax Cards",
  component: ParallaxCard
};
