import React from 'react'
import {Link} from "react-router-dom";
import Logo from "../assets/Logo.svg";
const Navbar = (props) => {

    let isVisible = props.isVisible;
    let setIsVisible = props.setIsVisible;

  return (
    <div className='flex justify-evenly'>
        <Link to="/">
            <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"></img>
        </Link>

        <nav>
            <ul className='flex gap-3'>
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

        <div className='flex gap-2'>

            { !isVisible &&
                <Link to="/login">
                   <button>Login</button>
                </Link>
            }

            { !isVisible &&
               <Link to="/signup">
                  <button>Sign Up</button> 
               </Link>
            }

            {isVisible &&
                <Link to="/">
                  <button onClick={() =>{
                    setIsVisible(false);
                  }}>LogOut</button>
                </Link>
            }

            {isVisible &&
                <Link to="/dashboard">
                   <button>Dashboard</button>
                </Link>
            }

        </div>

    </div>
  )
}

export default Navbar