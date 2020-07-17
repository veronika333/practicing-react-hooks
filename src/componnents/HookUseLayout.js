import React, {useState, useRef, useLayoutEffect} from 'react';

function useDimention(element, number) {
const [height, setHeight] = useState(0);
const [width, setWidth] = useState(0);

useLayoutEffect(() => {
    let boundingFrame = element.current.getBoundingClientRect();
    setHeight(boundingFrame.height);
setWidth(boundingFrame.width);
    console.log(JSON.stringify(boundingFrame));
}, [number]);
return {height, width};
}

const HookUseLayout = () => {
const [number, setNumber] = useState(20);
const numberRef = useRef(null);
// const {height, width} = useDimention(numberRef, number);
const {height, width} = useDimention(numberRef, number)
//useDimention(numberRef, number)
    return ( 
        <div>
            <h2>Hook useLayoutEffect</h2>
            <h3>Change the width of the window, click the button and see the width below (px).</h3>
    <p ref={numberRef}>{number}</p>
    <h3>The heigth of the element is {height} and the width {width}</h3> 
    <button onClick={() => {setNumber(number * 10)}}>Increase by 10</button>
        </div>
     );
}
 
export default HookUseLayout;