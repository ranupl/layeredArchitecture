const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const NameDB = new mongoose.model("Name", nameSchema);

module.exports = { NameDB };