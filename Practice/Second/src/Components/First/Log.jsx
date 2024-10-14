import React, { useEffect, useState } from "react";


export function Form() {

    const [click , setClick] = useState(false);
    const [messege , setMessege] = useState('');

    function handleCLick() {
        setClick(!click)
    }

    useEffect(()=> {
        if(click === true) {
            setMessege('ami log in hoyechi ')
        }
        else{
            setMessege('er porer page e jete hole amake age log in korte hobe')
        }
    } , [click])

    return(
        <>
            <h1>{messege}</h1>
            <button onClick={handleCLick}>{click ? 'LOG OUT' : 'LOG IN'}</button>
        </>
    )
}