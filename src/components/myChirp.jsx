import React from "react";

const MyChirp = (props) => {

    console.log('myChirp.jsx');
    
    return (
        <>
            <h1> {props.userName} {props.chirp} </h1>
        </>
    );
};

export default MyChirp;