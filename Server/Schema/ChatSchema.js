var mongoose = require("mongoose");
var schema = mongoose.Schema;
var userschema = new schema(
  {
    username: String,
    password: String,
    email: { type: String, unique: true },
    firstname: String,
    lastname: String,
    verified: Boolean,
    passtoken: Boolean
  },
  { collection: "SignUpDetails" }
);
module.exports = mongoose.model("SignUpDetails", userschema);
