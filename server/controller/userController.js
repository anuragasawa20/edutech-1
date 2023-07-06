const userModel = require("../models/userModel");
const { toTitleCase, validateEmail, toUpperCase } = require("../config/functions");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
require('dotenv').config();

class User {

    async postSignup(req, res) {
        let { name, email, phoneNumber, grade, password } = req.body;
        let error = {};
        if (!name || !email || !password || !phoneNumber) {
            error = {
                ...error,
                name: "Field must not be empty",
                email: "Field must not be empty",
                password: "Field must not be empty",
                phoneNumber: "Field must not be empty"
            };
            return res.status(400).json({ error });
        }
        if (validateEmail(email)) {
            name = toTitleCase(name);
            if ((password.length > 255) | (password.length < 6)) {
                error = {
                    ...error,
                    password: "Password must be 6 characters",
                    name: "",
                    email: "",
                };
                return res.status(400).json({ error });
            } else {
                try {
                    password = bcrypt.hashSync(password, 10);
                    let data = await userModel.findOne({ email: email });
                    if (data) {
                        error = {
                            ...error,
                            password: "",
                            name: "",
                            email: "Email already exists",
                        };
                        return res.status(400).json({ error });
                    }
                    data = await userModel.findOne({ phoneNumber: phoneNumber });
                    if (data) {
                        error = {
                            ...error,
                            password: "",
                            name: "",
                            email: "",
                            phoneNumber: "Number already exists",
                        };
                        return res.status(400).json({ error });
                    } else {
                        grade = toUpperCase(grade);
                        let newUser = new userModel({
                            name,
                            email,
                            phoneNumber,
                            grade,
                            password,
                        });
                        newUser.save().then((data) => {

                            const { password, __v, ...user } = data._doc;
                            const token = jwt.sign({ user }, JWT_SECRET);

                            return res.status(200).json({
                                success: true,
                                token: token,
                                user: user
                            });
                        }).catch((err) => {
                            console.log(err);
                        });
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            error = {
                ...error,
                password: "",
                name: "",
                email: "Email is not valid",
            };
            return res.json({ error });
        }
    }

    async postSignIn(req, res) {
        const { identifier, userPassword } = req.body; 

        try {
            const user = await userModel.findOne({
                $or: [
                    { phoneNumber: identifier },
                    { email: identifier.toLowerCase() },
                ],
            });

            if (!user) {
                return res.status(404).json({ message: "User not found." });
            }

            const isPasswordValid = await bcrypt.compare(userPassword, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid password." });
            }

            const { password, __v, ...data } = user._doc;
            const token = jwt.sign({ data }, JWT_SECRET);

            res.status(200).json({ token, data });
        } catch (error) {
            console.error("Sign-in error:", error);
            res.status(500).json({ message: "An error occurred while signing in." });
        }
    }

    async getUser(req, res) {
        let { userId } = req.params;

        if (!userId) {
            return res.status(400).json({
                success: false,
                error: "UserId Not Provided."
            });
        } else {
            try {
                let User = await userModel.findById(userId)
                if (User) {
                    return res.status(200).json({
                        success: true,
                        user: User
                    });
                } else {
                    console.log(err);
                    return res.status(404).json({
                        success: false,
                        error: "User Not Found."
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

    async deleteUser(req, res) {
        const { userId } = req.params;

        try {
            const deletedUser = await userModel.findOneAndDelete(userId);

            if (deletedUser) {
                return res.status(200).json({
                    success: true,
                    message: "User deleted.",
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: "User not Found.",
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: "Internal Server Error: "
            });
        }
    }

}

const usersController = new User();
module.exports = usersController;
