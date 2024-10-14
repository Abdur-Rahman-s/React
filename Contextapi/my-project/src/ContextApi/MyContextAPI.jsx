import React, { useState } from 'react';
import newContext from './NewContext';
import UserForm from './UserForm';

function App() {
    const [deta, setDeta] = useState({});

    return (
        <newContext.Provider value={{ deta, setDeta }}>
            <UserForm />
        </newContext.Provider>
    );
}

export default App;
