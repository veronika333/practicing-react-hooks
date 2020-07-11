import React, { useState, useEffect } from 'react';

const TimeDate = () => {
    const [time, setTime] = useState(Date);
useEffect(() => {
   let handle = setInterval(() => {
       setTime(Date)}, 1000);
   return () => {clearInterval(handle)};
})

    return ( 
        <div>
            <h1>Time and date is updated every second</h1>
    <h2>The current date and time: {time}</h2>
        </div>
     );
}
 
export default TimeDate;