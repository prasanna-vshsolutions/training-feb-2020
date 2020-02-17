import React from "react";
import "./test.css";

class App1 extends React.Component {
  state = { a: [1, 2, 3, 4] };

  onMouseMove = event => {
    console.log("onMouseMove");
    console.log("content of array " + this.state.a);
    // this.setState({
    //   a: this.state.a.push(47)
    // });
  };

  render() {
    console.log("render");
    return (
      <div onMouseMove={this.onMouseMove}>
        <div className="panel" style={this.state.a} />
      </div>
    );
  }
}
export default App1;
