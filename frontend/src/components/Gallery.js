
import React, { useEffect } from 'react';
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';

import './gallery.css';
import './lightbox.css';
import pr1 from './images/pr1.jpg';
import  pr2 from './images/pr2.jpg';
import  pr3 from './images/pr3.jpg';
import  pr4 from './images/pr4.png';
import  pr5 from './images/pr5.jpg';
import pr6 from './images/pr6.jpg';
import pr7 from './images/pr7.jpg';
import pr8 from './images/pr8.jpg';
import pr9 from './images/pr9.jpg';
import pr10 from './images/pr10.jpg';
 import  pr11 from './images/pr11.avif';
import  pr12 from './images/pr12.webp';

const Gallery = () => {
    useEffect(() => {
        // Initialize lightbox
        lightbox.option({
          'resizeDuration': 200,
          'wrapAround': true
        });
      }, []);

  return (
    <>
      <h1 className='ml-20 text-center'>
      𝐎𝐮𝐫 𝐖𝐢𝐧𝐧𝐞𝐫𝐬 
      </h1>
      <div className="contains">
        <div className="gallery">
          <a href={pr1} data-lightbox="models" data-title="Ananya">
            <img src={pr1} alt="" />
          </a>
          <a href={pr2} data-lightbox="models" data-title="Aditi">
            <img src={pr2} alt="" />
          </a>
          <a href={pr3} data-lightbox="models" data-title="Shubham">
            <img src={pr3} alt="" />
          </a>
          <a href={pr4} data-lightbox="models" data-title="Mihir">
            <img src={pr4} alt="" />
          </a>
          <a href={pr5} data-lightbox="models" data-title="Abhay">
            <img src={pr5} alt="" />
          </a>
          <a href={pr6} data-lightbox="models" data-title="Akash">
            <img src={pr6} alt="" />
          </a>
          <a href={pr7} data-lightbox="models" data-title="Devansh">
            <img src={pr7} alt="" />
          </a>
          <a href={pr8} data-lightbox="models" data-title="Anjali">
            <img src={pr8} alt="" />
          </a>
          <a href={pr9} data-lightbox="models" data-title="Kaira">
            <img src={pr9} alt="" />
          </a>
          <a href={pr10} data-lightbox="models" data-title="Amrita">
            <img src={pr10} alt="" />
          </a>
          <a href={pr11} data-lightbox="models" data-title="shanu">
            <img src={pr11} alt="" />
          </a>
          <a href={pr12} data-lightbox="models" data-title="vivek">
            <img src={pr12} alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Gallery;







