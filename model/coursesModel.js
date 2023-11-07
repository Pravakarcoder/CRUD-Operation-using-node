const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title of course"],
    },
    content: {
      type: String,
      require: true,
    },
    videos: {
      type: String,
      require: true,
    },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Courses", CourseSchema);
