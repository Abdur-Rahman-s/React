import React, { useContext } from 'react'
import myContext from './Mycontext'

function Context() {
    const {user , isLogged} = useContext(myContext);
    return (
        <>
            <div>
                <div>
                    <h1>User Profile</h1>
                    {isLogged ? 
                        (
                            <div>
                                <p> Name { user.Name  }</p>
                                <p>Age : {user.Age}</p>
                            </div> 
                        )
                        : (<p>Please log in to see the profile information.</p>)}
                </div>
            </div>
        </>
    )
}

export default Context