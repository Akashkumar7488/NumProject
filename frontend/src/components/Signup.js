import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook, FaLinkedinIn, FaGoogle, FaRegEnvelope, FaUserGraduate } from "react-icons/fa";
import { MdLockOutline} from 'react-icons/md';
import { BsPhoneFlip } from "react-icons/bs";
import {NavLink, useNavigate} from 'react-router-dom'
import './Signup.css'
import a3 from './images/a3.png'

const Signup = () => {
  const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",email:"",mobile:"",password:"",cpassword:""
    });
    const handleInputs = (e) => {
      console.log(e);
      const name = e.target.name;
      const value = e.target.value;
      setUser({...user, [name]:value})
    }

    const validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const PostData = async(e)=> {
      e.preventDefault();

      const {name,email,mobile,password,cpassword} = user;

       // Validation check for required fields
       if (!name || !email || !mobile || !password || !cpassword) {
        toast.error("Please fill in all required fields.");
        window.alert("Please fill in all required fields.");
        return;
      }

       // Email validation
    if (!validateEmail(email)) {
      window.alert  ("Please enter a valid email address.");
      return;
    }
    

      const res = await fetch("http://localhost:3001/register", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:name,email:email,mobile:mobile,password:password,cpassword:cpassword
        })
      })

      console.log(res)
      
      const data = await res.json();

      if(data.status === 422 || !data){
        toast.error("Invalid registration");
        console.log("Invalid registration");
        window.alert("Invalid registration")
      }else {
        toast.success("registration successfully")
        console.log(" registration successful");
        window.alert("registration successfully 🥳🥳")
        navigate("/login");
      }
    }
  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 -mt-3 start'>
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center -mt-10  bg-white'>
     <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl  mt-10 mb-10">
      
      <div className='w-2/5  bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl py-40 px-2 h-100'>
      <img src={a3} className='' />
      <h2 className="text-3xl font-bold mb-2">Hey, you</h2>
      <div className="border-2 w-10 border-white inline-block mb-2"></div>
      <p className="mb-10 w-60 ml-12">Fill up personal information and start journey with us.</p>
      </div>
      <div className='w-3/5 p-4'>
      <div className="text-left font-bold -mt-20">
        <span className="text-green-500 font-serif font-semibold" style={{marginBottom:40}}>Knowledge</span>Seeker
        <h2 className='text-2xl text-center font-bold text-green-500 mb-1 mt-2'>Create your Account</h2>
        <form method="POST" className="register-form ml-20 -mt-4" id="register-form">

  <div className="form-group ">
  <label htmlFor="name">
  </label>
  <FaUserGraduate  className='text-gray-400 m-1 '/>
  <input type="text" name="name" id="name" autoComplete="off" className=' font-normal w-full ' required
  value={user.name}
  onChange={handleInputs}
  placeholder="Enter your Name"/>
</div>

<div className="form-group">
  <label htmlFor="email">
  </label>
  <FaRegEnvelope className='text-gray-400 m-1 '/>
  <input type="email" name="email" id="email" autoComplete="off" className=' font-normal w-full ' required
  value={user.email}
  onChange={handleInputs}
  placeholder="Enter your Email"/>
</div>

<div className="form-group ">
  <label htmlFor="Phone">
  </label>
  <BsPhoneFlip  className='text-gray-400 m-1 '/>
  <input type="number" name="mobile" id="mobile" autoComplete="off" className=' font-normal w-full ' required
  value={user.mobile}
  onChange={handleInputs}
  placeholder="Enter your Number"/>
</div>

<div className="form-group">
  <label htmlFor="password">
  <i class="zmdi zmdi-lock material-icons-name"></i>
  </label>
  <MdLockOutline className='text-gray-400 m-1'/>
  <input type="password" name="password" id="password" autoComplete="off" className=' font-normal w-full ' required
  value={user.password}
  onChange={handleInputs}
  placeholder="Enter your Password"/>
</div>

<div className="form-group mb-3">
  <label htmlFor="Confirm password">
  <i class="zmdi zmdi-lock material-icons-name"></i>
  </label>
  <MdLockOutline className='text-gray-400 m-1'/>
  <input type="password" name="cpassword" id="cpassword" autoComplete="off" className=' font-normal w-full ' required
  value={user.cpassword}
  onChange={handleInputs}
  placeholder="Confirm your Password"/>
</div>


<div className="form-group form-button">
  <input type="submit" name="signup" id="signup" className="form-submit border-2 border-green-300 font-semibold text-green-500  rounded-full px-12 py-2 inline-block hover:bg-green-500 hover:text-white"
    value="register" onClick={PostData}
    />
  <NavLink to="/login" className="flex flex-cols justify-end underline font-normal hover:text-blue-600">I m already registered</NavLink>
                          
</div>
</form>
      </div>
      </div>
     </div>
    </main>
    </div>
    
    </>
  )
}

export default Signup;
