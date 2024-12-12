const express =require("express")
const {Signups,Login} = require("../controllers/signupController")

const router = express.Router();

router.post("/signup", Signups);
router.post("/log", Login);

module.exports=router;