const express = require('express');
const server = express();

const port = 8000;

const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/mydb";

const userRouter = require("./router/user.router");

const libRouter = require("./router/libreary.router.js")

server.use(express.json());

server.use("/auth", userRouter);

server.use("/book", libRouter);

mongoose.connect(url).then(()=>{console.log("Connected to Database")
}).catch((err)=>{
    console.log("error connecting to Database",err);

})


server.listen(port, () => {
    console.log(`Server is running on port ${port}`)});