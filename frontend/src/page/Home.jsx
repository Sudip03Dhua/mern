import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState([{}]);
    const getAllUsers  = async () => {
        try {
            const response = await axios.get("https://congenial-carnival-wrr4gx7667gwfp6-3000.app.github.dev/reg/allUsers",
                {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}
        );
            if(response){
                console.log(response.data);
                setData(response.data.users)
            }else{
                console.log("Failed to fetch users");
            }
        }catch(error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAllUsers();
    },[])
  return (
    <div>
      <h1>Home Page</h1>
        {data&&data?.map(user=>{
            return(
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                    <h3>{user.age}</h3>
                    <h4>{user.mob}</h4>
                    <h4>{user.role}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default Home