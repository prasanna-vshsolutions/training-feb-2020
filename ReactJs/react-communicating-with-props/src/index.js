import React from "react";
import ReactDOM from "react-dom";
import Commentdetails from "./commentDetails";
import faker from "faker";

let data = [
  {
    author: "sam",
    timeAgo: "Today at4.47PM",
    avatar: faker.image.avatar(),
    content: "nice post"
  },
  {
    author: "kam",
    timeAgo: "Today at4.47PM",
    avatar: faker.image.avatar(),
    content: "nice post"
  },
  {
    author: "dam",
    timeAgo: "Today at4.47PM",
    avatar: faker.image.avatar(),
    content: "nice post"
  }
];

const App = () => {
  let list = data.map(item => <Commentdetails {...item} />);
  return <div className="ui container comments">{list}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
