import React from 'react'
import './video.css'
import v1 from './images/v1.mp4'
const Video = () => {
  return (
    <div className='videocontainer'>
      <div className="videobox">
        <video src={v1} loop className='clip' muted></video>
      </div>
      {/* <div className="videobox">
        <video src={v1} loop className='clip' muted></video>
      </div>
      <div className="videobox">
        <video src={v1} loop className='clip' muted></video>
      </div>
      <div className="videobox">
        <video src={v1} loop className='clip' muted></video>
      </div> */}
    </div>
  )
}

export default Video;
