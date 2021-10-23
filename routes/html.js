const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/info", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/info.html"));
});

router.get("/worksheet", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/worksheet.html"));
});

module.exports = router;
