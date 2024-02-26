 
 const fs = require("fs");

 
 const getTasks = ()=>{
    const data = fs.readFileSync('./task.json','utf-8');
    return JSON.parse(data);

 }

 const writeTasks = (data)=>{
     fs.writeFileSync('./task.json',JSON.stringify(data));
}
 
module.exports = {getTasks,writeTasks};
