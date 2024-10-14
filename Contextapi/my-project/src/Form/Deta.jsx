import React, { useContext } from 'react';
import UserContext from './userContext';

function Deta() {
    const { user } = useContext(UserContext); // useContext দিয়ে context ব্যবহার করা হয়েছে

    return (
        <div>
            <ul>
                {user.map((deta) => (
                    <li key={deta.id}>
                        <p>Name: {deta.name}</p>
                        <p>Username: {deta.username}</p>
                        <p>Email: {deta.email}</p>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default Deta;
