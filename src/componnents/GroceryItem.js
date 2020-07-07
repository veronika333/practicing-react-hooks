import React from 'react';
const GroceryItem = (props) => {
    return ( 
        <div className="name">
            <h3>Product: {props.name}</h3>
    <h3>Calories: {props.calories}</h3>
        </div>
     );
}
 
export default GroceryItem;