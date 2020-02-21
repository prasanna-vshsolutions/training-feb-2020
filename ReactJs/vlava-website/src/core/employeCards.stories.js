import React from "react";
import EmployeCard from "./employeCards";
const Data = [
  {
    name: "Jason Doe",
    worktitle: "User experiences",
    avatar: "../assets/img/team/member1.jpg"
  },
  {
    name: "Timothy Clark",
    worktitle: "Web developer",
    avatar: "Timothy"
  },
  {
    name: "Vicky Tan",
    worktitle: "Web designer",
    avatar: "Vicky"
  },
  {
    name: "Kevin Peterson",
    worktitle: "UI designer",
    avatar: "Kevin"
  }
];

export const EmployeCards = () => {
  return <EmployeCard data={Data} />;
};

export default {
  title: "Employee Card",
  component: EmployeCard
};
