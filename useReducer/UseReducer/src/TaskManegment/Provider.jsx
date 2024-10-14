import React from 'react'
import Context from './Contextaapi'

function Provider({children}) {

    return (
        <Context.Provider value={''} >
            {children}
        </Context.Provider>
    )
}

export default Provider