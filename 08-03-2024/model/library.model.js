const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({

    title :{type:String, required : true},

    author:{ type: String ,required:true },  

    available :{type: Boolean , default: true} ,


});

const bookModel = mongoose.model("Book",bookSchema);
module.exports= bookModel;