const { Schema, model } = require("mongoose");

const tasklistSchema = new Schema({
  // title: {
  //   type: String,
  //   trim: true,
  //   required: "Enter a task title"
  // },
  task: {
    type: Number,
    required: "Enter a task",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Task = model("Task", tasklistSchema);

module.exports = Task;

// ----------------------------------------------------------------

// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const tasklistSchema = new Schema({
//   // title: {
//   //   type: String,
//   //   trim: true,
//   //   required: "Enter a task title"
//   // },
//   task: {
//     type: Number,
//     required: "Enter a task",
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Task = mongoose.model("Task", tasklistSchema);

// module.exports = Task;
