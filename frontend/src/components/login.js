import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaFacebook, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdLockOutline } from 'react-icons/md';
import a4 from './images/a4.png'
import './login.css';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Please fill in all required fields.");
            window.alert("Please fill in all required fields.");
            return;
        }
        try {
            const res = await fetch('http://localhost:3001/signin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.status === 400 || !data) {
                toast.error("Invalid credentials");
                window.alert("Invalid credentials");
                console.log("Invalid credentials");
            } else {
                toast.success("Login successful");
                window.alert("Congratulations You Loggedin successful 🥳🥳");
                console.log("Login successful");
                navigate("/Dashboard");
            }
        } catch (err) {
            console.log("Error during login: ", err);
            toast.error("Something went wrong");
            window.alert("Something went wrong");
        }
    };


      
    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
                <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center -mt-10'>
                    <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                        <div className='w-3/5 p-5'>
                            <div className="text-left font-bold -mt-10">
                            <span className="text-green-500 font-serif font-semibold">Knowledge</span>Seeker
                                <h2 className='text-2xl text-center font-bold text-green-500 mb-2'>Sign in to your Account</h2>
                                <form method="POST" className="register-form  ml-40 -mt-8" id="register-form">
                                    <div className="form-group mb-6 mt-6">
                                        <label htmlFor="email"></label>
                                        <FaRegEnvelope className='text-gray-400 m-2 ' />
                                        <input type="email" name="email" id="email" autoComplete="off" className='w-full p-1.5 font-normal' required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your Email" />
                                    </div>
                                    <div className="form-group mb-6">
                                        <label htmlFor="password"></label>
                                        <MdLockOutline className='text-gray-400 m-2 ' />
                                        <input type="password" name="password" id="password" autoComplete="off" className='w-full p-1.5 font-normal' required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your Password" />
                                    </div>
                                    <div className=" flex justify-between items-start mt-8 -ml-40">
                                        <NavLink to="/signup" className="navlink text-sm  items-start -ml-80 font-normal underline hover:text-blue-500">Create an account</NavLink>
                                        </div>
                                        <div className=" flex justify-between -mr-40 -mt-5">
                                        <NavLink to="/forgotpassword" className='text-sm underline hover:text-blue-700  font-normal flex justify-end items-end'>Forgot Password</NavLink>
                                    </div>
                                    <div className="form-group form-button mt-5">
                                        <input type="submit" name="signin" id="signin" className="form-submit border-2 border-green-300 font-semibold  rounded-full px-12 py-2 inline-block hover:bg-green-500 hover:text-white"
                                            value="Log In"
                                            onClick={loginUser}
                                        />
                                    </div>
                                </form>
                                <div className="py-10">
        
                       <div className="flex justify-center my-2 icon">
                       <a href="#" className='border-2 border-blue-200  rounded-full p-3 mx-1'>
                      <FaFacebook className='text-sm'/>
                      </a>
                     <a href="#" className='border-2 border-pink-200  rounded-full p-3 mx-1'>
                     <FaLinkedinIn className='text-sm'/>
                     </a>
                    <a href="#" className='border-2 border-green-200  rounded-full p-3 mx-1'>
                    <FcGoogle className='text-sm'/>
                    </a>
                    </div>
          
                   <div className="flex flex-col items-center">
          
                    </div>
                    </div>


                            </div>
                        </div>
                        <div className='w-2/5  bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-40 px-2 h-100'>
                             <img src={a4} alt="" />
                            <h2 className="text-3xl font-bold mb-2">Nice!</h2>
                            <div className="border-2 w-10 border-white inline-block mb-2"></div>
                            <p className="mb-10">Enter your Email & Password and continue the journey with us.</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Login;

