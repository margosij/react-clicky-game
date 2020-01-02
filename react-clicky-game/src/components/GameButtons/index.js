import React from "react";
import "./style.css";

//create an on click function to handle each click
class App extends React.Component{
  state = {
    buttons
  }

//will need to remove the "function" when uncommenting everything else
  GameButtons(props) {

    <div className="card">
      <button onClick = {props.changeScore} className="img-container">
        <img alt={props.id} src={props.image} />
      </button>
    </div>
    
  }
  render () {
    return(
      {this.state.buttons.map(button => (
        <this.GameButtons
        id={button.id}
          image={button.image}
          />
      ))}
    )}
    
}

export default GameButtons;