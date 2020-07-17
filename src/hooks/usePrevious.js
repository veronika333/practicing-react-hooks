import React, {useEffect, useRef, useDebugValue} from 'react';

const usePrevious = (value) => {
    const ref = useRef(null);
useEffect(() =>{
    ref.current = value;
})
useDebugValue(ref.current > 24 ? "too much" : "too little")
return ref.current;
}
 
export default usePrevious;