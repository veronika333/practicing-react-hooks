import React, {useReducer } from 'react';

const initialState = {
    count: 0
}
function reducerFunction(state, action) {
switch (action.type){
case "PLUS":  return {count: state.count + 1 };
case "MINUS": return {count: state.count - 1 };
default: return state
}
}

const HookUseReducer = () => {

const [state, dispatch] = useReducer(reducerFunction, initialState)

function plusOneHandler() {
dispatch({type: "PLUS"});
}

function minusOneHandler() {
dispatch({type: "MINUS"});
}

    return ( 
        <div>
            <h2>useReducer Hook</h2>
    <h3>Count: {state.count}</h3>
            <button onClick={plusOneHandler}>Increase by one</button>
            <button onClick={minusOneHandler}>Decrease by one</button>
        </div>
     );
}
 
export default HookUseReducer;
