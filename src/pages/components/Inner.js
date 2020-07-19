import React, {useContext} from 'react';
import messageContext from "../../contexts/messageContext";

const Inner = () => {

    const [message, setMessage] = useContext(messageContext);
    return ( 
        <>
        <h3>This is Inner component inside Outer component</h3>
        <button onClick={() => {setMessage(Math.random().toString())}}>Change message</button>
        </>
     );
}
 
export default Inner;