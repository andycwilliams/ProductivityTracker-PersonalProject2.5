const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/info", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/info.html"));
});

router.get("/worksheet", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/worksheet.html"));
});

module.exports = router;
