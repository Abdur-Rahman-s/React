import React, { useReducer } from 'react'


const initialState = {
    counter : 0,
}

const reducer = (state , action)=> {
    switch(action.type) {
        case 'Increment':
            return  {counter : state.counter+1};
        case 'Dicrement':
            return {counter : state.counter-1};
        default:
            state;
    }
}

function ComplexCounter() {
    const [state , dispatch] = useReducer(reducer , initialState);
    return (
        <>
            <div>
                <h1>{state.counter}</h1>
                <button onClick={()=> dispatch({
                    type : 'Increment'
                })} >Increment</button>
                <button onClick={()=> dispatch({
                    type : 'Dicrement'
                })} >Dicrement</button>
            </div>
        </>
    )
}

export default ComplexCounter