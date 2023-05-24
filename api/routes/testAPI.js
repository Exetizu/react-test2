var express = require("express");
var router = express.Router();
var a = { value: ["X", null, null, null, null, null, null, null, null] };
router.post("/", function (req, res, next) {
   console.log("a");
   console.log(req);
   console.log("a");
   res.send(a);
});
module.exports = router;
