import React from "react";

const ToggleButton = props => {
    return <button onClick={props.onClick} style={{backgrounColor: "red", height: 50, width: "25%"}}>Toggle theme : {props.theme}</button>
}

export default ToggleButton