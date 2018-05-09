import React, { Component } from "react";

class Round extends Component {
  state = {
    indexOfRound: this.props.indexOfRound,
    round: this.props.round,
    warningMess: ""
  };



  changeScores(input, index) {
    if (isNaN(input)) return;
    if (input === '') {
        input = "0";
    }
    var value = Number.parseInt(input);
    var newRound = this.state.round;
    newRound[index] = value;
    var sum = newRound.reduce((a, b) => a + b, 0);
    if (sum !== 0) {
      this.props.onChangeRound(newRound, this.state.indexOfRound);
      this.setState({
        round: newRound,
        warningMess: `the scores of round ${this.state.indexOfRound} is not valid`
      });
    } else {
      this.props.onChangeRound(newRound, this.state.indexOfRound);
      this.setState({
        round: newRound,
        warningMess: ""
      });
    }
  }

  render() {
    const roundNum = <th>Round {this.state.indexOfRound}</th>;
    const roundRender = this.state.round.map((value, index) => (
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
        {roundRender}
        <td>{this.state.warningMess}</td>
      </tr>
    );
  }
}

export default Round;
