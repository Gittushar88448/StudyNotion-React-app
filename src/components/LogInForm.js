import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LogInForm = ({setIsVisible}) => {

    const[formData , setFormData] = useState({ email:"" , password: "" })
    const[showPassword , setShowPassword] = useState(false);
    const nevigate = useNavigate();

    function changeHandler(event){

        setFormData((prev) => (
        {    
                       ...prev,

            [event.target.name] : event.target.value
        }   
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsVisible(true);
        toast.success("Logged In");
        nevigate("/dashboard");
    }
    
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>
                Email Address<sup>*</sup>
                <input 
                required
                type='text'
                placeholder='Enter email id'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                />
            </label>

            <label>
                Password<sup>*</sup>
                <input 
                required
                type= {showPassword ? ("text") : ("password")}
                placeholder='Enter Password'
                name='password'
                value={formData.password}
                onChange={changeHandler}
                />
                
                <span onClick={() => setShowPassword(prev => !prev)}>

                    {showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}

                </span>

                <Link to="#">
                    Forgot Password
                </Link>

            </label>

                <button>
                    Sign In
                </button>

        </form>
    </div>
  )
}

export default LogInForm