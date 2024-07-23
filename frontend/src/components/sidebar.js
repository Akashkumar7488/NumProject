import React, { useState } from 'react';
import './sidebar.css';
import p from './images/p.jpeg';
import { FcHome, FcAbout, FcMms, FcContacts, FcBusinessman, FcCellPhone, FcSettings, FcMenu } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className={`container ${isSidebarOpen ? 'active' : ''}`}>
        <div className={`navigation ${isSidebarOpen ? 'active' : ''}`}>
          <ul>
            <li className="profile"><a href="#">
              <span className="icon"><img src={p} alt="" className='h-10 w-10 -mt-2 rounded-full -ml-2  '/></span>
              <span className="title -ml-4">Akash Kumar</span></a></li>
            <li><a href="/" onClick={handleLinkClick}>
              <span className="icon"><FcHome className='iccon'/></span>
              <span className="title">Home</span></a></li>
            <li><a href="/about" onClick={handleLinkClick}>
              <span className="icon"><FcAbout className='iccon'/></span>
              <span className="title">About Us</span></a></li>
            <li><a href="/gallery" onClick={handleLinkClick}>
              <span className="icon"><FcMms className='iccon'/></span>
              <span className="title">Gallery</span></a></li>
            <li><a href="/course" onClick={handleLinkClick}>
              <span className="icon"><FcContacts className='iccon'/></span>
              <span className="title">Courses</span></a></li>
            <li><a href="/studentcard" onClick={handleLinkClick}>
              <span className="icon"><FcBusinessman className='iccon'/></span>
              <span className="title">Student Card</span></a></li>
            <li><a href="/contact" onClick={handleLinkClick}>
              <span className="icon"><FcCellPhone className='iccon'/></span>
              <span className="title">Contact Us</span></a></li>
            <li><a href="/setting" onClick={handleLinkClick}>
              <span className="icon"><MdAttachMoney  className='iccon'/></span>
              <span className="title">Plan</span></a></li>
            <li><a href="help" onClick={handleLinkClick}>
              <span className="icon"><FcSettings className='iccon'/></span>
              <span className="title">Help</span></a></li>
          </ul>
        </div>
        <div className={`main ${isSidebarOpen ? 'active' : ''}`}>
          <div className="topbar">
            <div className="toggle" onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes /> : <FcMenu />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
