import React from 'react';
import { observer, useObserver } from 'mobx-react-lite';

const ReactAndMobx = observer(() => {

    const store = useObserver(() => ({
        count: 1,
        plusOne() {store.count ++},
        minusOne() {store.count --}
    })
    )

function plusHandler(){
store.plusOne();
}
function minusHandler(){
store.minusOne();
}

    return ( 
        <>
            <h2>Using React + Mobx, useObservable</h2>
            <h3>Counter: {store.count}</h3>
            <button onClick={plusHandler}>Plus one</button>
            <button onClick={minusHandler}>Minus one</button>
        </>
     );
})
 
export default ReactAndMobx;