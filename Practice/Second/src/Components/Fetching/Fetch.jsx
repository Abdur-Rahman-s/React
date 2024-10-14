import React, { useEffect, useState } from "react";

export function DataFetcher() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(true)

    useEffect(() => {
        fetch("https://freetestapi.com/api/v1/users")

            .then((response) => {

                if (!response.ok) {
                    throw new Error('Your data is not Find')
                }
                return response.json()
            })
            .then((data)=> {
                setData(data)
            })
            .catch((error)=> {
                console.error(error.message)
                setError(error.message)
            })
    }, [data])

    return (
        <>
            {error && <h1>{error}</h1> }
            <div>{data.map((user)=> (
                
                <div key={user.id} >
                    <h1>{user.name}</h1>
                    <h2>{user.username}</h2>
                    <h2>{user.age}</h2>
                    <h2>{user.email}</h2>
                    <div>
                        <ul>
                            <li>{user.address.street}</li>
                            <li>{user.address.city}</li>
                            <li>{user.address.zip}</li>
                        </ul>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}