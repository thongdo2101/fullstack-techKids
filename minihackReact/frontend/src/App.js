import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "./components/Title";
import CreateGame from "./components/CreateGame";
import BoardGame from "./components/BoardGame";

class App extends Component {
  state = {
    game: null
  };

  onCreateNewGame = (game) => {
    this.setState({
      game: game
    });
  };

  render() {
    return (
      <div className="container">
        <Title />
        {this.state.game === null ? <CreateGame onCreateNewGame={this.onCreateNewGame} /> : <BoardGame game={this.state.game}/>}
      </div>
    );
  }
}

export default App;
