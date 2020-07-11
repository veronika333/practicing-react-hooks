import React, { useState, useEffect } from 'react';

let born = false
const PracticeUseEffect = () => {
const [age, setAge] = useState(0);
const [mature, setMature] = useState(false);

const ageHandler = () => {
    setAge(age + 10);
}
useEffect(() => {
    if (born){
        document.title = "maturity chieved"
    }
}, [mature])
useEffect(() => {
    console.log("I appear only in the beginning")
}, []);
useEffect(() => {
    if (born) {
    console.log("I appear every time when you click the button")}
    else born = true;

if (age > 60) {
    setMature(true)
}
    });

    return ( 
        <div>
        <h1>Studying component lifecicle by using many useEffect</h1>
        <p>Click the button and grow the age from 0 by tens. When it's 0 6years old the title of the document changes to Maturity Acieved (instead of React App).</p>
    <h2>The age is now { age }</h2>
        <button onClick={ageHandler}>Grow the age</button>
        </div>
     );
}
 
export default PracticeUseEffect;