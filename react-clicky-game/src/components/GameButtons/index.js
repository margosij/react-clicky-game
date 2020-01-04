import React from "react";
import "./style.css";
import buttons from "../../buttons.json"

const GameButton = (props) => {
  return (
  <div className="card">
    <button onClick = {props.changeScore} className="img-container">
      <img alt={props.id} src={props.image} />
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
      {this.state.buttons.map(button => (
        <GameButton
        id={button.id}
        image={button.image}
          />
      ))}
      </>
    )
  }    
}

export default GameButtons;