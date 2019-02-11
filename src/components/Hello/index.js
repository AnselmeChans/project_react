import React from "react";
import style from "./hello.module.css";


const theme = {
    titleColor: '#F00'
}

const Hello = ({name}) => 
    <h1 className= {style.h1}>
        Hello {name}
    </h1>

export default Hello;