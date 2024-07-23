import React from 'react';
import './help.css';
import { TbBrand4Chan } from "react-icons/tb";
import { IoDiamond } from "react-icons/io5";
import { FaRocket } from "react-icons/fa";

const Help = () => {
  return (
    <div className='help'>
      <div className="help-section" id="help-section">
        <h2 className='-mt-10'>Service</h2>
        {/* <p id="paragraph">
        We offer personalized learning solutions to empower you.  Unlock your potential with customized resources, expert guidance, and a supportive community. Achieve your learning goals with confidence!
        </p> */}
        <div className="cardie">
          <div className="cardy">
            <TbBrand4Chan className='i' />
            <div className="contentent">
              <h3>Web Development</h3>
              <p> We take your vision and transform it into captivating websites. Imagine user-friendly interfaces, seamless functionality, and an online presence that resonates.</p>
              <p> Our expertise in web development brings your dreams to life.</p>
            </div>
          </div>

          <div className="cardy">
            <IoDiamond className='i' />
            <div className="contentent">
              <h3>App Development</h3>
              <p>Turn your groundbreaking app ideas into reality. We build high-performing and user-centric applications for mobile and web, ensuring a powerful and engaging experience for your users.</p>
              <p>Let's collaborate and make your app vision a success.</p>
            </div>
          </div>

          <div className="cardy">
            <FaRocket className='i' />
            <div className="contentent">
              <h3>Content Designer</h3>
              <p> Compelling content is your key to audience engagement. Our content designers craft captivating website copy, app descriptions, and marketing materials that elevate your brand story and user experience. </p>
              <p>We speak directly to your target audience, ensuring your message resonates clearly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
