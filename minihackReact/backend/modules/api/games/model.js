const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roundSchema = new Schema(
  {
    scores: {
      type: [],
      default: [0, 0, 0, 0]
    }
  },
  {
    timestamps: { createdAt: "createdAt" }
  }
);
const gameSchema = new Schema(
  {
    players: {
      type: [],
      require: true
    },
    rounds: {
      type: [roundSchema],
      default: []
    }
  },
  {
    timestamps: { createdAt: "createdAt" }
  }
);

module.exports = mongoose.model("games", gameSchema);
