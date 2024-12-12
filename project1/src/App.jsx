import React from 'react'
import Login from "./pages/Login_signup/Login";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Signup } from './pages/Login_signup/Signup';
import Homepage from "./pages/Home page/Homepage"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Signup" element={<Signup/>} />
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Home" element={<Homepage/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App


