import React from 'react'
import './coursebook.css'


const Coursebook = () => {
  return (
    <div className='cbook'>
        <h2 className='text-center mb-5'>Start Your Learning Adventure</h2>
      <section className="main">
        <div className="main-top">
            <h1 className=''>Skills</h1>
        </div>
        <div className="main-skills">
            <div className="carrd">
            <i class="fas fa-laptop-code"></i>
            <h3>Web development</h3>
            <p>Join Over 1 million Students.</p>  
            <button>Get Started</button> 
            </div>

            <div className="carrd">
            <i class="fab fa-wordpress"></i>
            <h3>WordPress</h3>
            <p>Join Over 3 million Students.</p>  
            <button>Get Started</button> 
            </div>

            <div className="carrd">
            <i class="fas fa-palette"></i>
            <h3>Graphic design</h3>
            <p>Join Over 2 million Students.</p>  
            <button>Get Started</button> 
            </div>

            <div class="carrd">
            <i class="fab fa-app-store-ios"></i>
            <h3>IOS dev</h3>
            <p>Join Over 1 million Students.</p>
            <button>Get Started</button>
            </div>
          </div>

          <section class="main-course">
        <h1>My courses</h1>
        <div class="course-box">
          <ul>
            <li class="active">In progress</li>
            <li>explore</li>
            <li>incoming</li>
            <li>finished</li>
          </ul>
          <div class="course">
            <div class="box">
              <h3>HTML</h3>
              <p>80% - progress</p>
              <button>continue</button>
              <i class="fab fa-html5 html"></i>
            </div>
            <div class="box">
              <h3>CSS</h3>
              <p>50% - progress</p>
              <button>continue</button>
              <i class="fab fa-css3-alt css"></i>
            </div>
            <div class="box">
              <h3>JavaScript</h3>
              <p>30% - progress</p>
              <button>continue</button>
              <i class="fab fa-js-square js"></i>
            </div>
          </div>
        </div>
      </section>
      </section>
    </div>
  )
}

export default Coursebook;
