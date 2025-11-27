var jwt = require('jsonwebtoken');
const secret_token="kqsd"
const users = [
    {
        name:"sudip",
        email:"sudip@gmail.com",
        age:22,
        password:"naruto",
        mob:9641506413,
        role:"admin"
    },
]


const signUp = (req,res)=>{
    const {name,email,age,password,mob}=req.body;
    if(name && email && age && password && mob){
        const isEmailPresent = users.find(e=>{
            return e.email===email;
        })
        if(!isEmailPresent){
            const role=req.body.role || "user";
            users.push({name,email,age,password,mob,role});
            return res.status(201).json({message:"user registered succesfully"});
        }else{
            return res.status(409).json({message:"user already present"});
        }
    }else{
        return res.status(400).json({message:"fill the all details"});
    }

}

const login = (req,res)=>{
   const {email,password}= req.body;
    if(email && password){
        const user = users.find(e=>{
            return e.email===email && e.password===password;
        })

        if(user){
            const token = jwt.sign({email: user.email, role: user.role}, secret_token,{expiresIn: '1h'});
            res.cookie('token', token, { maxAge: 3600000 }); // 1 hour
            return res.status(200).json({user, token, message:"logged in successfully"})
        }else{
             return res.status(404).json({message:"user not present"});
        }

    }else{
        return res.status(400).json({message:"fill the all details"});
    }

}

const allUsers = (req,res)=>{
    const token =  req.headers.authorization?.split(" ")[1];
    console.log(token);
    // console.log(req.cookie.token);
    
    
    if(!token){
        return res.status(401).json({message:"unauthorized"});
    }
    try{
        const decoded = jwt.verify(token,secret_token);
        if(decoded.role=="admin"){
        return res.status(200).json({users})
        }else{
            return res.status(403).json({message:"forbidden access"});
        }
    }catch(err){
        return res.status(400).json({message:"invalid token"});
    }
    
}


module.exports={signUp,login,allUsers}