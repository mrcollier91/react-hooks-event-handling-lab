// Code Keypad Component Here
import React from "react";
// function handleChage() {
//     console.log(input.value)
// }
function Keypad (){
    return (
        <div>
            <input type={"password"} onChange={event => console.log("Entering password...")}></input>
        </div>
    )
}

export default Keypad;