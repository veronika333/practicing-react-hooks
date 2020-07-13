import React, { useState, useEffect } from 'react';

const positionXY = {
x: 0,
y: 0
}

const TimeDate = () => {
    const [time, setTime] = useState(Date);
const [xy, setXY] = useState(positionXY);

useEffect(() => {
   let handle = setInterval(() => {
       setTime(Date)}, 1000);
   return () => {clearInterval(handle)};
})

const mouseMoveHandler = (e) => {
 setXY({
     x:e.clientX,
     y:e.clientY
 })
}

useEffect(() => {
window.addEventListener('mousemove', mouseMoveHandler)
}, []);

    return ( 
        <div>
            <h1>Time and date is updated every second and you can see mouse position in the screen</h1>
    <h2>The current date and time: {time}</h2>
    <p>You mouse position in the screen is:</p>
    <p>x: {xy.x}, y: {xy.y}</p>
        </div>
     );
}
 
export default TimeDate;