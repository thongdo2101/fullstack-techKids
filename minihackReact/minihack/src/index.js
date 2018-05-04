import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import BoardGame from "./components/BoardGame";
import fileController from "./fileController";

const Game = props => {
  var gameId = parseInt(props.match.params.gameId);
  console.log(gameId);
  var game = fileController
    .getGame(gameId)
    .then(data => {
      game = data;
    })
    .catch(err => {
      console.log(err);
    });
  return (
    <div>
      <table className="table table-striped w100 text-left">
        <thead>
          <tr>
            <th>{game.gameId}</th>
            <th>{game.players[1]}</th>
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
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/games/:gameId" component={Game} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
