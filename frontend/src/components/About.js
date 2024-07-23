import {React} from 'react'
import AB17 from './images/AB17.jpg'
import AB19 from './images/AB19.jpg'
import D1 from './images/D1.jpg'
import D2 from './images/D2.jpg'
import D3 from './images/D3.jpg'
import D4 from './images/D4.jpg'
import D5 from './images/D5.jpg'
import D6 from './images/D6.jpg'
import D7 from './images/D7.jpg'
import D8 from './images/D8.jpg'
import './About.css'
import Sidebar from './sidebar';
import NavigationButtons from './NavigationButtons'

const About = () => {
 
  return (
    <>
     
    <div className='heading'>

        <h1 className='-mb-3'>𝓐𝓫𝓸𝓾𝓽 𝓤𝓼</h1>
        <div className="image-row grid grid-cols-8  border-rounded cursor-pointer ml-20 -mt-4 cool">
          <img src={D1} alt="Image 1" className="rounded-full h-20 w-20 mr-4  p-2" />
          <img src={D2} alt="Image 2" className="rounded-full h-20 w-20 mr-4 p-2" />
          <img src={D3} alt="Image 3" className="rounded-full h-20 w-20 mr-4 p-2" />
          <img src={D4} alt="Image 4" className="rounded-full h-20 w-20 mr-4 p-2" />
          <img src={D5} alt="Image 5" className="rounded-full h-20 w-20 mr-4 p-2" />
          <img src={D6} alt="Image 6" className="rounded-full h-20 w-20 p-2" />
          <img src={D7} alt="Image 6" className="rounded-full h-20 w-20 p-2" />
          <img src={D8} alt="Image 6" className="rounded-full h-20 w-20 p-2" />
        </div>
        <p className='text-black text-md mt-4 text-2xl font-semibold' style={{}}>Executive Teams
        </p>
      
    </div>
    <div className="container">
    <section className="about">
     <div className="about-image">
        <img src={AB17} alt="" />
     </div>
     <div className="about-content">
        <h2>𝒲𝒶𝓇𝓂 𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜 𝒥𝑜𝒾𝓃 𝑜𝓊𝓇 𝒯𝑒𝒶𝓂</h2>
        <p>Our faculty thrives in a collaborative environment where knowledge sharing and mutual support are paramount.
             We believe that strong faculty relationships lead to a richer learning experience for our students.
              Beyond expertise in their fields, our faculty members are approachable, friendly, and invested in the
               success of each student. This creates a welcoming atmosphere where students feel comfortable seeking
                guidance and engaging in meaningful discussions.</p>
        <a href="" class="read">Read More</a>
     </div>
</section>

<section className="about reverse flex justify-between">
          <div className="about-content mt-5">
            <h2>𝒞𝑜𝓃𝓃𝑒𝒸𝓉 𝒲𝒾𝓉𝒽 𝒰𝓈</h2>
            <p>Join us in fostering a community where collaboration and friendliness thrive. Our doors are always open
              for new ideas, discussions, and opportunities. By connecting with us, you become a part of a supportive
              network that values growth, innovation, and mutual respect.</p>
            <a href="" className="read">Learn More</a>
          </div>
          <div className="about-image">
            <img src={AB19} alt="AB18" className='w-100 h-100 ml-40' />
          </div>
        </section>
    </div>
    </>
  )
}

export default About;
