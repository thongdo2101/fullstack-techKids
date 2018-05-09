import React, { Component } from "react";
import Round from "./Round";
import axios from "../axios";

class BoardGame extends Component {
  state = {
    players: this.props.game.players,
    rounds: this.props.game.rounds,
    scores: [0, 0, 0, 0],
    sumOfScores: 0
  };


  _onNewRound = () => {
    axios
      .put(`/api/games/${this.props.game._id}/rounds`)
      .then(response => {
        this.setState({
          rounds: response.data.rounds,
        })
        // this.calScores();
      })
      .catch(err => {
        console.log(err);
      });
  };

  _onChangeRound = (scoreOfRound, index) => {
    var newRounds = this.state.rounds;
    newRounds[index] = scoreOfRound;
    console.log(this.state.rounds)
    console.log(scoreOfRound)
    console.log(newRounds)
    axios
      .put(`/api/games/${this.props.game._id}/rounds/${newRounds[index]._id}`, {
        rounds: newRounds
      })
      .then(response => {
        this.setState({
          rounds: newRounds,
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  calScores() {
    console.log('2')
    var nScores = this.state.scores;
    for (let i = 0; i < nScores.length; i++) {
      let sumCol = 0;
      for (let j = 0; j < this.state.rounds.length; j++) {
        const round = this.state.rounds[j];
        sumCol += round[i];
      }
      nScores[i] = sumCol;
    }
    this.setState({
      scores: nScores,
      sumOfScores: nScores.reduce((a, b) => a + b, 0)
    });

  }

  render() {
    const playersRender = this.props.game.players.map((value, index) => (
      <th key={index}>{value}</th>
    ));
    const roundsRender = this.state.rounds.map((value, index) => {
      return (
        <Round
          round={value.scores}
          key={index}
          indexOfRound={index}
          onChangeRound={this._onChangeRound}
        />
      );
    });

    const scoresRender = this.state.scores.map((value, index) => (
      <th key={index}>{value}</th>
    ));
    const addRoundButtonRender = (
      <div className="text-center">
        <button type="button" className="btn" onClick={this._onNewRound}>
          ADD ROUND
        </button>
      </div>
    );

    return (
      <div>
        <table className="table table-striped w100 text-left">
          <thead>
            <tr>
              <th />
              {playersRender}
            </tr>
            <tr className="head">
              <th>Sum of Score({this.state.sumOfScores})</th>
              {scoresRender}
              <th />
            </tr>
          </thead>
          <tbody>{roundsRender}</tbody>
        </table>
        {addRoundButtonRender}
      </div>
    );
  }
}

export default BoardGame;
