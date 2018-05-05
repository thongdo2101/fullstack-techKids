import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import BoardGame from "./components/BoardGame";
// import fileController from "./fileController";

// const Game = props => {
//   var gameId = parseInt(props.match.params.gameId);
//   fileController
//     .getGame(gameId)
//     .then(data => {
//       if (!data) {
//         console.log(data)
//         return <BoardGame game={data} />;
//       } else {
//         console.log('1');
//         return <App />;
//       }
//     })
//     .catch(err => {
//       console.log(err);
//     });
//     console.log('2');
//   return <App />;
// };

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route path="/games/:gameId" component={Game} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
