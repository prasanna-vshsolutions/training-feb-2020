import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Button = styled.button`
  background: ${props => (props.primary ? "blue" : "white")};
  color: ${props => (props.primary ? "white" : "blue")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const App = () => {
  return (
    <div>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button>click me !!</Button>
      <Button primary>click me !!</Button>
      <Input type="text" inputColor="red" defaultValue="@Shubham" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
