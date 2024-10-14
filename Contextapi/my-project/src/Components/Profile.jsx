import React, { useContext } from 'react'
import userContext from './userContext'

function Profile() {

    const {user} = useContext(userContext)
    if(!user) return <p>Please login</p>;

    return (
        <>
            <div>
                
            </div>
        </>
    )
}

export default Profile