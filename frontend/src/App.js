import React, { useEffect, useState } from 'react'
import './App.css';
import {Routes, Route} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/login';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Reset-password';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselComponent';
import  Navbar  from './components/Navbar';
import Sidebar from './components/sidebar';
import './index.css'
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Course from './components/course';
import Contact from './components/contact';
import Faculty from './components/Faculty';
import Setting from './components/Setting';
import Choosesection from './components/choosesection';
import FaqAccordion from './components/FaqAccordion';
import Help from './components/help';
import { NavLink } from 'react-bootstrap';
import Coursebook from './components/coursebook';
import Paymentgateway from './components/paymentgateway';
import Success from './components/Success';
import Video from './components/video';

const App = () => {
  // use state variable for dark and light color
  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
  localStorage.setItem('current_theme', theme)
  }, [theme])
  return (
    <>
     <div className={`app-container ${theme}`}>
     <Navbar theme={theme} setTheme={setTheme}/>
     <div className={`page-content ${theme}`}>
  <Routes>
    <Route path='signup' element={<Signup/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='forgotpassword' element={<Forgotpassword/>}/>
    <Route path='/user/reset/:id/:token' element={<Resetpassword/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='choosesection' element={<Choosesection/>}/>
    <Route path='faqaccordion' element={<FaqAccordion/>}/>
    <Route path='carouselComponent' element={<CarouselComponent/>}/>
    <Route path='sidebar' element={<Sidebar/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='gallery' element={<Gallery/>}/>
  <Route path='course' element={<Course/>}/>
  <Route path='studentcard' element={<Faculty/>}/>
  <Route path='setting' element={<Setting/>}/>
  <Route path='help' element={<Help/>}/>
  <Route path='cbook' element={<Coursebook/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='payment' element={<Paymentgateway/>}/>
  <Route path="/success" element={<Success/>} />
  <Route path="/video" element={<Video/>} />
  </Routes>
  
 <footer>
  <div className="footer-wrap">
    <div className="widgetFooter">
      <h4 className="uppercase">useful links</h4>
      <ul id="footerUsefulLink">
        <li title="About US">
          <span className="usefulLinksIcons">
            <i className="far fa-id-card"></i>
          </span>
          <a>&nbsp;About us</a>
        </li>
        <li title="Our Team">
          <span className="usefulLinksIcons">
            <i className="far fa-handshake"></i>
          </span>
          <a>&nbsp;Our team</a>
        </li>
        <li title="Gallery">
          <span className="usefulLinksIcons">
            <i className="far fa-images"></i>
          </span>
          <a>&nbsp;Gallery</a>
        </li>
        <li title="Contact Us">
          <span className="usefulLinksIcons">
            <i className="far fa-envelope"></i>
          </span>
          <a>&nbsp;Contact us</a>
        </li>
      </ul>
    </div>
    <div className='-ml-20'>
    <h4 className="uppercase">Get Connected</h4>
            <div className="list-unstyled mb-0">
            <li>
                <p>Connectivity</p>
              </li>
              <li>
                <p>Dashboard</p>
              </li>
              <li>
              <i class="fa-light fa-file-doc"></i>
                <p>Docs</p>
              </li>
              <li>
                <p>Support</p>
              </li>
              </div>
          </div>
          
    <div id="footerLogo" className='mr-60'>
    </div>
    <div className="widgetFooter">
      <h4 className="uppercase">Social media links</h4>
      <ul id="footerMediaLinks">
        <li className="media1" title="Facebook">
          <span className="mediaLinksIcons fb">
            <i className="fab fa-facebook-square"></i>
          </span>
          <a className="fb">&nbsp;facebook</a>
        </li>
        <li className="media2" title="Twitter">
          <span className="mediaLinksIcons twit">
            <i className="fab fa-twitter-square"></i>
          </span>
          <a className="twit">&nbsp;Twitter</a>
        </li>
        <li className="media3" title="Instagram">
          <span className="mediaLinksIcons insta">
            <i className="fab fa-instagram"></i>
          </span>
          <a className="insta">&nbsp;instagram</a>
        </li>
        <li className="media4" title="Github">
          <span className="mediaLinksIcons git">
            <i className="fab fa-github-alt"></i>
          </span>
          <a className="git">&nbsp;Github</a>
        </li>
      </ul>
    </div>
    <div>
    <h4 className="uppercase">Address</h4>
            <div className="list-unstyled mb-0">
            <li>
                <p>Country - India</p>
              </li>
              <li>
                <p>Main Address - Ashok Rajpath India Patna</p>
              </li>
              <li>
                <p>Phone Number - 0123456789</p>
              </li>
              <li>
                <p>Email - react@.co.in</p>
              </li>
              </div>
          </div>
  </div>
  <div className="footerCopy">
    <div className="inb">
      <p>Copyrights<sup>&copy;</sup> 2024. Developed  <i className="fas fa-heart" style={{ color: 'red' }}></i> by Akash Kumar</p>
    </div>
  </div>
</footer>

  </div>
  </div>
    </>
  )
}

export default App;

