import React, { useRef } from 'react'

function Useref() {
    
    const inputRef = useRef(null);
    function handleInput(event) {
        event.preventDefault()
        inputRef.current.focus();
    }

    const scrlRef = useRef(null)
    function scrollPosition() {
        if(scrlRef.current) {
            console.log(scrlRef.current.scrollTop)
            console.log(scrlRef.current.scrollWidth)
            
        }
    }

    const countRef = useRef(0);
    function handleCount() {
        countRef.current = countRef.current  + 1
        console.log(countRef.current)
    }
    return (
        <div>
            
            <button onClick={handleCount} >Count</button>


            {/* <div ref={scrlRef} className='h-[200px] w-[300px] bg-slate-200 overflow-scroll ' >
                <div  className='h-[300px] w-[500px]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi delectus, vitae illo officiis, voluptatem cupiditate sunt, necessitatibus sed molestiae enim! Dolore fugit iste in quae, .</p>
                </div>
            </div>
            <button onClick={scrollPosition} >Scroll</button> */}
{/* 
            <form>
                <p>{inputRef}</p>
                <input type="text" ref={inputRef} className='border  ' />
                <button onClick={handleInput} >Click me</button>
            </form> */}

        </div>

    )
}

export default Useref