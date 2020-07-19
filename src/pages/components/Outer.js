import React, {useContext} from 'react';
import Inner from "./Inner";
import messageContext from "../../contexts/messageContext";
const Outer = () => {
    return ( 
        <>
        <h3>This is Outer component inside HomePage</h3>
    <p>This is message in Outer component: {useContext(messageContext)[0]}</p>
        <Inner />
        </>
     );
}
 
export default Outer;