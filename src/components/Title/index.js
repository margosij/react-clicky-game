import React from "react";
import "./style.css";
function Title(props) {
    return (
        <nav className = "headerInfo">
            <ul>
                <h1 className = "gameTitle">Clicky Game!</h1>
                <li>{props.message}</li>
                <li>Score: {props.score} | High Score: {props.highScore}</li>
            </ul>
        </nav>
    )}
    
export default Title