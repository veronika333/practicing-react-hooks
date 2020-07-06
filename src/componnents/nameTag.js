import React from 'react';
//const nameStyle = {color: "grey", border: "2px grey solid", margin: "2px auto", padding: "2px", width: "300px"};


const NameTag = (props) => {
    if (!props.name && !props.lastName) {
        return (
            <div className="name">
            <h3>No user</h3></div>
        )
    }
    if (props.name === "John") {
        return (
            <div className="name">
    <h3>Name: {props.name}</h3>
    <h3>Last name: {props.lastName}</h3>
    <h3 style={{color: "red"}}>VIP User</h3>
    </div>
        )
    }
    return ( 
        <div className="name">
    <h3 style={props.style}>Name: {props.name}</h3>
    <h3 style={props.style}>Last name: {props.lastName}</h3>
    </div>
     );
}
 
export default NameTag;