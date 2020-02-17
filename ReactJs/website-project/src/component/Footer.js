import React from "react";
import Section from "../core/Section";

let data = [
  {
    title: "Dynamic",
    body:
      "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
    btnName: " Click Me",
    titlestyle: "fa fa-text-height"
  },
  {
    title: "Efficient",
    body:
      "Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
    btnName: "More Info",
    titlestyle: "fa fa-wrench"
  },
  {
    title: "Complete",
    body:
      "Professionally cultivate one-to-one customer service with robust ideas. Completely synergize resource taxing relationships via premier niche markets. Dynamically innovate resource-leveling customer service for state of the art customer service.",
    btnName: "Read More",
    titlestyle: "fa fa-paperclip"
  }
];

const Sections = data.map(item => <Section {...item} />);

const Footer = props => {
  return (
    <footer>
      <div className="footer-blurb">
        <div className="container">
          <div className="row">
            <div>{Sections}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
