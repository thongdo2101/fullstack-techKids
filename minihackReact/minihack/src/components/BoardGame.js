import React, { Component } from "react";
import Round from "./Round";

class BoardGame extends Component {
  state = {
    players: this.props.players,
    rounds: [[0, 0, 0, 0]],
    scores: [0, 0, 0, 0],
    sumOfScores: 0
  };

  addRound = event => {
    event.preventDefault();
    var newRounds = this.state.rounds;
    newRounds.push([0, 0, 0, 0]);
    this.setState({
      rounds: newRounds
    });
  };

  calScores() {
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

  onChangeRoundScore = (scoreOfRound, index) => {
    var newRounds = this.state.rounds;
    newRounds[index] = scoreOfRound;
    this.calScores();
    this.setState({
      rounds: newRounds
    });
  };
  render() {
    const playersRender = this.state.players.map((value, index) => (
      <th key={index}>{value}</th>
    ));
    const roundsRender = this.state.rounds.map((value, index) => {
      return (
        <Round
          value={value}
          key={index}
          roundId={index}
          onChangeRound={this.onChangeRoundScore}
        />
      );
    });

    const scoresRender = this.state.scores.map((value, index) => (
      <th key={index}>{value}</th>
    ));
    const addRoundButtonRender = (
      <div className="text-center">
        <button type="button" className="btn" onClick={this.addRound}>
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
