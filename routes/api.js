const router = require("express").Router();
const Task = require("../models/tasklist.js");

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
