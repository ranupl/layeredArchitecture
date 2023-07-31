const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  language: {
    type: String,
  },
  views: {
    type: Number,
  },
  likes: {
    type: Number,
  },
});

const MovieDB = new mongoose.model("Movie", movieSchema);

module.exports = { MovieDB };
