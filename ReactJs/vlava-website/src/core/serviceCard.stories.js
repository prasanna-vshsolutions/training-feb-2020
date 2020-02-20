import React from "react";
import ServiceCard from "./serviceCard";
export const ServiceCards = () => {
  return (
    <ServiceCard
      className="hi-icon hi-icon-screen"
      title="Responsive"
      label="Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad."
    />
  );
};

export const ServiceCard2 = () => {
  return (
    <ServiceCard
      className="hi-icon hi-icon-location"
      title="Multi usage"
      label="Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad."
    />
  );
};

export const ServiceCard3 = () => {
  return (
    <ServiceCard
      className="hi-icon hi-icon-images"
      title="Beautiful"
      label="Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad."
    />
  );
};
export default {
  title: "ServiceCards",
  component: ServiceCards
};
