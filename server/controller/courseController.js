const courseModel = require("../models/courseModel");
const { toTitleCase, toUpperCase, toSentenceCase } = require("../config/functions")

class Course {

    //Get One Course Details
    async getCourse(req, res) {
        let { courseName } = req.query;

        if (!courseName) {
            return res.status(400).json({
                success: false,
                error: "Course Name Not Provided."
            });
        } else {
            try {
                let course = await courseModel.find({ name: { $regex: new RegExp(courseName, "i") } });

                if (course.length > 0) {
                    return res.status(200).json({
                        success: true,
                        course: course
                    });
                } else {
                    console.log(err);
                    return res.status(404).json({
                        success: false,
                        error: "Course Not Found."
                    });
                }
            } catch (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    error: "Internal Server Error: "
                });
            }
        }
    }

    //Get All Courses
    async getAllCourses(req, res) {
        try {
            const Courses = await courseModel.find().select('name class duration');
            res.status(200).json({
                success: true,
                courses: Courses
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                error: "Internal Server Error: "
            });
        }
    }

    //Delete One Course
    async deleteCourse(req, res) {
        const {courseId} = req.params;

        if (!courseId) {
            return res.status(400).json({
                success: false,
                error: "Course ID not provided.",
            });
        } else {
            try {
                let deletedCourse = await courseModel.findByIdAndDelete(courseId);

                if (deletedCourse) {
                    return res.status(200).json({
                        success: true,
                        message: "Course deleted.",
                    });
                } else {
                    console.log(err);
                    return res.status(404).json({
                        success: false,
                        message: "Course not found.",
                    });
                }
            } catch (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    error: "Internal Server Error: "
                });
            }
        }
    }

    //Add New Course
    async createCourse(req, res) {
        let { name, grade, discription, programObjective, structure, months, hours, note } = req.body;

        try {

            if (!name || !grade || !structure || (!months && !hours)) {
                return res.status(400).json({
                    success: false,
                    error: "Name, grade, structure, and either months or hours are required.",
                });
            }

            name = toTitleCase(name);
            grade = toUpperCase(grade);
            discription = toSentenceCase(discription);
            programObjective = toSentenceCase(programObjective);
            structure = toSentenceCase(structure);
            note = toSentenceCase(note);

            const duration = {
                months,
                hours,
            };

            const newCourse = new courseModel({
                name,
                grade,
                discription,
                programObjective,
                structure,
                duration,
                note
            });

            newCourse.save()
                .then((data) => {
                    return res.status(200).json({
                        success: true,
                        message: "New Course Added Successfully.",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(500).json({
                        success: false,
                        error: "Error Storing in Database: "
                    });
                });

        } catch (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                error: "Internal Server Error: "
            });
        }

    }

    //Edit Course Details
    async editCourse(req, res) {
        const { courseId, name, grade, description, programObjective, structure, months, hours, note } = req.body;

        try {
            if (!courseId || !name || !grade || !structure || (!months && !hours)) {
                return res.status(400).json({
                    success: false,
                    error: "Course ID, name, grade, structure, and either months or hours are required.",
                });
            }

            const updatedCourse = {
                name: toTitleCase(name),
                grade: toTitleCase(grade),
                description: toSentenceCase(description),
                programObjective: toSentenceCase(programObjective),
                structure: toSentenceCase(structure),
                duration: {
                    months,
                    hours,
                },
                note: toSentenceCase(note),
            };

            const result = await courseModel.findByIdAndUpdate(courseId, updatedCourse);
            if (!result) {
                console.log(err);
                return res.status(404).json({
                    success: false,
                    error: "Course not found.",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Course updated successfully.",
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                error: "Internal Server Error: "
            });
        }
    }

}

const CourseController = new Course();
module.exports = CourseController;
