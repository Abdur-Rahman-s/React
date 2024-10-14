
import React, { useState } from "react";
import './Counter.css'

function Counteritem() {
    const [count , setCount ]= useState(0);
    const increment  = ()=> {
        setCount(count + 1)
    }
    return(
        <>
            <div className="main-container">
                <h2>You hav clicked {count} time</h2>
                <button onClick={increment}>Count</button>
            </div>
        </>
    )
}

export default  Counteritem