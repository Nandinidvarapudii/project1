const express = require("express");
const cors = require("cors")
const UserRoute =require("../connection/Routes/userRoutes")
const mongoose  = require("mongoose");

const app = express();

mongoose
.connect("mongodb://localhost:27017")
.then(()=> console.log("mongodb connected successfully"))
.catch((error)=> console.log(error))

app.use(express.json());


const coreOptions={
    origin:["http://localhost:5173","http://localhost:5174"],
    methods:["POST","GET"],
    allowedHeaders:["content-Type","Authorization"]
}

app.use(cors(coreOptions));

app.use("/user",UserRoute)

app.listen(3000,()=>{
    console.log("server is running")
})