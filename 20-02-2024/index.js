

const {writeInto,readFrom,createDirectory,listFiles,} = require("./fileSystemModule");



writeInto("test.txt","hello my name is rakshit and I am a developer. \nI love to code.");

readFrom("test.txt");

createDirectory("newFolder");

listFiles("./");
