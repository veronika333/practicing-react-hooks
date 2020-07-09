import React, { useState } from 'react';

const Form = () => {
const [name, setName] = useState("default");
const [income, setIncome] = useState("high");

const handleNameChange = (e) => {
setName(e.target.value);
};
const handleIncomeChange = (e) => {
setIncome(e.target.value);
}
const handleSubmit = (e) => {
    e.preventDefault();
console.log(name, income);
}
    return ( 
        <div>
            <h1>Form</h1>
            <h2>Practising form, useState, onChange, onSubmit</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <span>Name  </span>
                <input type="text" value={name} onChange={handleNameChange}></input>
                </div>
                <div>
                    <span>Income  </span>
                    <select value={income} onChange={handleIncomeChange}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <button type="submit" value="Submit">Submit</button>
                <br />
            </form>
        </div>
     );
}
 
export default Form;