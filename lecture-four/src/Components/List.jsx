import React, { useState } from "react";
import "./List.css"


export function ToDoList() {

    const [input , setInput] = useState('');
    const [add , setAdd] = useState([]);

    function inputFun(event) {
        setInput(event.target.value)
    }
    function addBtn() {
        if(input.trim()) {
            setAdd([...add , input]);
            setInput('')
        }
    }


    return(
        <>
            <div className="main-contianer">
                <input type="text" name="addTask" id="user-input" value={input} onChange={inputFun} />
                <button type="button" name="addTask" id="taskAddBtn" onClick={addBtn} >Add Task</button>
                <ul>{add.map((addTask , index)=> (
                    <li key={index} >{addTask}</li>
                ))}
                </ul>
            </div>
        </>
    )
}