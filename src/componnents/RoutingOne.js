import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import AboutPage from "../pages/AboutPage";

const RoutingOne = () => {
    return ( 
        <BrowserRouter>
        <div>
            <h2>React Routing</h2>
            <ul>
                <li><NavLink to="/home" exact activeClassName="active-link">Home</NavLink></li>
                <li><NavLink to="/about" exact activeClassName="active-link">About</NavLink></li>
                <li><NavLink to="/user/joonas/tuominen" exact activeClassName="active-link">User Joonas Tuominen</NavLink></li>
            </ul>
<Route path="/home" exact render={() => {
    return (<h2>Hi! It's a home page</h2>)
}} />

<Route path="/about" exact component={AboutPage} />
<Route path="/user/:firstname/:lastname" exact render={({match}) => {
    return (<h2>Hi user {match.params.firstname} {match.params.lastname}</h2>)
}} />
        </div>
        </BrowserRouter>
     );
}
 
export default RoutingOne;