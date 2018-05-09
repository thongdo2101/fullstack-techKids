import React, { Component } from "react";
import axios from "../axios";

class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: ["", "", "", ""]
    };

    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  _onCreateGame = () => {
    axios
      .post("/api/games", {
        players: this.state.players
      })
      .then(response => {
        console.log(response.data.data.players);
        this.props.onCreateNewGame(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  HandleChange(index, value) {
    let newPlayers = this.state.players;
    newPlayers[index] = value;
    this.setState({
      players: newPlayers
    });
  }

  HandleSubmit(event) {
    this._onCreateGame();
    event.preventDefault();
  }

  render() {
    const CreateGameButtonRender = (
      <button type="submit" className="btn">
        CREATE NEW GAME
      </button>
    );
    const inputs = this.state.players.map((player, index) => (
      <input
        key={index}
        type="text"
        className="form-control rounded mb-3"
        name={`player${index + 1}`}
        value={player}
        placeholder={`Player ${index + 1}.....`}
        onChange={event => this.HandleChange(index, event.target.value)}
      />
    ));

    return (
      <form
        className="form-group text-center mt-5"
        onSubmit={this.HandleSubmit}
      >
        {inputs}
        {CreateGameButtonRender}
      </form>
    );
  }
}

export default CreateGame;
