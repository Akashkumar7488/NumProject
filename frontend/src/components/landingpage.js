import React from 'react'
import p11 from './images/p11.jpg';
import p12 from './images/p12.jpg';
import './landing.css';

const Landingpage = () => {
  return (
    <div>
      <div className="containee">
        <div className="content-containee">
            <h1>Best Learning <br/>
            <span className='heading_1'>Education Platform</span><br/>
            <span className='heading_2'>in The World</span>
            </h1>
            <p>
                Unlock your full learning potential with our intuitive education platform. Seamlessly blending technology and education, we provide an immersive learning environment that combines interactive lessons, virtual classrooms, and intelligent feedback.
            </p>
            <form>
                <input type="text" placeholder='What do you want to learn' />
                <button type='submit' className='font-2xl rounded font-bold'>Search Course</button>
            </form>
        </div>
        <div className="image_containee">
            <img src={p11} alt="header" />
            <img src={p12} alt="header" />
            <div className="image_content">
                <ul>
                    <li>Get 30% off on every 1st month</li>
                    <li>Expert teachers</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage;
