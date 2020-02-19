import React from "react";
import { storiesOf } from "@storybook/react";

import ImageCard from "../core/imageCard";
import Avatar from "../../public/img/chilling-cafe-11.jpg";
import Avatar2 from "../../public/img/chilling-cafe-12.jpg";
import Avatar3 from "../../public/img/chilling-cafe-13.jpg";
storiesOf("ImageCard", module)
  .add("card Image", () => (
    <ImageCard Avatar={Avatar} name="Soft Deli Cup" price="$25" />
  ))
  .add("Image", () => (
    <ImageCard Avatar={Avatar2} name="Coffee Art" price="$30" />
  ))
  .add("Image 3", () => (
    <ImageCard Avatar={Avatar3} name="Speciality Tea" price="$35" />
  ));
