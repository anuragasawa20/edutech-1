const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name."],
            maxlength: 32,
        },
        email: {
            type: String,
            required: [true, "Please enter your email."],
            index: { unique: true },
            validate: validator.isEmail
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        grade: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: [true, "Please enter your password."],
            minlength: [6, "Password must be at least 6 characters"],
        },
        userRole: {
            type: Number,
            default: 0
        },
        ResetPasswordToken: String,
        ResetPasswordEcpire: String
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
            },
        },
    },
    { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
