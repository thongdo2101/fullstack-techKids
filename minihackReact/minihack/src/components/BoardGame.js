import React, { Component } from "react";

class BoardGame extends Component {

  state = {
    game: this.props.game
  };

  render() {
    return (
      <div>
        <table className="table table-striped w100 text-left">
          <thead>
            <tr>
              <th />
              <th>{this.state.game.gameId}</th>
              {/* <th>{this.state.players[1]}</th>
              <th>{this.state.players[2]}</th>
              <th>{this.state.players[3]}</th>               */}
            </tr>
            <tr className="head">
              <th>Sum of Score(0)</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Round</th>
              <td>
                <input type="text" className="form-control rounded change" />
              </td>
              <td>
                <input type="text" className="form-control rounded change" />
              </td>
              <td>
                <input type="text" className="form-control rounded change" />
              </td>
              <td>
                <input type="text" className="form-control rounded change" />
              </td>
            </tr>
          </tbody>
        </table>
        <form className="text-center">
          <button type="submit" className="btn">
            ADD ROUND
          </button>
        </form>
      </div>
    );
  }
}

export default BoardGame;
