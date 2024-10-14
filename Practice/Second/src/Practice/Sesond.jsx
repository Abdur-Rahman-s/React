import React, { useState } from 'react'

// info ----------- basic Level one

// note: একটি সিম্পল array of objects তৈরি করুন এবং useState ব্যবহার করে তা হ্যান্ডেল করুন।
function Sesond() {
    const [user , setUser] = useState([
        {id : 1  ,Name : 'abdur rahman' , Age: 18},
        {id : 2  ,Name : 'Shanto' , Age: 18},
        {id : 2  ,Name : 'Shakil' , Age: 14}
    ]);


    return (
        <>
            <div>
                <ul>{user.map((item)=> (
                    <li key={item.key} >
                    <p>Name : {item.Name}</p>
                    <p>Age :{item.Age}</p>
                </li>
                ))}</ul>
            </div>
        </>
    )
}


// info -------- Level Two
// note:এবার নতুন object array-তে যুক্ত করতে শিখুন।
export function LeveltwoObj() {
    const [deta , setDeta] = useState([
        {Name : 'abdur rahman'} ,
        {Age : 18}
    ])
    function addInfo() {
        let newItem = {Learning : 'javascript'}
        setDeta([...deta , newItem])
    }
    return(
        <>
            <div>
                <ul>{deta.map((e , index)=> (
                    <li  key={index} >
                        <p>{e.Name}</p>
                        <p>{e.Age}</p>
                        <p>{e.Learning}</p>
                    </li>
                ))}</ul>
                <button onClick={addInfo} >item</button>
            </div>
        </>
    )
}

export default Sesond