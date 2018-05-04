import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "./components/Title";
import CreateGame from "./components/CreateGame";
import BoardGame from "./components/BoardGame";
import fileController from './fileController';

class App extends Component {
  state = {
    initialization: false,
    players: ['','','','']
  };

  componentDidMount() {
    
  }

  onCreateNewGame = (players) => {
    this.setState({
      initialization: true,
      players: players
    });
    fileController.getGame(1)
    .then(game => {
      console.log(game);
    })
    .catch(err => {
      console.log(err);
    })
  };

  render() {
    return (
      <div className="container">
        <Title />
        {!this.state.initialization ? <CreateGame onCreateNewGame={this.onCreateNewGame} /> : <BoardGame players={this.state.players}/>}
      </div>
    );
  }
}

export default App;
