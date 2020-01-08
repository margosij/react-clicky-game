import React, {Component} from "react";
import buttons from "../../buttons.json";
import GameButtons from "../GameButtons"
import Title from "../Title"
import Wrapper from "../Wrapper"
class Game extends Component{
    state = {
        buttons,
        score: 0,
        highScore: 0,
        message: 'Click any image to start!'
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
        this.setState({
            buttons: this.shuffleCards(newButtons),
            score: newScore,
            highScore: newHighScore,
            message: 'That is correct!'
        })
    }
    incorrectGuess = buttons => {
        this.setState({
            buttons: this.resetGame(buttons),
            score: 0,
            message: 'That is not correct! Press any image to try again!'
        })
    }
    resetGame = buttons => {
        const resetGame = buttons.map(item => ({ ...item, clicked: false}))
        return this.shuffleCards(resetGame);
    }
    clickEvent = event => {
        const id = parseInt(event.target.id);
        let guessedCorrectly = false;
        const newButtons = this.state.buttons.map(newItem => {
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return newItem
        });
        this.shuffleCards(newButtons);
        this.setState({ buttons: newButtons });
        if (guessedCorrectly === true) {
            this.correctGuess(newButtons)
        } else{
            this.incorrectGuess(newButtons)
        }
    }
    render() {
        return(
            <Wrapper>
                <Title score={this.state.score} highScore={this.state.highScore} message={this.state.message}/>
                <GameButtons onButtonClick={this.clickEvent} buttons={this.state.buttons} />
            </Wrapper>
        )
    }
}

export default Game