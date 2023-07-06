const express = require("express");
const router = express.Router();
const usersController = require("../controller/userController");
const {isAdmin, verifyToken, isNotUser } = require("../middleware/auth")

//Sign Up New User 
router.post("/signup", usersController.postSignup);

//Sign In New User 
router.post("/signin", usersController.postSignIn);

//Get User
router.get("/:userId", usersController.getUser)

//Delete User
router.delete("/:userId", usersController.deleteUser)

module.exports = router;
