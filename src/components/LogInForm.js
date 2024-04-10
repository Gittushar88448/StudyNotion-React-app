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
    <div >
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                  Email Address
                  <sup className='text-pink-200'>*</sup>
                </p>
                <input 
                required
                type='text'
                placeholder='Enter email id'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>

            <label className='relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                   Password
                   <sup className='text-pink-200'>*</sup>
                </p>   
                <input 
                required
                type= {showPassword ? ("text") : ("password")}
                placeholder='Enter Password'
                name='password'
                value={formData.password}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                
                <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>

                    {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}

                </span>

                <Link to="#" >
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto '>
                       Forgot Password
                    </p>
                </Link>

            </label>

                <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Sign In
                </button>

        </form>
    </div>
  )
}

export default LogInForm