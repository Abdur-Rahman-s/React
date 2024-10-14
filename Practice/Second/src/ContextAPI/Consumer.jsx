import React, { useContext } from 'react'
import Provider from './Provider'
import myContext from './Context'

function Consumer() {
    const {deta} = useContext(myContext)
    return (
        <>
            <h1>Name: {deta.Name}</h1>
            <h1>Age: {deta.Age}</h1>
            <h1>Address: {deta.Address}</h1>
        </>
    )
}

export default Consumer