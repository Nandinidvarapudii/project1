const Signup = require ("../model/Signup")
const bcrypt = require("bcrypt")
const jwt =  require("jsonwebtoken")

const secret = "nandu"

const Signups = async(req, res)=> {
    const{name,email,password}=req.body;
    try{
        const sign= await Signup.findOne({email:email});
        const hashpassword = await bcrypt.hash(password,10)
        if(sign){
            res.status(400).json({message:"User alredy exists"})
        }
        else{
            const user =await Signup.create({
                name,
                email,
                password: hashpassword,
            })
            if(user){
                res.status(200).json({message:"User register succesfully"})
                console.log("Registration success")
            }
            else{
                res.status(400).json({message:"Error while registering"})
            }
        }
    } catch (error) {
        console.log("error")
    }
};

const Login =async (req, res)=>{
    const {email,password}= req.body;
     try{
        const log = await Signup.findOne({email:email});
        
        if(!log || !(await bcrypt.compare(password,log.password)))
            {
          res.status(400).json({message: "user invalied"})
           console.log("login invalied")
        }
        else{
             const token = await jwt.sign({userId:log._id}, secret,{expiresIn:"30h"});
             res.status(200).json({message:"user login succesfull",token}) 
            console.log("login successfully")      
    }
    
} 
    catch(error){
        console.log(error);
     }

};
module.exports={Signups,Login}