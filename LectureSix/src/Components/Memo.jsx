import React, { memo, useMemo, useState } from 'react'


// child component
// const Child = memo(({count})=> {
//     console.log('child component is rendering' ,{count});
//     return <p>{`Count : ${count}`}</p>
// })

// // parent component
// function Memo() {
//     const [count , setCount] = useState(0) ;

//     function hendleClick() {
//         setCount(count+1)
//     }
//     return (
//         <>
//             <div>
//                 <Child count={count} />
//                 <button onClick={hendleClick} className='bg-slate-400 px-3 py-2 ' >Click me</button>
//             </div>
//         </>
//     )
// }


export function Counter () {
    const [count , setCount] = useState(0);

    function expensive(number) {
        // DEBUG ---> inside  expensive task !
        for(let i = 0 ; i<1000000 ; i++){}
        return number * 2;
    }
    let doubleValue = useMemo(()=> expensive(count) , [count]) // INFO --> implement ueeMemo hook
    return(
        <>
            <div className='flex items-center justify-center gap-5  flex-col' >
                <h1 className='text-4xl ' >Count : {count}</h1>
                <button onClick={()=> setCount(count + 1) } className='border px-5 py-2 bg-sky-400 text-white ' >Increment</button>
                <h1>doubleValue :{doubleValue}</h1>
            </div>
        </>
    )
}

// export default Memo