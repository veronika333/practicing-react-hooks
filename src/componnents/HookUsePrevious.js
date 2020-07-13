import React, { useState, useEffect } from 'react';
import usePrevious from "../hooks/usePrevious";

const HookUsePrevious = () => {
const [age, setAge] = useState(21);
const makeYounger = () => {
    setAge(age - 1)
}

const previousAge = usePrevious(age);
    return ( 
        <div>
         <h2>Cutom hook usePrevious</h2>   
    <h3>Current age is {age}</h3>
    <button onClick={makeYounger}>Make it younger</button>
    <h3>The previous age was: {previousAge}</h3>
        </div>
     );
}
 
export default HookUsePrevious;