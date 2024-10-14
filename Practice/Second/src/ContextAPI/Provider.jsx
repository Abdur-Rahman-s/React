import React, { useState } from 'react'
import myContext from './Context'

function Provider({children}) {
    const [deta , setDeta] = useState({
        Name : 'abdur rahman',
        Age : 18,
        Address : 'Sirajganj'
    })

    return (
        <myContext.Provider value={{deta}} >
            {children}
        </myContext.Provider>
    )
}

export default Provider