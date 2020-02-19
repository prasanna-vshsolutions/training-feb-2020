import React from "react";
import { storiesOf } from "@storybook/react";

import Table from "../core/table";

let coffeeHeader = ["", "Hot", "Iced", "Blended"];
let coffeeRows = [
  { data: ["Americano", "$10", "$15", "-"] },
  { data: ["Cuppucino", "$15", "$18", "$20"] },
  { data: ["Fresh Latte", "$10", "$18", "$20"] },
  { data: ["Mocha", "$15", "$18", "$20"] },
  { data: ["Espresso", "$10", "$15", "-"] },
  { data: ["Black Coffee", "$15", "-", "-"] },
  { data: ["Double Shot Expresso", "$20", "$20", "-"] }
];
let teaHeader = ["", "Hot", "Iced", "Addon"];
let teaRows = [
  { data: ["Pure White Milk", "$5", "$10", "-"] },
  { data: ["Hong Kong Tea", "$8", "$12", "$4"] },
  { data: ["Taiwan Tea", "$4", "$10", "$4"] },
  { data: ["Bubble Tea", "$8", "$12", "-"] },
  { data: ["Mixed Fruit Tea", "$10", "$10", "$8"] },
  { data: ["Original Tea", "$12", "$12", "-"] }
];

storiesOf("Table", module)
  .add("Coffee", () => <Table header={coffeeHeader} rows={coffeeRows} />)
  .add("Tea", () => <Table header={teaHeader} rows={teaRows} />);
