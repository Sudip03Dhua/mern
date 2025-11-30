const express =  require("express");
const { signUp, login, allUsers, deleteUser, updateUser } = require("../controller/registerController");
const roleAuth = require("../middleware/roleAuth");

const router = express.Router()

router.post("/signup",signUp);
router.post("/login",login);
router.get("/allUsers",roleAuth,allUsers);
router.delete("/delete",roleAuth,deleteUser);
router.put("/update",roleAuth,updateUser);


module.exports=router