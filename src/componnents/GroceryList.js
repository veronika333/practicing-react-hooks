import React, { useState } from 'react';
import GroceryItem from "./GroceryItem";

const groceries = [
    {name: "tomatos", calories: 50},
    {name: "cucumber", calories: 40},
    {name: "bread", calories: 260},
    {name: "salmon", calories: 290},
    {name: "hamburger", calories: 540}
]

const GroceryList = () => {
    const [product, setProduct] = useState(groceries);
const removeUnhealthy = (e) => {
// const copyProduct = [...product];
// copyProduct.filter(value => value.calories <= 300);
const filteredProducts = product.filter(value=> value.calories < 250);
setProduct(filteredProducts);
}

const removeOne = (e) => {
console.log(e.target.name);
const removeOneProduct = product.filter(value => value.name !== e.target.name);
setProduct(removeOneProduct);
}

const [editable, setEditable] = useState(false);
const makeEditable = () => {
    setEditable(true);
}
const saveNewProduct = (e, index) => {
if (e.key === "Enter") {
    setEditable(false);
    const copyProducts = [...product];
    copyProducts[index].name = e.target.value;
    
}
}
    return ( 
        <div>
        <h1>Grocery List</h1>
        <h2>Click the button in the bottom and remove all the products, which are over 250 calories</h2>
        <h2>Or click the button and remove individual product</h2>
        <h2>Double click on the product, edit it and click enter</h2>
        {
            product.map((value, index) => {
               return <GroceryItem key={`${index} ${value.name} ${value.calories}`} name={value.name} calories={value.calories} onClick={removeOne} editable={editable}
               onDoubleClick={makeEditable}
               onKeyPress={saveNewProduct}
               index={index} />
            })
        }
        <button onClick={removeUnhealthy}>Remove Unhealthy Over 250 Calories</button>
</div>
     );
}
 
export default GroceryList;
