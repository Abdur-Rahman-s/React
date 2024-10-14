import React, { useContext, useState } from 'react'
import newContext from './NewContext';

function UserForm() {
    const { deta, setDeta }= useContext(newContext);
    const [info, setInfo] = useState({
        FirstName: '',
        LastName: '',
        password: ''
    });
    
    function handleInput(event) {
        const { name, value } = event.target;
        setInfo({
            ...info,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setDeta(info);  // Save the data to context
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>User Form</h1>
                    <div>
                        <label htmlFor="FirstName">First Name</label>
                        <input 
                            id="FirstName" 
                            name="FirstName" 
                            onChange={handleInput} 
                            value={info.FirstName}  
                            type="text" 
                            placeholder="Enter your First Name" 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="LastName">Last Name</label>
                        <input 
                            id="LastName" 
                            name="LastName" 
                            value={info.LastName} 
                            onChange={handleInput}   
                            type="text" 
                            placeholder="Enter your Last Name" 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            name="password" 
                            value={info.password} 
                            onChange={handleInput}   
                            type="password" 
                            placeholder="Enter your password" 
                            required 
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <h1>Show Deta</h1>
                <p>{deta.FirstName}</p>
                <p>{deta.LastName}</p>
            </div>
        </>
    );
}

export default UserForm;
