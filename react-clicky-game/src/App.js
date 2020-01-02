import React, { Component } from 'react';
import GameButtons from './components/GameButtons';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import buttons from './buttons.json'
import Scoreboard from './components/ScoreBoard';

// class App extends Component{
//   state = {
//     buttons
//   }
  // render() {
  function App() {
    return (
      <Wrapper>
        <Title>Button Click Game<Scoreboard></Scoreboard></Title>
        {/* {this.state.buttons.map(button => ( */}
          <GameButtons
          // id={button.id}
          // image={button.image}
          />
        {/* ))} */}
      </Wrapper>
    )
  }
  // }
// }

export default App;
