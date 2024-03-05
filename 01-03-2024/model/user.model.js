const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true, 
    // set:(name) => name.toLowerCase() 
},
    age: { type: Number, required: true },
    email: {type: String, unique: true, required: true, 
        validate : {
            validator : (email) =>email.includes("@")
    }},
    password : {type:String,required:true}
});

const userModel = mongoose.model("user",userSchema);

module.exports=userModel;