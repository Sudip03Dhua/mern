const express =  require("express");
const { signUp, login, allUsers } = require("../controller/registerController");

const router = express.Router()

router.post("/signup",signUp);
router.post("/login",login);
router.get("/allUsers",allUsers);


module.exports=router