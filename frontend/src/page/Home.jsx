import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MyContetxt from "../context/Mycontext";
import { Link } from "react-router-dom";

const Home = () => {
    const {token} = useContext(MyContetxt)
    const [data, setData] = useState([{}]);
    const getAllUsers  = async () => {
        try {
            const response = await axios.get("https://congenial-carnival-wrr4gx7667gwfp6-3000.app.github.dev/reg/allUsers",
                {headers:{Authorization:`Bearer ${token}`}}
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
    
    const [isDelete, setIsDelete] = useState(false);
    const handleDelete = async(email)=>{
        try {
            console.log(email);
            
            const data =  await axios.delete("https://congenial-carnival-wrr4gx7667gwfp6-3000.app.github.dev/reg/delete",
                {headers:{Authorization:`Bearer ${token}`},
                data:{email}
                 
            }
            )
            if(data?.data?.users){
                setIsDelete(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const [isUpdate, setIsUpdate] = useState(false);
    const handleUpdate = (email)=>{
       try {
        const response = axios.put("https://congenial-carnival-wrr4gx7667gwfp6-3000.app.github.dev/reg/update",{email,name:"KQSD"},
            {headers:{Authorization:`Bearer ${token}`}})
            if(response){
                // console.log("user updated");
                setIsUpdate(true);
            }else{
                console.log("failed to update user");
            }
       } catch (error) {
        console.log(error);
        
       }
       
    }

    // fetch users
    useEffect(()=>{
        getAllUsers();
    },[isDelete,isUpdate])

  return (
    <div>
      <h1>Home Page</h1>
        {data&&data?.map(user=>{
            return(
                <div style={{display:"flex",gap:"8px",margin:"auto",padding:"auto"}}>
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>
                    <h3>{user.age}</h3>
                    <h4>{user.mob}</h4>
                    <h4>{user.role}</h4>
                    <h4>{user.password}</h4>
                    {user.role!=="admin"&&<button onClick={()=>handleDelete(user.email)}>delete</button>}
                    <button onClick={()=>handleUpdate(user.email)}>edit</button>
                </div>
            )
        })}
        <div><Link to="/fileupload">FileUpload</Link></div>
    </div>
  )
}

export default Home