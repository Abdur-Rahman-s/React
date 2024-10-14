import React, { useMemo, useState } from 'react';

function Memo({ deta }) {
    const [filter, setFilter] = useState('');

    // useMemo ব্যবহার করে ফিল্টার করা ডেটা মেমোরাইজ করা
    const filterDeta = useMemo(() => {
        return deta.filter((item) => item.includes(filter)); // return statement সঠিকভাবে যোগ করা হয়েছে
    }, [deta, filter]);

    // input field থেকে filter স্টেট আপডেট করা
    function userDeta(e) {
        e.preventDefault();
        setFilter(e.target.value);
    }

    return (
        <>
            <div>
                <input type="text" value={filter} onChange={userDeta} placeholder="Filter data" />
                <div>
                    <ul>
                        {filterDeta.map((list, index) => (
                            <li key={index}>
                                <p>{list}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Memo;
