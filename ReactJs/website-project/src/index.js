import React from "react";
import ReactDOM from "react-dom";
import Footer from "./component/Footer";
import styled from "styled-components";

import Grid from "./grid";

const App = () => {
  return <Grid />;
  // return <Footer />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
