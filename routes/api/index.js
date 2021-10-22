const router = require("express").Router();
const tasks = require("./taskRoutes");

router.use("/tasks", tasks);

module.exports = router;
