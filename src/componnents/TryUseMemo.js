import React, { useState, useMemo } from 'react';
import TryUseMemoChild from "./TryUseMemoChild"

const TryUseMemo = () => {
const [i, setI] = useState(0);
const increaseHandler = () => {
    setI(i + 1);
}

const memoPart = useMemo(() => {
return <TryUseMemoChild />
    }, [])


    return ( 
        <div>
            <h2>Trying useMemo hook</h2>
    <p>The number is now: {i}</p>
<button onClick={increaseHandler}>Increase</button>
<TryUseMemoChild />
<p>But the Memo child below is not rerendering (useMemo)</p>
<p>{memoPart}</p>
        </div>
     );
}
 
export default TryUseMemo;