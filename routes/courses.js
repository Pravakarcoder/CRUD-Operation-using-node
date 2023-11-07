const express = require("express");
const Course = require("../model/coursesModel");
const { json } = require("body-parser");
const router = express.Router();

//creating the routers

//get all the courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json(error);
  }
});

//get single course

router.get("/:id", async (req, res) => {
  try {
    const singleCourse = await Course.findById(req.params.id);

    res.json(singleCourse);
  } catch (error) {
    json(error);
  }
});

//create course

router.post("/", async (req, res) => {
  const createCourse = await Course.create(req.body);
  res.json(createCourse);
});

//Delete course by Id

router.delete("/:id", async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.params.id });
    res.status(200).json({
      Message: "Deleted",
    });
  } catch (error) {
    json(error);
  }
});

//Update course by Id
router.put("/:id", async (req, res) => {
  try {
    const UpdateCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(UpdateCourse);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
