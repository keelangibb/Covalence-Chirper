import React from "react";

const HandleClick = (props) => {
    // props.preventDefault()
    console.log('HandleCLick.jsx')

    return (
        <>
            <h1> {props.userName} {props.chirp} </h1>
        </>
    )
}

export default HandleClick;