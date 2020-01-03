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

//create an on click function to handle each click
class GameButtons extends React.Component{
  state = {
    buttons
  }

//will need to remove the "function" when uncommenting everything else
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