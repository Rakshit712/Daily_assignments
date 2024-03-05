const mongoose = require("mongoose");
 
const bookSchema = mongoose.Schema({
    title: { type: String, required: true, 
        // set:(name) => name.toLowerCase() 
    },
    author : { type: String,  required: true },

    genre :{ type : String},

    available :{type: Boolean , default: true} ,

    discription :{type: String, maxLength: 1024}}
)
const bookModel = mongoose.model("Book",bookSchema);
module.exports= bookModel;
