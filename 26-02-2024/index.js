const express = require("express");
const app = express();
const port = 8000;

const router = require("./tasks");
app.use("/tasks",router);



app.listen(port, () => {console.log("server is runnimg at port :"+port)});