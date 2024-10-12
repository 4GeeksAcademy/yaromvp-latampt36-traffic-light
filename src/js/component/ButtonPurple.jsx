import React, { useState, useEffect } from "react";

export const ButtonPurple = (props) => {
    const clickAddPurpleLight = (e) => {
        props.setAddPurple(
            (prev) => !prev
        )
        console.log(props.addPurple)
    }

    return (
        <div className="d-flex justify-content-center mt-3">
            <button
                className="btn text-white"
                style={{ backgroundColor: "purple", border: "none" }}
                onClick={clickAddPurpleLight}
            >Purple Light
            </button>
        </div>
    );
};