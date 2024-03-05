const userModel = require("../model/user.model.js")

async function signIn (req, res) {
    const user = req.body;
    try {
        // const newUser = await userModel.create(user);
        const existingUser = await userModel.findOne({ email: user.email });

        if (!existingUser) {

        const newUser = new  userModel(user);   
        await newUser.save();
        
        res.status(201).json(newUser.toJSON());}
        else{res.status(409).send('Email already in use')};

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }  

}

async function logIn(req,res){
    const user = req.body;
    
    try {
        const existingUser = await userModel.findOne({ email: user.email });
        if (!existingUser) {
            return res.status(401).json({ message: 'No user found with this email, Sign up please'});
        
        }
        const match = await userModel.findOne({ password: user.password })

        if(match){
            res.status(200).send({message: "login successful" })}
            else{res.status(401).json({message:"Invalid Password!"})}
        }
    catch (e) {

        console.log(e);
        res.status(500).send('Internal server error');
    }


}

module.exports = {signIn, logIn};