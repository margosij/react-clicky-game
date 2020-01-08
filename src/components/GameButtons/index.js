import React from "react";
import "./style.css";
import buttons from "../../buttons.json"

const GameButton = (props) => {
  return (
  <div className="card">
    <button id={props.id} onClick={props.onButtonClick} className="img-container">
      <img id={props.id} alt={props.id} src={props.image} />
    </button>
  </div>
  )
}

class GameButtons extends React.Component{
  state = {
    buttons
  }

  render () {
    return(
      <>
      {this.props.buttons.map(button => (
        <GameButton
        key={button.id}
        id={button.id}
        image={button.image}
        onButtonClick={this.props.onButtonClick}
          />
      ))}
      </>
    )
  }
}

export default GameButtons;