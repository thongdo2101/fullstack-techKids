import React, { Component } from "react";

class Round extends Component {
  state = {
    roundId: this.props.roundId,
    scores: this.props.value,
    warningMess: ""
  };

  changeScores(input, index) {
    if (isNaN(input)) return;
    if (input === '') {
        input = "0";
    }
    var value = Number.parseInt(input);
    var newScores = this.state.scores;
    newScores[index] = value;
    var sum = newScores.reduce((a, b) => a + b, 0);
    if (sum !== 0) {
      this.props.onChangeRound(newScores, this.state.roundId);
      this.setState({
        scores: newScores,
        warningMess: `the scores of round ${this.state.roundId} is not valid`
      });
    } else {
      this.props.onChangeRound(newScores, this.state.roundId);
      this.setState({
        scores: newScores,
        warningMess: ""
      });
    }
  }

  render() {
    const roundNum = <th>Round {this.state.roundId}</th>;
    const scoresRender = this.state.scores.map((value, index) => (
      <td key={index}>
        <input
          type="text"
          className="form-control rounded change"
          placeholder="0"
          onChange={event => {
            this.changeScores(event.target.value, index);
          }}
        />
      </td>
    ));

    return (
      <tr>
        {roundNum}
        {scoresRender}
        <td>{this.state.warningMess}</td>
      </tr>
    );
  }
}

export default Round;
