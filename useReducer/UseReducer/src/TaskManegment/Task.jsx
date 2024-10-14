import React, { useReducer } from 'react'



const initialValue = [{
    Length : 1,
    Input : '',
    Complete : false,
    Remove : false
}];
const reducer = (state , action)=> {
    switch(action.type) {
        case 'SET_LENGTH' :
            return state.map((task , index)=>{
                index === action.index ? {...task ,Length:action.payload } : task;
            });
        case 'USER_INPUT' :
            return state.map((task , index)=>{
                index === action.index ? {...task ,Input:action.payload } : task;
            });
        case 'COMPLETE_TASK':
            return state.map((task , index)=>{
                index === action.index ? {...task ,Complete:action.payload } : task;
            });
        case 'REMOVE_TASK':
            return state.map((task , index)=>{
                index === action.index ? {...task ,Remove:action.payload } : task;
            });
        default:
            return state;
    }
};

function Task() {

    const [state , dispatch] = useReducer(reducer , initialValue);
    function HandleInput(event) {
        dispatch({
            type : 'USER_INPUT' ,
            index : 1 ,
            payload: event.target.value
        })
    }
    function Complete() {
        dispatch({
            type:'COMPLETE_TASK' ,
            index : index,
            payload : !state[index].Complete
        })
    }
    function removeTask() {
        dispatch({
            type: 'REMOVE_TASK',
            index: index,
            payload: true
        });
    }
    return (
        <>
            <div>
                <h1>Task Manegment</h1>
                <div>
                    <input type="text" onChange={HandleInput}  value={state.Length > 0 ? state[0].Input : ''} />
                    <button  >Add Task</button>
                </div>
                <div>
                    <ul>{state.map((value , index )=> (
                        <li key={index} >
                            {value.Length} <span>{value.input}</span>
                            <span><button onClick={()=> Complete(index) } >{value.Complete ? 'complete' : 'Undo'}</button></span>
                            <span>
                                <button onClick={()=> removeTask(index)} >{value.Remove ? 'Removed' : 'Remove'  }
                        
                                </button>
                            </span>
                        </li>
                    ))}</ul>
                </div>
            </div>
        </>

    )
}

export default Task