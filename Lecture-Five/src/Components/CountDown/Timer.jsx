
import React, { useEffect } from "react";
import "./Timer.css"
import background from "../../assets/backgkround.jpg"
import { useState } from "react";

export function CountDouwnTimer() {

    const [time, setTime] = useState("00");
    const [input, setInput] = useState("00");
    const [minute, setMinute] = useState("00");
    const [second, setSecond] = useState("00");
    const [start , setStart] = useState(false);

    let setHour = (event) => {
        let Values = event.target.value;
        if (Values.length > 2) {
            return;
        }
        setTime(Values)
    }

    let HandleInput = () => {
        setInput(time < 10 ? `0${time}` : time)
    }

    let MInuteHandle = () => {
        setMinute(time < 10 ? `0${time}` : time)
    }
    let secondHandel = () => {
        setSecond(time < 10 ? `0${time}` : time)
    }

    useEffect(() => {
        
        if (!start) return;

        let Time = setInterval(() => {
            setSecond((prevSecond) => {
                let newSeond = parseInt(prevSecond) - 1
                if (newSeond < 0) {
                    newSeond = 59;

                    setMinute((prevMinute) => {
                        let newMinute = parseInt(prevMinute) - 1
                        if (newMinute < 0) {
                            newMinute = 59;

                            setSecond((prevInput) => {
                                let newHour = parseInt(prevInput) - 1
                                return newHour < 10 ? `0${newHour}` : newHour;
                            });
                        }
                        return newMinute < 10 ? `0${newMinute}` : newMinute;
                    })
                }
                return newSeond < 10 ? `0${newSeond}` : newSeond;
            })
        }, 1000);
        return () => clearInterval(Time);
    }, [start])

    function startCount() {
        setStart(true);
    }

    return (
        <>
            <div  className="main-container" >
                <div className="timer" >
                    <p className="Hour"  >{input} :</p>
                    <p className="minute">{minute} :</p>
                    <p className="second">{second}</p>
                </div>
                <div className="TimeControl" >
                    <input type="number" onChange={setHour} placeholder="ENTER YOUR TIME *" />
                    <button onClick={HandleInput} >Set Hour</button>
                    <button onClick={MInuteHandle} >Set Minute</button>
                    <button onClick={secondHandel} >Set Second</button>
                    <button onClick={startCount} >Start</button>
                </div>
            </div>
        </>
    )

}