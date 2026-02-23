const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    require: [true, "Please provide company name"],
    maxlength: 50,
  },
  position: {
    type: String,
    require: [true, "Please provide position"],
    maxlength: 100,
  },
});
