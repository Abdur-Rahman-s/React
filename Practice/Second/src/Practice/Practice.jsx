import React, { useState } from 'react'

function Practice() {

    const [array, setArray] = useState([]);

    function handleArray() {
        setArray([...array, {
            id: array.length,
            value: Math.floor(Math.random() * 20)
        }])
    }

    return (
        <>
            <div>
                <button onClick={handleArray} >Add Item</button>
                <ul>{array.map((newItem) => (
                    <li key={newItem.id} >
                        <p> ID :   {newItem.id}</p> <span> VALUE : {newItem.value}</span>
                    </li>
                ))}</ul>
            </div>
        </>
    )
}

export default Practice