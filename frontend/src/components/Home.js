import React from 'react'
import AB141  from './images/AB141.png'
import AB16  from './images/AB16.png'
import { NavLink } from 'react-router-dom'
import './Home.css';


const Home = () => {
  return (
    <>
    <div className='header'>
    <div className='container'>
      <div className="row">
        <div className="col-sm-6">
          <h2 className='text-center text-white mt-20'>𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨</h2>
          <p className='font-bold text-center text-white animated-text text-4xl'>ℝ𝕖𝕒𝕔𝕥 𝕌𝕟𝕚𝕧𝕖𝕣𝕤𝕚𝕥𝕪</p>
          <p className='font-semibold text-4xl text-white mt-40 'style={{ marginLeft: '410px', width:'40rem' }}>𝓨𝓸𝓾𝓻 𝓗𝓪𝓻𝓭 𝓦𝓸𝓻𝓴 𝓪𝓷𝓭 𝓐𝓬𝓱𝓲𝓮𝓿𝓮𝓶𝓮𝓷𝓽𝓼 𝓐𝔀𝓪𝓲𝓽 𝓨𝓸𝓾!!</p>
          <p className='text-xl font-bold mt-40 text-white' style={{ marginLeft: '500px' }}>Click Below to Enroll Yourself</p>
          <div className=''style={{ marginLeft: '480px' }}>
          <NavLink to="/signup" className=" m-30 p-10 border-2 no-underline border-green-300 font-semibold text-white  spaace-x-2 rounded-full px-12 py-2 inline-block bg-green-600  hover:bg-green-800 hover:text-white hover:no-underline">Signup Here</NavLink>
          <NavLink to="/login" className=" m-30 p-10 border-2 ml-20 no-underline border-green-300 font-semibold text-white  rounded-full px-12 py-2 inline-block bg-green-600 hover:bg-green-800 hover:text-white hover:no-underline">Login Here</NavLink>
          </div>
        </div>
       
      </div>
    </div>
    </div>
    </>
  )
}

export default Home;
