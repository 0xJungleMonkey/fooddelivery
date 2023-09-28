const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  }, // String is shorthand for {type: String}
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: String,

  data: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("user", userSchema);
