
import React, { useEffect, useState } from "react";
import "./date.css"


export function Mydate() {

    const [time , setTime] = useState({hour : 0 , minute : 0 , second : 0 , ampm : 'AM'})

    useEffect(()=> {
        const Interval = setInterval(() => {
            setTime(dateTime())
        }, 1000);

        return ()=> clearInterval(Interval)
    } , []);

    function dateTime() {
        const Time = new Date() ;
        let hour = Time.getHours();
        let minute  = Time.getMinutes();
        let second = Time.getSeconds();
        let ampm = hour >= 12 ? 'AM' : 'PM';
        let formatehour = hour % 12 || 12 ;
        return {formatehour ,  minute , second , ampm}
    }

    return(
        <>
            <div className="clock">
                <p id="hour">{time.formatehour < 10 ? `0${time.formatehour}`: time.formatehour }:</p>
                <p id="minute">{time.minute < 10 ? `0${time.minute}` : time.minute}:</p>
                <p id="second"> {time.second < 10 ? `0${time.second}` : time.second}</p>
                <p id="ampm">{time.ampm} </p>
            </div>
        </>
    )

}

