import React, { useState } from 'react';
import axios from 'axios';
const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(''); 
    const [mobile, setMobile] = useState('');
    const [role, setRole] = useState('user');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle signup logic here
        // const userData = { name, email, password, age, mob: mobile, role };
        try {
            const response = await axios.post("https://congenial-carnival-wrr4gx7667gwfp6-3000.app.github.dev/reg/signup",  { name, email, password, age, mob: mobile, role })
            if(response){
                console.log("User registered successfully", response.data);
            }else{
                console.log("Registration failed");
            }
        } catch (error) {
            console.log(error);   
        }
    }

  return (
    <div>
      <h1>Signup Page Come Fast</h1>
      <form>
        <label>
          Username:
          <input type="text" onChange={(e)=>setName(e.target.value)} name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" />
        </label>
        <br />
         <label>
          Age:
          <input type="text" onChange={(e)=>setAge(e.target.value)} name="age" />
        </label>
        <br />
         <label>
          Mobile:
          <input type="text" onChange={(e)=>setMobile(e.target.value)} name="mobile" />
        </label>
        <br />
        <label>
          Role:
          <input type="text" onChange={(e)=>setRole(e.target.value)} name="role" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" />
        </label>
        <br />
        <button onClick={handleSubmit} type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;