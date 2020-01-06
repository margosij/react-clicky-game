import React from "react";
import "./style.css";
import Scoreboard from "../ScoreBoard";

function Title(props) {
    return (
        <nav className = "headerInfo">
            <ul>
                <h1 className = "gameTitle">Clicky Game!</h1>
                <Scoreboard score = {props.score} highScore = {props.highScore} />
                <li>Score: {props.score} | High Score: {props.highScore}</li>
            </ul>
        </nav>
    )}

export default Title