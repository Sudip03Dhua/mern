const express = require("express");
const router = require("./router/registerRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());    
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());

app.use("/reg",router)

app.get("/",(req,res)=>{

    res.send("hello")
})


app.listen(3000,"0.0.0.0",()=>{
    console.log("server is running on port 3000");
})