import React from 'react'
import Template from "../components/Template"
import signupImg from "../assets/signup.png"
const SignUp = ({setIsVisible}) => {
  return (
    <div>
        <Template
              title="Join the millions learning to code with StudyNotion for free"
              desc1="Build skills for today, tomorrow, and beyond."
              desc2="Education to future-proof your career."
              image={signupImg}
              formtype="signup"
              setIsVisible={setIsVisible}
        />
    </div>
  )
}

export default SignUp