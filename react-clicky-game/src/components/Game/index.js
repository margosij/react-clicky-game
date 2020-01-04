import React, {Component} from "react";
import buttons from "../../buttons.json";
import GameButtons from "../GameButtons"
// import ScoreBoard from "../ScoreBoard";
import Title from "../Title"
import Wrapper from "../Wrapper"

class Game extends Component{
    state = {
        buttons,
        score: 0,
        highScore: 0
    }
    componentDidMount() {
        this.setState({buttons: this.shuffleCards(this.state.buttons)})
    }
    shuffleCards = buttons => {
        for (let i=buttons.length -1; i>0; i--) {
            let j = Math.floor(Math.random() * (i+1))
            let x = buttons[i]; 
            buttons[i] = buttons[j];
            buttons[j] = x
        }
        return buttons
    }
    correctGuess = newButtons => {
        const {score, highScore} = this.state;
        const newScore = score + 1;
        const newHighScore = Math.max(newScore, highScore);

        this.newState({
            data: this.shuffleCards(newButtons),
            score: newScore,
            highScore: newHighScore
        })
    }
    incorrectGuess = buttons => {
        this.newState({
            data: this.resetGame(buttons),
            score: 0
        })
    }
    resetGame = buttons => {
        const resetGame = buttons.map(item => ({ ...item, clicked: false}))
        return this.shuffleCards(resetGame)
    }
    clickEvent = id => {
        let guessedCorrectly = false
        const newButtons = this.state.buttons.map(card => {
            const newItem = {...card}
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return newItem
        })
        if (guessedCorrectly === true) {
            this.correctGuess(newButtons)
        } else{
            this.incorrectGuess(newButtons)
        }
    }
    render() {
        return(
            <Wrapper>
                <Title score = {this.state.score} highScore = {this.state.highScore} />
                <GameButtons clickedButton = {this.clickEvent} />
            </Wrapper>
        )
    }
}

export default Game