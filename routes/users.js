var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
   res.send("respond with a resource");
});

router.get("/100", function (req, res, next) {
   res.send("respond user 100");
});

module.exports = router;
