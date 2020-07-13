import React, { useEffect } from 'react';

let renderCount = 0;
const TryUseMemoChild = () => {
    useEffect(() => {
(renderCount ++)
    })

    return ( 
        <div>
            <p>The normal child was rendered: {renderCount}  times.</p>
        </div>
     );
}
 
export default TryUseMemoChild;