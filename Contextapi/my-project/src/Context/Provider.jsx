import React, { Children, useState } from 'react'
import myContext from './Mycontext'

function Provider( {children} ) {
    // const  deta = 'hey  I am abdur rahman'
    const [user , setUser] = useState({Name : 'Abdur Rahman' , Age : 18});
    const [logged , isLogged] = useState(false)
    return (
        <>
            <myContext.Provider value={{ user , logged , setUser , isLogged }}  >
                {children} 
            </myContext.Provider>
        </>
    )
}

export default Provider