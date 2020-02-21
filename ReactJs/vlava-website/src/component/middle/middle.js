import React from "react";
import styled from "styled-components";
import BannerImage from "../../core/bannerImage";
import ServiceSection from "../../core/serviceSection";
import TestimonialSection from "../../core/testimonialSection";
import AboutSection from "../../core/aboutSection";
import ParallaxSection from "../../core/parallaxCardSection";
import ClientsSection from "../../core/clientsSection";
import ContactSection from "../../core/contactSection";

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

export default class Middle extends React.Component {
  render() {
    console.log("in side Middle");
    return (
      <>
        <BannerImage></BannerImage>
        <ServiceSection data1={data1} data2={data2} />
        <TestimonialSection />
        <AboutSection />
        <ParallaxSection data={ParallaxCardData} />
        <ClientsSection />
        <ContactSection />
      </>
    );
  }
}
