import React, { useContext, useState } from 'react'
import userContext from './userContext'

function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(userContext);

    const handleSubmit = (e)=> {
        e.preventDefault();
        setUser(username , password)
    }

    return (
        <>
            <div>
                <h2>Log In</h2>
                <input type="text" placeholder='Enter your name' value={username} onChange={(e)=> setUsername(e.target.value )}  />
                <input type="password" placeholder='Enter your password' />
                <button onClick={handleSubmit}  value={password} onChange={(e)=> setPassword(e.target.value )}   >Submit</button>
            </div>
        </>
    )
}

export default Login