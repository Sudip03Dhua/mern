import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContetxt from "../context/Mycontext";


const Login = () => {
  const {setToken} = useContext(MyContetxt)
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [user, setUser] = useState(null); 
    const navigate = useNavigate(); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://congenial-carnival-wrr4gx7667gwfp6-3000.app.github.dev/reg/login", { email, password })
            if(response){
                console.log("User logged in successfully", response.data.user);
                localStorage.setItem("token", response.data.token);
                setToken(response.data.token);
                setUser(response.data.user);
                navigate("/home"); // Redirect to home or dashboard after login
                
            }else{
                console.log("Login failed");
            }
        
        } catch (error) {
            console.log(error);
            
        }

    }

  return (
    <div>
      <h1>Login Page Come Fast</h1>
      <form>
        <label>
          email:
          <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" />
        </label>
        <br />
        <button onClick={handleSubmit} type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;       