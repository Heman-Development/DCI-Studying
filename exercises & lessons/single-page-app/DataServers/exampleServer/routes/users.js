var express = require("express");
var router = express.Router();
let fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", function (req, res, next) {
  if (req.body) {
    console.log(req.body);
    fs.appendFileSync(
      "./data.txt",
      `FirstName: ${req.body.fname}; LastName:${req.body.lname};\n`
    );
    res.send({
      message: "I got your user-data and I will add them to db.",
      status: 200,
    });
  }
});

module.exports = router;
