const express =  require("express");
const { signUp, login, allUsers, deleteUser, updateUser, uploadFile, downloadFile } = require("../controller/registerController");
const roleAuth = require("../middleware/roleAuth");

const router = express.Router()
const multer = require('multer');
const path = require("path");

router.post("/signup",signUp);
router.post("/login",login);
router.get("/allUsers",roleAuth,allUsers);
router.delete("/delete",roleAuth,deleteUser);
router.put("/update",roleAuth,updateUser);


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname);
    }
})

const upload = multer({storage:storage});

router.post("/upload",upload.single("file"),uploadFile)
router.get("/uploads/:filename",downloadFile)

module.exports=router