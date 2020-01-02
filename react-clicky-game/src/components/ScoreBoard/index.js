import React from "react";
import GameButtons from "../GameButtons";

class Scoreboard extends React.Component{
    state = {
        count: 0
    }
    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }
    render() {
        return(
        <>
        <p className = "counter">
          Click Counter! Count: {this.state.count}
        </p>
        <GameButtons changeScore = {this.handleIncrement} />
        </>
        )
    }
}

export default Scoreboard;