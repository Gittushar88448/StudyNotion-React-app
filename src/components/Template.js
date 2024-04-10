import React from 'react'
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import Frame from "../assets/frame.png";
import {FcGoogle} from "react-icons/fc"


const Template = ({title , desc1, desc2 ,image , formtype , setIsVisible }) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] justify-between py-12 mx-auto gap-x-12 gap-y-0'>
        <div className='w-11/12 max-w-[450px] relative'>

            <h2
            className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>
                {title}
            </h2>
            
            <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {
                formtype === "login" ? 
                (<LogInForm setIsVisible={setIsVisible}/>) :
                (<SignUpForm setIsVisible={setIsVisible}/>)
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                Sign Up with Google
            </button>

        </div>
 

        <div className='relative w-11/12 max-w-[450px] '>
            <img src={Frame} 
             alt="Pattern"
             width={558}
             height={504}
             loading="lazy"
            ></img>

            <img src={image} 
             alt="Pattern"
             width={558}
             height={490}
             loading="lazy"
             className='absolute -top-4 right-4'
            ></img>
        </div>
    </div>
  )
}

export default Template