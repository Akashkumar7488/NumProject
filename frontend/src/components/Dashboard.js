import React from 'react';
import Sidebar from './sidebar';
import {NavLink} from 'react-router-dom';
// import c1 from './images/c1.jpg'
import Landingpage from './landingpage';
import Choosesection from './choosesection';
import FaqAccordion from './FaqAccordion';
import {Card} from 'react-bootstrap';
import Blog1Img from './images/c2.jpg';
import Blog2Img from './images/c3.webp'
import Blog3Img from './images/c3.jpg'
import './dashboard.css'
import Aboutprofile from './Aboutprofile';
import Coursebook from './coursebook';
import Testimonials from './testimonials';
import Video from './video';


const blogs = [
  {
  id:1,
  img:[Blog1Img],
  title:'Developing Your Skills',
  description:'Dive deep into fascinating subjects led by passionate professors. Explore diverse fields of study.'
  },
  {
    id:2,
    img:[Blog2Img],
    title:'Fueling Your Curiosity',
    description:'Gain valuable practical experience through internships, research projects, and hands-on learning.'
    },
    {
      id:3,
      img:[Blog3Img],
      title:'Building Your Future',
      description:'Graduate with the knowledge and skills employers seek in todays job market.'
      }
]




const Dashboard = () => {
  return (
    <>
    <Sidebar/>
    <div className="py-5">
    <Landingpage/>
    </div>
    <div className="py-5">
    <Choosesection/>
    </div>
    
    <div className="py-5 bg-light">
      <div className="containees">
        <div className="row d-flex items-center justify-around">
          <div className="col-lg-5">
            <h2 className="text-collapse">2024 start courses</h2>
            <p>Jumpstart your future! This exciting new course kicks off in 2024.<br/>
            Gear up for learning! Applications are open for our highly anticipated course.
            </p>
            <NavLink to='/course'>
            <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
            </NavLink>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0 border-r-2 cursor-pointer">
              <Video /> 
            </div>
        </div>
      </div>
    </div>
    <div className="py-5 mb-4">
      <FaqAccordion/>
    </div>

    <div className="py-5 mb-4">
      <Aboutprofile/>
    </div>

    <div className="py-5 mb-4">
      <Coursebook/>
    </div>
    
    <div className="blog-section text-light py-5">
      <div className="contaiins d-flex flex-column items-center">
        <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
        <div className="row g-4">
          {blogs.map((blog) => (
            <div key={blog.id} className='col-md-6 col-lg-4'>
              <NavLink to='/blog' className='text-decoration-none'>
              <Card className='h-80 shadow scale-hover-effect w-80'>
                <Card.Img variant='top' src={blog.img}/>
                <Card.Body className='p-md-5'>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                </Card.Body>
              </Card>
              </NavLink>
            </div>
          ))}
        </div>
        <NavLink to='/blog'>
        <button type='button' className='btn btn-success btn-lg mt-5'>Read More Blogs</button>
        </NavLink>
      </div>
    </div>
    <div className="py-5 mb-4">
      <Testimonials/>
    </div>

    </>
  )
}

export default Dashboard;
