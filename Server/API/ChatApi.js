var schema = require("../Schema/ChatSchema.js");
module.exports = {
  createnewuser: function(data, data1) {
    return new Promise((resolve, reject) => {
      schema.create(
        {
          username: data.username,
          password: data.password,
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
          verified: false,
          passtoken: false
        },
        function(err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }
};
