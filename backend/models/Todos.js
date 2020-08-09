const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let Todo = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "todos",
  }
);

module.exports = mongoose.model("Todo", Todo);
