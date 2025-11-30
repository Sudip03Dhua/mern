const jwt = require('jsonwebtoken');
const secret_token="kqsd"
const roleAuth = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    // console.log(token);
    
    if(!token){
        return res.status(401).json({message:"unauthorized access"});
    }
    try {
        const decoded =  jwt.verify(token,secret_token)
        req.role=  decoded.role;
        next()
    } catch (error) {
        return res.status(401).json({message:"unauthorized access"});
    }

}

module.exports = roleAuth;