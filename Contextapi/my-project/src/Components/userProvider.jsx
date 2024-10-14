import React, { useState } from 'react'

function userProvider({children}) {
    const [user , setUser] = useState('')
    return (
        <>
            <userContext.Provider value={{user , setUser}}  >
                {children}
            </userContext.Provider>
        </>
    )
}

export default userProvider