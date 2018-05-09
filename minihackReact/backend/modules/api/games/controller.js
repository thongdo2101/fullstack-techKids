
const gamesModel = require("./model");

const createGame = players =>
  new Promise((resolve, reject) => {
    gamesModel
      .create({
        players
      })
      .then(data =>
        resolve({
          data: data
        })
      )
      .catch(err => reject(err));
  });

const getGame = gameId =>
  new Promise((resolve, reject) => {
    gamesModel
      .findOne()
      .where({
        _id: gameId
      })
      .exec()
      .then(data => {
        resolve(data);
      })
      .catch(err => reject(err));
  });

const createRound = gameId =>
  new Promise((resolve, reject) => {
    gamesModel
      .findOneAndUpdate(
        { _id: gameId },
        { $push: { rounds: { scores: [0, 0, 0, 0] } } },
        
      )
      .lean(false)
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const editRound = (gameId,roundId, rounds) =>
  new Promise((resolve, reject) => {
    gamesModel
      .findOneAndUpdate({_id:gameId}, {rounds:rounds})
      .lean(false)
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

module.exports = {
  createGame,
  getGame,
  createRound,
  editRound
};
