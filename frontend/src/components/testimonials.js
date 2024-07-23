import React from 'react'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import p122 from './images/p122.jpg'
import p1221 from './images/p1221.jpg'
import cw from './images/cw.jpg'
import { FaStar } from "react-icons/fa6";
import './testimonials.css'


const Testimonials = () => {
  return (
    <div>
        <h1 className='text-center'>Testimonials</h1>
        <ul className='star'>
        <li><FaStar/></li>
        <li><FaStar /></li>
        <li><FaStar /></li>
        <li><FaStar/></li>
        <li><FaStar /></li>
        </ul>
      <header>
        <div className="cont">
            <div className="cont_left">
                <h1>Read what our customers love about us</h1>
                <p>Over 200 companies frim diverse sectors consult us to enhance the user experience of their products and services</p>

                <p>We have helped companies increase their customer base and generate multifold revenue with our service</p>
                <button className='font-bold b1'>Read our success stories</button>
            </div>
            <div className="cont_right">
                <div className="cards">
                    <img src={p122} alt="" className='imgg'/>
                    <div className="cards_content">
                        <span><ImQuotesLeft className='icon'/></span>
                        <div className="cards_details">
                            <p>We had a great time collaboraring with the Filament team. They have my high recommendation!</p>
                            <h4>-Steven</h4>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <img src={p1221} alt="" className='imgg' />
                    <div className="cards_content">
                        <span><ImQuotesLeft className='icon'/></span>
                        <div className="cards_details">
                            <p>The team drastically improved our learning's user experiences & increased our knowledge outreach.</p>
                            <h4>-Mark</h4>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <img src={cw} alt="" className='imgg rounded-lg'/>
                    <div className="cards_content">
                        <span><ImQuotesLeft className='icon' /></span>
                        <div className="cards_details">
                            <p>I absolutely loved working with the amazing team. Complete experts at what they do!</p>
                            <h4>-Andrew</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Testimonials;

<span><ImQuotesRight /></span>
