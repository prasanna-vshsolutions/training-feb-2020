import React from "react";
import ReactDOM from "react-dom";
import Commentdetails from "./commentDetails";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <Commentdetails author="sam" timeAgo ="Today at4.47PM" content = "nice post" avatar = {faker.image.avatar()} />
      <Commentdetails author="kam"timeAgo ="Today at5.47PM" content = "Awesom post" avatar = {faker.image.avatar()} />
      <Commentdetails author="dam"timeAgo ="Today at6.47PM" content = "Well Written post" avatar = {faker.image.avatar()} />
      <Commentdetails author="ran" timeAgo ="Today at7.47PM" content = "Simply nice post" avatar = {faker.image.avatar()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
