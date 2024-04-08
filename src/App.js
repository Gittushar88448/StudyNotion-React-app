import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar"
import { useState } from "react";
import "./index.css"
import PrivateRoute from "./components/PrivateRoute"
import Error from "./pages/Error";

function App() {

  const [isVisible , setIsVisible] = useState(false);

  return (
    <div className=" App h-screen w-screen bg-richblack-900 flex flex-col">

      <Navbar isVisible={isVisible} setIsVisible={setIsVisible}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn setIsVisible={setIsVisible}/>}/>
        <Route path="/signup" element={<SignUp setIsVisible={setIsVisible}/>}/>
        <Route path="/dashboard" element={
            <PrivateRoute isVisible={isVisible}>

              <Dashboard/>

            </PrivateRoute>
        }/>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
