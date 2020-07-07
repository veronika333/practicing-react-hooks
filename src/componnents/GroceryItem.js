import React from 'react';
const GroceryItem = (props) => {
    return ( 
        <div className="name">
            <h3>Product: {props.name}</h3>
    <h3>Calories: {props.calories}</h3>
    <button name={props.name} onClick={props.onClick}>Remove this product</button>
        </div>
     );
}
 
export default GroceryItem;