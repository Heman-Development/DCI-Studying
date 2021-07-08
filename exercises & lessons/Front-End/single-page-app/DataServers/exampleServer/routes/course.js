var express = require("express");
var router = express.Router();
let fs = require("fs");

router.post("/add", function (req, res, next) {
  if (req.body) {
    console.log(req.body);
    fs.appendFileSync(
      "./data.txt",
      `Course Name: ${req.body.courseName}; Start Time:${req.body.courseStart};\n`
    );
    res.send({
      message: "I got the new course data and add it to data file.",
      status: 200,
    });
  }
});

module.exports = router;