import React, { Component } from "react";
import Round from "./Round";

class BoardGame extends Component {
  state = {
    players: this.props.players,
    rounds: [[0, 0, 0, 0]],
    scores: [0, 0, 0, 0],
    sumOfScores: 0
  };

  onChangeRoundScore = (scoreOfRound, index) => {
    var newRounds = this.state.rounds;
    newRounds[index] = scoreOfRound;
    this.setState({
      rounds: newRounds
    });
    console.log(this.state.rounds)
  }

  addRound = event => {
    event.preventDefault();
    var newRounds = this.state.rounds;
    newRounds.push([0, 0, 0, 0]);
    this.setState({
      rounds: newRounds
    });
  };

  render() {
    const playersRender = this.state.players.map((value, index) => (
      <th key={index}>{value}</th>
    ));

    const roundsRender = this.state.rounds.map(function(value, index) {
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
