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

const initialNames = [
  {firstName: "Peter", lastName: "Peterson"},
  {firstName: "John", lastName: "Johnson"},
  {firstName: "Jill", lastName: "Jillson"},
  {firstName: "", lastName: ""}
]

function App() {
const [age, setAge] = useState(21);
const [name, setName] = useState(initialNames);

const ageUpHandler = () => {
  setAge(age + 1)
}
const ageDownHandler = () => {
  setAge(age - 1)
}

  // let x = 0;
  // console.log("hi");
  return (
    <div className="App">
      <h1 className="title name">Props, conditional rendering, useState, map function, onClick events</h1>
      {
        name.map((v, i) => {
          return <NameTag key={`${i} ${v.firstName} ${v.lastName}`} firstName={v.firstName} lastName={v.lastName} />
        })
      }
      {/* <GreenTagName name={name[0].firstName} lastName={name[0].lastName}></GreenTagName>
      <NameTag name={name[1].firstName} lastName={name[1].lastName}></NameTag>
      <RemoveInline  style={{color: "red"}} name={name[2].firstName} lastName={name[2].lastName}></RemoveInline> */}
      {/* <NameTag name="" lastName=""></NameTag> */}
      <Input placeholder="Enter here" type="text"></Input>
      <h3>My age is {age}</h3>
      <button onClick={ageUpHandler}>Age Up</button>
      <button onClick={ageDownHandler}>Age Down</button>
    </div>
  );
}

export default App;
