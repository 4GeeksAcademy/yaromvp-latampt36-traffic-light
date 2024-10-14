import React, { useState, useEffect } from "react";

/*export const Clock = (props) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className="d-none">{time}</h1>
        </div>
    );
};*/

export const ButtonAutomatic = (props) => {

    const [timer, setTimer] = useState(0);
    const [timeInterval, setTimeInterval] = useState(null);

    // Function to start the timer
    const clickAutomatic = () => {
        if (timeInterval != null) {
            clearInterval(timeInterval);
            setTimeInterval(null);
        }
        else {
            setTimeInterval(setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000));
        }
        props.setBtnAuto(
            (prev) => !prev
        )
    }

    useEffect(() => {
        if (props.btnAuto) {
            if (timer > 0 && timer <= 2) {
                props.setColor("red")
            } else if (timer > 2 && timer <= 4) {
                props.setColor("yellow")
            } else if (timer > 4 && timer <= 6) {
                props.setColor("green")
            } else if (timer > 6) {
                props.setColor("")
                setTimer(1);
                //clearInterval(timeInterval);
            }
        }
        else {
            clearInterval(timeInterval);
        }
    }, [timer])

    return (
        <div className="d-flex justify-content-center mt-3">
            <button className={`btn btn-${props.color == "red" ? "danger" : props.color == "yellow" ? "warning" : props.color == "green" ? "success" : "primary"
                }`} onClick={clickAutomatic}>Automatic</button>
        </div >
    );
};