const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
const {isAdmin, verifyToken } = require("../middleware/auth")

//Create New Course
router.post("/newcourse", courseController.createCourse);

//Edit Course
router.post("/editcourse", courseController.editCourse);

//Get All Courses
router.get("/allcourses", courseController.getAllCourses);

//Get One Course
router.get("/getcourse", courseController.getCourse);

//Delete Course
router.delete("/:courseId", courseController.deleteCourse);

module.exports = router;
