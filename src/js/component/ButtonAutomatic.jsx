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
        // Use setInterval to update the timer every 1000 milliseconds (1 second)
        setTimeInterval(setInterval(() => {
            // Update the timer by incrementing the previous value by 1
            setTimer((prev) => prev + 1);
        }, 1000));

        props.setBtnAuto(
            (prev) => !prev
        )
    }

    let btnColor = "primary"
    let conditionalColor = ""

    if (props.btnAuto) {
        if (timer > 0 && timer <= 2) {
            props.setColor("red")
            conditionalColor = "red"
            btnColor = "danger"
            //console.log("Luz roja 🔴 ", timer, " auto: ", btnColor)
        } else if (timer > 2 && timer <= 4) {
            props.setColor("yellow")
            conditionalColor = "yellow"
            btnColor = "warning"
            //console.log("Luz amarilla 🟡 ", timer, " auto: ", btnColor)
        } else if (timer > 4 && timer <= 6) {
            props.setColor("green")
            conditionalColor = "green"
            btnColor = "success"
            //console.log("Luz verde 🟢 ", timer, " auto: ", btnColor)
        } else if (timer > 6) {
            props.setColor("")
            conditionalColor = ""
            btnColor = "primary"
            setTimer(1);
            //clearInterval(timeInterval);
        }
    }
    else {
        clearInterval(timeInterval);
        //conditionalColor == "" ? setTimer(0) : null
    }

    return (
        <div className="d-flex justify-content-center mt-3">
            <button className={`btn btn-${props.color == conditionalColor ? btnColor : "primary"}`} onClick={clickAutomatic}>Automatic</button>
        </div >
    );
};