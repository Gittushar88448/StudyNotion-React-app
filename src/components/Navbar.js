import React from 'react'
import {Link} from "react-router-dom";
import Logo from "../assets/Logo.svg";
const Navbar = (props) => {

    let isVisible = props.isVisible;
    let setIsVisible = props.setIsVisible;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"></img>
        </Link>

        <nav>
            <ul className='text-richblack-100 flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                <Link to="/">About</Link>
                </li>

                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Button Section */}

        <div className='flex items-center gap-x-4'>

            { !isVisible &&
                <Link to="/login">
                   <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700 '>Log in</button>
                </Link>
            }

            { !isVisible &&
               <Link to="/signup">
                  <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</button> 
               </Link>
            }

            {isVisible &&
                <Link to="/">
                  <button onClick={() =>{
                    setIsVisible(false);
                  }}
                  className='bg-richblack-800 text-richblack-100 py-[8px] 
                  px-[12px] rounded-[8px] border border-richblack-700'>LogOut</button>
                </Link>
            }

            {isVisible &&
                <Link to="/dashboard">
                   <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
                </Link>
            }

        </div>

    </div>
  )
}

export default Navbar