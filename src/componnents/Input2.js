import React, { forwardRef } from 'react';

const Input2 = ({placeholder, style, onKeyDown}, ref) => {
    return ( 
        <div>
<input placeholder={placeholder} style={style} ref={ref} onKeyDown={onKeyDown}></input>
        </div>
     );
}
 
const Input2Ref = React.forwardRef(Input2);
export default Input2Ref;