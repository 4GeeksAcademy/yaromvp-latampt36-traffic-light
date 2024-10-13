import React from "react";

export const TrafficLight = (props) => {

    const clickRedLight = (e) => {
        props.color == "red" ? props.setColor("") : props.setColor("red")
    }
    const clickYellowLight = (e) => {
        props.color == "yellow" ? props.setColor("") : props.setColor("yellow")
    }
    const clickGreenLight = (e) => {
        props.color == "green" ? props.setColor("") : props.setColor("green")
    }
    const clickPurpleLight = (e) => {
        props.color == "purple" ? props.setColor("") : props.setColor("purple")
    }

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div id="trafficTop" className="bg-dark" style={{ width: "10px", height: "80px" }}></div>
            <div id="container" className="d-flex flex-column align-items-center bg-dark rounded p-2">
                <div
                    className={`red light bg-danger rounded-circle ${props.color == "red" ? "selected" : ""}`}
                    role="button"
                    style={{ width: "80px", height: "80px" }}
                    onClick={clickRedLight}>
                </div>
                <div
                    className={`yellow light bg-warning rounded-circle ${props.color == "yellow" ? "selected" : ""}`}
                    role="button"
                    style={{ width: "80px", height: "80px" }}
                    onClick={clickYellowLight}>
                </div>
                <div
                    className={`green light bg-success rounded-circle ${props.color == "green" ? "selected" : ""}`}
                    role="button"
                    style={{ width: "80px", height: "80px" }}
                    onClick={clickGreenLight}>
                </div>
                <div
                    className={
                        `purple light rounded-circle 
                        ${props.color == "purple" ? "selected" : ""} 
                        ${props.addPurple ? "" : "d-none"}`
                    }
                    role="button"
                    style={{ width: "80px", height: "80px", backgroundColor: "purple" }}
                    onClick={clickPurpleLight}>
                </div>
            </div>
        </div>
    );
};