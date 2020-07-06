import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.scss";
import NameTag from "./componnents/nameTag";
import Input from "./componnents/Input";

const nameStyle = {color: "blue", border: "blue solid 2px"};
const MakeGreen = BaseComponent => props => {
  const AddGreen = {
    style: {
      color: "green"
    }
  }
  const NewProps = {...props, ...AddGreen};
  return <BaseComponent {...NewProps} />
}
const GreenTagName = MakeGreen(NameTag);

const removeInlineStyle = BaseComponent => props => {
  const newProps = {...props};
  delete newProps.style;
  return <BaseComponent {...newProps} />
}
const RemoveInline = removeInlineStyle(NameTag);


function App() {
const [age, setAge] = useState(21);
const ageUpHandler = () => {
  setAge(age + 1)
}
const ageDownHandler = () => {
  setAge(age - 1)
}


  let x = 0;
  console.log("hi");
  return (
    <div className="App">
      <h1 className="title name">Hello world</h1>
      <GreenTagName name="Peter" lastName="Peterson"></GreenTagName>
      <NameTag name="John" lastName="Johnson"></NameTag>
      <RemoveInline  style={{color: "red"}} name="Jill" lastName="Jillson"></RemoveInline>
      <NameTag name="" lastName=""></NameTag>
      <Input placeholder="Enter here" type="text"></Input>
      <h3>My age is {age}</h3>
      <button onClick={ageUpHandler}>Age Up</button>
      <button onClick={ageDownHandler}>Age Down</button>
    </div>
  );
}

export default App;
