const express = require("express");
const {signIn, logIn} = require("../controller/user.controller.js");

const userRouter = express.Router();

userRouter.post("/signin", signIn);
userRouter.post("/logIn", logIn);

module.exports = userRouter;