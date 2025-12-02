import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/Login.jsx';
import Signup from './page/Signup.jsx';
import './App.css'
import Home from './page/Home.jsx';
import MyContetxt from './context/Mycontext.jsx';

function App() {

  const { theme, setTheme } = useContext(MyContetxt)
  return (
    <BrowserRouter>
      <div style={{background:theme==="light"?"white":"black",color:theme==="light"?"black":"white"}}>

        {theme === "light" ?
          <div onClick={() => setTheme("dark")}>☀️</div> :
          <div onClick={() => setTheme("light")}>🌙</div>
        }
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
