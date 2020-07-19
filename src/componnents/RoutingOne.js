import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import AboutPage from "../pages/AboutPage";
import messageContext from "../contexts/messageContext";
import HomePage from "../pages/HomePage";


const RoutingOne = () => {

    const [loggedin, setLoggedin] = useState(false);
    const [age, setAge] = useState(null);
    const [message, setMessage] = useState("This is a message shared by Context");

    function loginHandler(){
        setLoggedin(!loggedin);
    }

function ageHandler(e) {
    setAge(e.target.value);
}

    return ( 
        <BrowserRouter>
        <messageContext.Provider value={[message, setMessage]}>
        <div>
            <h2>React Routing, Redirect, Button changes(login/logout), Prompt, useContext</h2>
            <p>Click User Joonas Tuominen, try to click other link withou completing the age and you will see a prompt.</p>
            <ul className="ul-style">
                <li className="li-style"><NavLink to="/home" exact activeClassName="active-link">Home</NavLink></li>
                <li className="li-style"><NavLink to="/about" exact activeClassName="active-link">About</NavLink></li>
                <li className="li-style"><NavLink to="/user/joonas/tuominen" exact activeClassName="active-link">User Joonas Tuominen</NavLink></li>
            </ul>
            <Prompt when={loggedin && !age} message={(location)=> {
                return location.pathname.startsWith("/user") ? true : ("Are you sure you want to leave the page?")
            }}></Prompt>
            {/* {loggedin.toString()} */}
    <button onClick={loginHandler}>{loggedin ? "logout" : "login"}</button>
<Route path="/home" exact 
// render={() => {
//     return (<h2>Hi! It's a home page</h2>)}} 
    component={HomePage}
    />

<Route path="/about" exact component={AboutPage} />
<Route path="/user/:firstname/:lastname" exact render={({match}) => {
    return loggedin ? (
    <div>
    <h2>Hi user {match.params.firstname} {match.params.lastname}</h2>
    <p>Please type your age below:</p>
        <input type="text" onChange={ageHandler}></input>
        <p>You have typed {age}</p>
        </div>
        )
    : (<Redirect to="/home" />)
}} />
        </div>
        </messageContext.Provider>
        </BrowserRouter>
     );
}
 
export default RoutingOne;