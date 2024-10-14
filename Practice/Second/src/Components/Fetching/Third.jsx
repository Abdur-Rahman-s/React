import React, { useEffect, useState } from "react";

export function DetaInfo() {

    const [data , setData ] = useState([])
    const [error , setError]= useState(null)
    useEffect(()=> {

        const userDeta = async () => {
            try {
                let response =await fetch('https://freetestapi.com/api/v1/users');

                if(!response.ok) {
                    throw new Error('deta is not found')
                }

                let data = await response.json()
                setData(data)
            }
            catch(error) {
                console.error(error.message)
                setError(error.message)
            }
        }
        userDeta()
    } ,[])

    return (
        <>
            <div>
                {error && <h1>{error}</h1>}
                <div>
                    {data.map((user)=> (
                        <ul key={user.id}>
                            <li>{user.name}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    )
}