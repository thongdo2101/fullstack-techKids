var games = require('./games.json');
var getGame = (gameId) => new Promise((resolve, reject) => {
    games.forEach(game => {
        if (gameId === game.gameId) {
            resolve(game);
        }
    });
    reject(null);
});

module.exports = {
    getGame
} 