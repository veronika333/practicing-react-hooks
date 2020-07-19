import React, {useContext} from 'react';
import messageContext from "../contexts/messageContext";
import Outer from './components/Outer';

const HomePage = () => {
    return ( 
        <>
<h3>Hi! It's a home page.</h3>
    <p>Message on home page: {useContext(messageContext)}</p>
    <Outer />
        </>
     );
}
 
export default HomePage;