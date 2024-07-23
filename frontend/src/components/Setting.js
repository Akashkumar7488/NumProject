import React from 'react'
import './setting.css'
import { GiCheckMark } from "react-icons/gi";
const Setting = () => {
  return (
    <>
    <h2 className='text-gray-400 text-center font-serif'>Choose a plan for success</h2>
    <section className='pricing'>

      <div className="card-wrapper">
        <div className="card-header">
          <img src="" alt="" />
          <h2>Basics</h2>
        </div>
        <div className="card-details">
          <p><span><GiCheckMark  className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>1 Project</p>
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>10 GB Disk Space</p>
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>Free Email Address</p>
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>Limited Support</p>
        </div>
        <div className="card-price">
          <p className='text-2xl'><sup>19</sup>$<sup>/Month</sup></p>
        </div>
        <a href="/payment"><button className='card-button'>Enroll Now </button></a>
      </div>

      <div className="card-wrapper">
        <div className="card-header">
          <img src="" alt="" />
          <h2>Premium</h2>
        </div>
        <div className="card-details">
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>50 Project</p>
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>50 GB Disk Space</p>
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>Advanced Web Builder</p>
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>Unlimited Support</p>
        </div>
        <div className="card-price">
          <p className='text-2xl'><sup>29</sup>$<sup>/Month</sup></p>
        </div>
        <a href="/payment"><button className='card-button'>Enroll Now </button></a>
      </div>

      <div className="card-wrapper">
        <div className="card-header">
          <img src="" alt="" />
          <h2>Ultimate</h2>
        </div>
        <div className="card-details">
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>100 Project</p>
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>100 GB Disk Space</p>
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>Advanced Web Builder</p>
          <p><span><GiCheckMark className='inline-block m-1 text-green-500 font-bold h-10 w-5'/></span><b></b>Unlimited Support</p>
        </div>
        <div className="card-price">
          <p className='text-2xl'><sup>49</sup>$<sup>/Month</sup></p>
        </div>
        <a href="/payment"><button className='card-button'>Enroll Now </button></a>
      </div>
    </section>
    </>
  )
}

export default Setting
