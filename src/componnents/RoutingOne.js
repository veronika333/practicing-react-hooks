import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from "../pages/AboutPage";

const RoutingOne = () => {
    return ( 
        <BrowserRouter>
        <div>
<Route path="/home" exact render={() => {
    return (<div>Hi! It's a home page</div>)
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