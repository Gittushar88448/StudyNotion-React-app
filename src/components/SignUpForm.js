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
        nevigate("/dashboard");
    }

    return (
        <div>
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        First Name<sup>*</sup>

                        <input
                            required
                            type='text'
                            placeholder='Enter First Name '
                            name='firstName'
                            value={formData.firstName}
                            onChange={changeHandler}
                        />
                    </label>

                    <label>
                        Last Name<sup>*</sup>

                        <input
                            required
                            type='text'
                            placeholder='Enter Last Name '
                            name='lastName'
                            value={formData.lastName}
                            onChange={changeHandler}
                        />
                    </label>
                </div>

                <label>
                    Email Address<sup>*</sup>

                    <input
                        required
                        type='email'
                        placeholder='Enter email id '
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                    />
                </label>
                <div>
                    <label>
                        createPassword<sup>*</sup>

                        <input
                            required
                            type={showCreate ? ("Text") : ("password")}
                            placeholder='Create Password '
                            name='createPassword'
                            value={formData.createPassword}
                            onChange={changeHandler}
                        />

                        <span onClick={() => setShowCreate((prev) => !prev)}>
                            {
                                showCreate ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
                            }
                        </span>

                    </label>

                    <label>
                        Confirm Password<sup>*</sup>

                        <input
                            required
                            type={showConfirm ? ("text") : ("password")}
                            placeholder='Enter Confirm Password '
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                        />


                        <span onClick={() => setShowConfirm((prev) => !prev)}>
                            {
                                showConfirm ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
                            }
                        </span>

                    </label>
                </div>

                <button>
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default SignUpForm