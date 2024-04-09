import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignUpForm = ({ setIsVisible }) => {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "",
        createPassword: "", confirmPassword: ""
    });

    const [showCreate, setShowCreate] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [accountType , setAccountType] = useState("student");

    const nevigate = useNavigate();

    function changeHandler(event) {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        )

        )
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.createPassword !== formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setIsVisible(true);
        toast.success("Account Created");
        const finalData = {
            ...formData , accountType
        }
        console.log(finalData);
        nevigate("/dashboard");
    }

    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

                <button className={
                    `${(accountType === "student") ?
                 "bg-richblack-900 text-richblack-5" 
                 : 
                 "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200"

                 }`}
                  onClick={() =>{setAccountType("student")}}>
                    Student
                </button>

                <button 
                onClick={()=>{setAccountType("instructor")}} 
                
                className={`${(accountType === "instructor") ?
                 "bg-richblack-900 text-richblack-5" 
                 : 
                 "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200"
                 }`} >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name<sup className='text-pink-200'>*</sup>
                        </p>

                        <input
                            required
                            type='text'
                            placeholder='Enter First Name '
                            name='firstName'
                            value={formData.firstName}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name<sup className='text-pink-200'>*</sup>
                        </p>

                        <input
                            required
                            type='text'
                            placeholder='Enter Last Name '
                            name='lastName'
                            value={formData.lastName}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>
                 <div className='mt-[20px]'>
                 <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email Address<sup className='text-pink-200'>*</sup>
                    </p>

                    <input
                        required
                        type='email'
                        placeholder='Enter email id '
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>
                 </div>


                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full  relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            CreatePassword<sup className='text-pink-200'>*</sup>
                        </p>

                        <input
                            required
                            type={showCreate ? ("Text") : ("password")}
                            placeholder='Create Password '
                            name='createPassword'
                            value={formData.createPassword}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

                        <span onClick={() => setShowCreate((prev) => !prev)} className='absolute right-3 top-[38px] 
                        cursor-pointer'>
                            {
                                showCreate ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : 
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>

                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password<sup className='text-pink-200'>*</sup>
                        </p>

                        <input
                            required
                            type={showConfirm ? ("text") : ("password")}
                            placeholder='Enter Confirm Password '
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />


                        <span onClick={() => setShowConfirm((prev) => !prev)} className='absolute right-3 top-[38px]
                         cursor-pointer'>
                            {
                                showConfirm ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : 
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>

                    </label>
                </div>

                <button className=' w-full bg-yellow-50 rounded-[8px] font-medium 
                text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default SignUpForm