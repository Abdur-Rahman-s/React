import React, { act, useEffect, useReducer, useState } from 'react'


const Reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 };
        case 'Dicrement':
            return { count: state.count - 1 }
        default:
            return state.count
    }
}

function Reduce() {

    const [state, dispatch] = useReducer(Reducer, { count: 0 })

    return (
        <>
            <div>
                <h1>Count : {state.count}</h1>
                <button onClick={() => dispatch({ type: 'Increment' })} >Increment</button>
                <button onClick={() => dispatch({ type: 'Dicrement' })} >Dicrement</button>
            </div>
        </>
    )
}


// const reducer = (state , action)=> {
//     switch(action.type) {
//         case 'Name':
//             return {...state ,name: action.payload};
//         case 'Email' :
//             return {...state, email: action.payload}
//         case 'Reset':
//             return {name :""  , email:""}
//     }
// }
// export function ComplexState() {
//     const [state ,  dispatch] = useReducer(reducer , {name : '' ,  email : ''});
//     const [vlaues , setValues] = useState({})
//     function formateValue() {
//         setValues({
//             name: state.name,
//             email: state.email,
//         })
//     }
//     return(
//         <>
//             <div>
//                 <input type="text" 
//                 placeholder='Enter your name'
//                 value={state.name}
//                 onChange={(e)=> dispatch({type : 'Name' , payload : e.target.value }) }
//                 />

//                 <input type="email" 
//                 placeholder='Enter your email'
//                 value={state.email}
//                 onChange={(e)=>dispatch({type : 'Email' , payload : e.target.value}) }
//                 />
//                 <button onClick={()=> formateValue() } >Submit</button>
//             </div>
//             <div>
//                 <h1>Name: {vlaues.name}</h1>
//                 <h1>Email: {vlaues.email}</h1>
//             </div>
//         </>
//     )
// }


//INFO: Todo app using useReducer
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'add_list':
//             return [...state, { id: Date.now(), text: action.payload, complete: false }];
//         case 'list_maping':
//             return state.map((todo) =>
//                 todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
//             );
//         case 'Delete_todo':
//             return state.filter((todo) => todo.id !== action.id);
//         default:
//             return state;
//     }
// }

// export function TodoApp() {
//     const [state, dispatch] = useReducer(reducer, []);
//     const [add, setAdd] = useState("");

//     return (
//         <>
//             <div>
//                 <input 
//                     type="text" 
//                     placeholder="Enter your task"
//                     value={add}
//                     onChange={(event) => {
//                         setAdd(event.target.value);
//                     }} 
//                 />
//                 <button
//                     onClick={() => {
//                         if (add.trim()) {
//                             dispatch({
//                                 type: 'add_list',
//                                 payload: add
//                             });
//                             setAdd("");
//                         }
//                     }}
//                 >
//                     Add list
//                 </button>
//             </div>
//             <div>
//                 <ul>
//                     {state.map((todo) => (
//                         <li key={todo.id} style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
//                             {todo.text}
//                             <button onClick={() => dispatch({ type: 'list_maping', id: todo.id })}>
//                                 {todo.complete ? 'Undo' : 'Complete'}
//                             </button>
//                             <button onClick={() => dispatch({ type: 'Delete_todo', id: todo.id })}>
//                                 Delete
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     );
// }




// Reducer function for fetching data
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export function DataFetching() {
    const [state, dispatch] = useReducer(reducer, { data: null, loading: false, error: null });

    useEffect(() => {
        dispatch({ type: 'FETCH_START' });

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
            .catch((error) => dispatch({ type: 'FETCH_ERROR', payload: error.message }));
    }, []);

    if (state.loading) return <p>Loading...</p>;
    if (state.error) return <p>{state.error}</p>;

    return (
        <div>
            {state.data ? (
                <ul>
                    {state.data.map((value, index) => (
                        <li key={index}>{value.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No data available</p> // Handle case when there's no data
            )}
        </div>
    );
}



export default Reduce