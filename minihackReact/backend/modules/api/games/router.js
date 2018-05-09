const express = require("express");

const router = express.Router();

const gameController = require("./controller");

router.post("/", (req, res) => {
  var players = [];
  if (req.body.players) {
    players = req.body.players;
  } else {
    players.push(req.body.player1);
    players.push(req.body.player2);
    players.push(req.body.player3);
    players.push(req.body.player4);
  }
  gameController
    .createGame(players)
    .then(data => res.send(data))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

router.get("/:gameId", (req, res) => {
  gameController
    .getGame(req.params.gameId)
    .then(data => res.send(data))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

router.put("/:gameId/rounds", (req, res) => {
  gameController
    .createRound(req.params.gameId)
    .then(data => {
      console.log(data)
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

router.put("/:gameId/rounds/:roundId", (req, res) => {
  gameController
    .editRound(req.params.gameId, req.params.roundId, req.body)
    .then(data => res.send(data))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
