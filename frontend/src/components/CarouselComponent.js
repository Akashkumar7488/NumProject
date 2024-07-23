import React from 'react';
import { Carousel } from 'react-bootstrap';
import AB3 from './images/AB3.jpg'
import AB2 from './images/AB2.jpg'
import AB6 from './images/AB6.png'
import AB7 from './images/AB7.jpeg'
import '../App.css'
import Sidebar from './sidebar';


const CarouselComponent = () => {
  return (
    <div className="carousel-with-sidebar">
      <Sidebar />
    <Carousel className="carousel-content">
        <Carousel.Item>
          
        <img
          className="d-block w-100 max-h-screen object-fit"
          src={AB6}
          alt="First slide"
        />
        <Carousel.Caption className='mb-80 mt-10'>
          <p className='w-60  ml-40 font-semibold hover:text-green-500 cursor-pointer'>"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well"..</p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100 max-h-screen object-fit"
          src={AB3}
          alt="second slide"
        />
        <Carousel.Caption>
          <h3 className='text-green-500'></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 max-h-screen object-fit"
          src={AB7}
          alt="Second slide"
          
        />
        <Carousel.Caption>
          <h3 className='text-green-500'></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
