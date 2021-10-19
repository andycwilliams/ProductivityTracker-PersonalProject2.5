const router = require("express").Router();
const Task = require("../models/tasklist.js");

router.get("/", async (req, res) => {
  console.log(`Method ${req.method} received.`);
  const allTasks = await Task.findAll().catch((err) => {
    res.status(500).json("Cannot find tasks.");
  });
  res.status(200).json(allTasks);
  // console.log(allTasks);
});

router.post("/api/Task", ({ body }, res) => {
  Task.create(body)
    .then((taskdb) => {
      res.json(taskdb);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// router.post("/api/Task/bulk", ({ body }, res) => {
//   Task.insertMany(body)
//     .then((taskdb) => {
//       res.json(taskdb);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/Task", (req, res) => {
//   Task.find({})
//     .sort({ date: -1 })
//     .then((taskdb) => {
//       res.json(taskdb);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
