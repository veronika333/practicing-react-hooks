import React, { useEffect, useRef } from 'react';

const Form2 = () => {
    const nameRef = useRef();
    const ageRef = useRef();
    const marriedRef = useRef();
    const submitRef = useRef();

 useEffect(() => {
        nameRef.current.focus()
    }, []);

const onKeyPressedHandler = (e) => {
    
// console.log(e.keyCode);
if (e.keyCode === 13) {
    e.preventDefault();
    if (e.target.id === "nameField") {
    ageRef.current.focus()
    }
    if (e.target.id === "ageField") {
        marriedRef.current.focus()
    }
    if (e.target.id === "marriedFielf") {
        submitRef.current.focus()
    }
}
}
const alertHandler = () => {
    alert("The form has been submitted")
}
    return ( 
        <div>
            <h1>Form with useRef hook</h1>
            <h3>You can press Enter to move to the next input box</h3>
            <form>
                <div className="form-field">
                    <span>Name</span>
                    <input ref={nameRef} type="text" onKeyDown={onKeyPressedHandler} id="nameField"></input>
                </div>
                <div className="form-field">
                    <span>Age</span>
                    <input ref={ageRef} type="text" id="ageField" onKeyDown={onKeyPressedHandler}></input>
                </div>
                <div className="form-field">
                    <span>Tick if you are married</span>
                    <input ref={marriedRef} type="checkbox" id="marriedField" onKeyDown={onKeyPressedHandler}></input>
                </div>
                <button ref={submitRef} id="submitField" onClick={alertHandler}>Submit</button>
            </form>
        </div>
     );
}
 
export default Form2;