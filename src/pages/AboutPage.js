import React, {useContext} from 'react';
import messageContext from "../contexts/messageContext";

const AboutPage = () => {
    return ( 
        <>
            <h2>Hi! It's about page</h2>
    <p>Message: {useContext(messageContext)}</p>
        </>
     );
}
 
export default AboutPage;