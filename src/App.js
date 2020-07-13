import React, {useState, useRef, useEffect} from "react";
import logo from "./logo.svg";
import "./App.scss";
import NameTag from "./componnents/nameTag";
import Input from "./componnents/Input";
import GroceryList from "./componnents/GroceryList";
import Form from "./componnents/Form";
import Form2 from "./componnents/Form2";
import Input2 from "./componnents/Input2";
import PracticeUseEffect from "./componnents/PracticeUseEffect";
import TimeDate from "./componnents/TimeDate";
import FetchData from "./componnents/FetchData";
import TryUseMemo from "./componnents/TryUseMemo";
import HookUsePrevious from "./componnents/HookUsePrevious";

//Style fot the Input2 component
const inputStyle = {
  margin: "5px",
  fontSize: "30px",
  padding: "3px"
}



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

  //Ref's for the Input2 component
const firstNameRef = useRef();
const lastNameRef = useRef();  
useEffect(() => {
firstNameRef.current.focus();
}, []);
const onKeyFirstNameHolder = (e) => {
if (e.key === "Enter") {
  lastNameRef.current.focus();
}
}
// const onKeyLastNameHolder = (e) => {

// }

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
<GroceryList />
<Form />
<Form2 />
<h1>Input using useRef, forwardRef(), onKeyDown, switches to the next fied if you click Enter</h1>
<Input2 ref={firstNameRef} placeholder="Type your firstname here" onKeyDown={onKeyFirstNameHolder} style={inputStyle}>
</Input2>
<Input2 ref={lastNameRef} placeholder="Type your lastname here" style={inputStyle}></Input2>
<PracticeUseEffect />
<TimeDate />
<FetchData />
<TryUseMemo />
<HookUsePrevious />
    </div>
  );
}

export default App;
