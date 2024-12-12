const mongoose = require("mongoose")


const SignupSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
});

const SignupModel=mongoose.model("Signup", SignupSchema)


module.exports=SignupModel;