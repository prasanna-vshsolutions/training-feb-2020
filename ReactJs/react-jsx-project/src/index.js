import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  function getButtonText() {
    return { msg: "Click On Me" };
  }

  const style = { backgroundColor: "blue", color: "white" };
  const lableText = "Enter Name";
  return (
    <div>
      <label className="label" htmlFor="name">
        {lableText}
      </label>
      <input id="name" type="text" />
      <button style={style}>{getButtonText().msg}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
