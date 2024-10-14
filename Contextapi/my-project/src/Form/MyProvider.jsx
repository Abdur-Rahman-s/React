import React, { useEffect, useState } from 'react'
import UserContext from './userContext';
function MyProvider({ children }) {

    const [nameInput, setNameInput] = useState('');
    const [passInput, setPassInput] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState([]);


    useEffect(() => {
        let fetchUser = async () => {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/users')
                let deta = await response.json()
                setUser(deta)
            }
            catch (error) {
                console.error('User deta is not found', error)
            }
        }
        fetchUser();
    }, [])

    return (
        <>
            <UserContext.Provider value={{ nameInput, setNameInput, setEmail, email, passInput, setPassInput, user }} >
                {children}
            </UserContext.Provider>
        </>
    )
}

export default MyProvider


