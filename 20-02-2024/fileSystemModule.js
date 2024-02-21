const fs = require("fs");

// function to write into the file...

function writeInto(path, content) {
    fs.writeFile(path, content, () => { });
    console.log("content written to the file");
}

//function to read data from file.....

function readFrom(path) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log("error occoured");

        } else {
            console.log(data)
        }


    })
}


// function to create directory....

function createDirectory(name) {
    fs.mkdir(name, () => { },(err) =>{
        if (err){
            console.log("Error occoured");}

        else{
            console.log("directory created");
        }

        
    })

}


// function to list all files in the directory....

function listFiles(directory_name) {
    fs.readdir(directory_name, (err, files) => {
        if(!err){
        files.forEach(file => {
            console.log(file);

        })}
        else{console.log('Unable to scan directory: ' + err);} 
    })
}


module.exports = {
    writeInto,
    readFrom,
    createDirectory,
    listFiles,
};