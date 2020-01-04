import React, {Component} from "react";


class Scoreboard extends Component{
    state = {
        message: "",
        shaking: false
    }
    componentDidUpdate({score, highScore}, oldStatus) {
        const newState = {shaking: true}
        if (score === 0 && highScore === 0) {
            newState.message = ""
        } else if (score === 0 && highScore > 0) {
            newState.message = "incorrect"
        } else {
            newState.message = "correct"
        }
        if (score !== this.props.score || this.state.message !== newState.message)
        this.setState(newState)
    }
    showMessage = () => {
        switch (this.state.message) {
            case "correct":
                return "That is correct!"
            case "incorrect":
                return "That is incorrect!"
            default:
                return "Click any image to begin. Don't guess the same one more than once!"
        }
    }
    render () {
        return (
            <li className = {this.state.shaking ? this.state.message : ""}
            onAnimationEnd = {() => this.setState({shaking: false})}> {this.showMessage}</li>
        )
    }
}

export default Scoreboard;