const mongoose = require("mongoose");

const { Schema } = mongoose;

const pollModel = new Schema({
  id: { type: String },
  question: { type: String },
  options: [{ pollOption: { type: String }, votes: { type: Number } }],
});

module.exports = mongoose.model("Poll", pollModel);
