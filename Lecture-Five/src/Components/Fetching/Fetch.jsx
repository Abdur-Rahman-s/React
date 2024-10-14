import React, { useEffect, useState } from "react";

export function DataFetcher() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                if (!response.ok) {
                    throw new error('network response not ok')
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false)
            })
    }, []);

    return (
        <>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <ul>
                    {data.map(post => <li key={post.id}>{post.title}</li>)}
                </ul>
            </div>



            {/* <div>
                {loading ? <h1>Loading....</h1> : <ul>{data.map((userDeta)=> <li key={userDeta.id} >{userDeta.title}</li> )}</ul> }
            </div> */}

            {/* <div>
                <ul>
                    {data.map((userDeta)=> (
                        <li key={userDeta.id} ><h5>{userDeta.title}</h5> <ol><li>{userDeta.body}</li></ol> </li>
                    ))}
                </ul>
            </div> */}
        </>
    )
}