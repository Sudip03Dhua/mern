import { useState } from "react";
import MyContetxt from "./Mycontext"

const MyContetxtProvider = ({children})=>{
    const [token,setToken]=useState("hello");
    const [theme,setTheme]=useState("light");
    return <MyContetxt.Provider value={{name:"hello",token,setToken,theme,setTheme}}>
        {children}
    </MyContetxt.Provider>
}
export default MyContetxtProvider;
