import React from 'react';
import './time.css'

function Time() {
    let currentTime = new Date();
    currentTime = currentTime.getHours();
    let greetings = " ";
    const cssStyle = {};

    if (currentTime >= 1 && currentTime < 12) {
        greetings = "Good Morning";
        cssStyle.color = "green"
    }
    else if (currentTime >= 12 && currentTime < 19) {
        greetings = "Good Afternoon";
        cssStyle.color = "orange"
    }
    else {
        greetings = "Good Night";
        cssStyle.color = "grey"
    }
    return (
        <>
            <div className="main-div">
                <h2 > Hello freinds, <span style={cssStyle} > {greetings} </span> </h2>
            </div>
        </>
    )
}

export default Time