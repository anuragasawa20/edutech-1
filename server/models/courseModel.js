const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter course name."],
        },
        grade: {
            type: String,
            required: [true, "Please enter grade the course is meant for."],
        },
        discription: {
            type: String,
            required: false
        },
        programObjective: {
            type: String,
            required: false
        },
        structure: {
            type: String,
            required: [true, "Please provide the structure of course."],
        },
        duration: {
            months: {
                type: Number,
                required: false
            },
            hours: {
                type: Number,
                required: false
            }
        },
        note: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

const courseModel = mongoose.model("courses", courseSchema);
module.exports = courseModel;
