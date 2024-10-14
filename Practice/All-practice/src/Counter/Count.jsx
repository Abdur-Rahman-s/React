import React, { useState } from "react";
import "./Count.css"

function Counter() {
    const [count , setCount] = useState(0)

    function number() {
        setCount(count + 1)
    }

    return(
        <>
            <div className="container">
                <h1>{count}</h1>
                <button onClick={number}>Add one</button>
                <button onClick={()=> setCount(0)}>Clear</button>
            </div>
        </>
    )
}

export default Counter