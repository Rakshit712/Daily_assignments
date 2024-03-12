const express = require("express");
const server = express();
const port =8000;

const cors = require( "cors" );
server.use( cors() );
 server.use(express.json());

const path  = require("path");
server.use(express.static(path.join(__dirname,"static")));


const route = require("./router/router.js")


const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mydb";

server.use("/book",route)


mongoose.connect(url).then(()=>{console.log("Connected to Database")
}).catch((err)=>{
    console.log("error connecting to Database",err);

})


server.listen(port, () => {
    console.log(`Server is running on port ${port}`)});