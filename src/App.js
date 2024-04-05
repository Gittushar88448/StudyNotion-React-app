import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar"
import { useState } from "react";

function App() {

  const [isVisible , setIsVisible] = useState(false);

  return (
    <div className="App">

      <Navbar isVisible={isVisible} setIsVisible={setIsVisible}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
