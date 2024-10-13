import React, { useState, useEffect } from "react";

export const Clock = (props) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
};

export const ButtonAutomatic = (props) => {
    const clickAutomatic = (e) => {

    }

    return (
        <div className="d-flex justify-content-center mt-3">
            <button
                className="btn btn-primary"
                onClick={clickAutomatic}
            >Automatic
            </button>
            <Clock />
        </div>
    );
};