var express = require("express");
var router = express.Router();
var userapi = require("../API/ChatApi.js");
router.post("/", async function(req, res) {
  try {
    console.log("Enter in register");
    console.log(req.body);
    let resultfromapi = await userapi.createnewuser(req.body, req.file);
    let user = await userapi.finduser1(req.body.email);
    sendsotps = await userotp.sendsotps(
      req.body.email,
      user[0]._id,
      "emailverified"
    );

    res.send({ data: "Registration Successfull and Verify your Email" });

    rebody = req.body;
  } catch (err) {
    res.send({ data: "User Already Registered" });
  }
});
module.exports = router;
