import React, { useContext , useState } from 'react';
import UserContext from './userContext';

function Form() {
    // Context থেকে স্টেট এবং সেটার আপডেট ফাংশনগুলো গ্রহণ করা
    const { nameInput, setNameInput, setEmail, email, passInput, setPassInput } = useContext(UserContext);
    const [submittedData, setSubmittedData] = useState({
        name: '',
        email: ''
    });

    // ইনপুটের মান হ্যান্ডল করার জন্য handleInput ফাংশন
    function handleInput(event) {
        const { name, value } = event.target;
        if (name === 'name') {
            setNameInput(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') { // টাইপো সংশোধন করা হয়েছে
            setPassInput(value); // sePasInput -> setPassInput
        }
    }

    // ফর্ম সাবমিট করার সময় ফাংশন
    function handleClick(e) {
        e.preventDefault();

        setSubmittedData({
            name: nameInput,
            email: email
        })
        // সাবমিশনের পর ইনপুটগুলো খালি করা
        setNameInput('');
        setEmail('');
        setPassInput('');
    }

    return (
        <div>
            <h1>User Form</h1>
            <form onSubmit={handleClick}>
                <input 
                    type="text" 
                    placeholder="Enter your name" 
                    name="name" 
                    required 
                    onChange={handleInput} 
                    value={nameInput} 
                />
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    name="email" 
                    required 
                    onChange={handleInput} 
                    value={email} 
                />
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    name="password" 
                    required 
                    onChange={handleInput} 
                    value={passInput} 
                />
                <button type="submit">Submit</button>
            </form>

            <div>
                <h1>Show Data</h1>
                <p>Name: {submittedData.name}</p>
                <p>Email: {submittedData.email}</p>
            </div>
        </div>
    );
}

export default Form;
