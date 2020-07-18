import React, { useState } from 'react';
import { BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom';
import AboutPage from "../pages/AboutPage";

const RoutingOne = () => {

    const [loggedin, setLoggedin] = useState(false);
    function loginHandler(){
        setLoggedin(!loggedin);
    }

    return ( 
        <BrowserRouter>
        <div>
            <h2>React Routing, Redirect, Button changes(login/logout)</h2>
            <ul>
                <li><NavLink to="/home" exact activeClassName="active-link">Home</NavLink></li>
                <li><NavLink to="/about" exact activeClassName="active-link">About</NavLink></li>
                <li><NavLink to="/user/joonas/tuominen" exact activeClassName="active-link">User Joonas Tuominen</NavLink></li>
            </ul>
            {/* {loggedin.toString()} */}
    <button onClick={loginHandler}>{loggedin ? "logout" : "login"}</button>
<Route path="/home" exact render={() => {
    return (<h2>Hi! It's a home page</h2>)
}} />

<Route path="/about" exact component={AboutPage} />
<Route path="/user/:firstname/:lastname" exact render={({match}) => {
    return loggedin ? (<h2>Hi user {match.params.firstname} {match.params.lastname}</h2>)
    : (<Redirect to="/home" />)
}} />
        </div>
        </BrowserRouter>
     );
}
 
export default RoutingOne;