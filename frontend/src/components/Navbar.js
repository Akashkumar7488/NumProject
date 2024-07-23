import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-bootstrap';
import { RiGraduationCapFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FaMoon } from "react-icons/fa";
// import AB10 from './images/AB10.webp';
// import AB12 from './images/AB12.png';
// import AB13 from './images/AB13.jpg';
// import AB11 from './images/AB11.png';
import { CiSun } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FcAbout, FcMms, FcContacts, FcBusinessman, FcCellPhone } from "react-icons/fc";





const Navbar = ({theme, setTheme}) => {

   const toggle_mode = () => {
    theme ===  'light' ? setTheme('dark') : setTheme('light');
   }
  return (
    <div className='navbar'>

        {theme === 'light' ? 
        <RiGraduationCapFill className='text-black w-10 h-8 m-1 cursor-pointer' /> :
        <FaGraduationCap className='text-white w-10 h-8 m-1 cursor-pointer' />}
        <a href="/dashboard" className='no-underline href'><span className="text-green-500 font-serif font-semibold">Knowledge</span>Seeker</a>
    <h2 className='text-green-500'>𝕌𝕟𝕝𝕖𝕒𝕤𝕙 𝕐𝕠𝕦𝕣 𝕀𝕟𝕟𝕖𝕣 ℙ𝕠𝕥𝕖𝕟𝕥𝕚𝕒𝕝
    </h2>
    <div className="search-box">
        <input type="text" placeholder='Search' />
        <FcSearch  className='h-8 w-8 cursor-pointer'/>
    </div>
    {theme === 'light' ?
    <FaMoon  onClick={()=>{toggle_mode()}} className='text-black w-10 h-8 m-1 cursor-pointer ml-100'/>:
    <CiSun  onClick={()=>{toggle_mode()}} className=' w-10 h-8 m-1 cursor-pointer ml-100 text-white'/>
    }
    </div>
  )
}

export default Navbar;
