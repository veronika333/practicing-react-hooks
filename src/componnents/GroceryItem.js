import React from 'react';
const GroceryItem = (props) => {
    return ( 
        <div className="name">
            {
                props.editable ? (<input type="text" 
                onKeyPress={(e) => props.onKeyPress(e, props.index)}
                defaultValue={props.name}></input>) : (<h3 onDoubleClick={props.onDoubleClick}>Product: {props.name}</h3>)
            }
    <h3>Calories: {props.calories}</h3>
    <button name={props.name} onClick={props.onClick}>Remove this product</button>
        </div>
     );
}
 
export default GroceryItem;