import React from 'react'
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import Frame from "../assets/frame.png";

const Template = ({title , desc1, desc2 ,image , formtype , setIsVisible }) => {
  return (
    <div>
        <div>
            <h2>{title}</h2>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {
                formtype === "login" ? 
                (<LogInForm setIsVisible={setIsVisible}/>) :
                (<SignUpForm setIsVisible={setIsVisible}/>)
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                Sign Up with Google
            </button>

        </div>

        <div>
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
            ></img>
        </div>
    </div>
  )
}

export default Template