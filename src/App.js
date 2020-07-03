import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import NameTag from "./componnents/nameTag";
import Input from "./componnents/Input";

const nameStyle = {color: "blue", border: "blue solid 2px"};
function App() {
  let x = 0;
  console.log("hi");
  return (
    <div className="App">
      <h1 className="title name">Hello world</h1>
      <NameTag name="Peter" lastName="Peterson"></NameTag>
      <NameTag name="John" lastName="Johnson"></NameTag>
      <NameTag name="Jill" lastName="Jillson"></NameTag>
      <NameTag name="" lastName=""></NameTag>
      <Input placeholder="Enter here" type="text"></Input>
    </div>
  );
}

export default App;
