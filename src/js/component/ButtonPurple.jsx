import React from "react";

export const ButtonPurple = (props) => {

    const clickAddPurpleLight = (e) => {
        props.setAddPurple(
            (prev) => !prev
        )
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