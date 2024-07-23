// import React from 'react'
// import './Aboutprofile.css';
// import cp from './images/cp.jpg';

// const Aboutprofile = () => {
//   return (
//     <div>
//       <section className="aboutprofile">
//         <div className="main-img">
//             <img src={cp} alt=""  className='profile'/>
//         </div>
//         <div className="text">
//             <h4>About</h4>
//             <h1>We Guarantee Your Bussiness <br/> Success - Love to Help you </h1>
//             <hr/>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, deserunt?</p>
//             <div className="last-text">
//                 <div className="text1">
//                     <h3>500+</h3>
//                     <h5>Projects Done</h5>
//                 </div>
//                 <div className="text2">
//                     <h3>20K</h3>
//                     <h5>Happy Clients</h5>
//                 </div>
//             </div>
//             <a href="/aboutus" className=' abtbtn btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0' style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', display: 'block', width: 'fit-content' }}>Read More</a>
//         </div>
        
//       </section>
//     </div>
//   )
// }

// export default Aboutprofile;




import React from 'react'
import './Aboutprofile.css';
import cp from './images/cp.jpg';

const Aboutprofile = () => {
  return (
    <div>
      <section className="aboutprofile">
        <div className="main-img">
            <img src={cp} alt="" className='profile' />
        </div>
        <div className="text">
            <h2 className='text-xl -mt-10'>Who We Are and How We Help</h2>
            <h1>We Guarantee Your Learning <br/> Success - Love to Help You</h1>
            <hr />
            <p> Learning shouldn't be stressful. We empower you with the knowledge and skills you need to conquer challenges and thrive. Achieve your learning goals with confidence!</p>
            <div className="last-text">
                <div className="text1">
                    <h3>500+</h3>
                    <h5>Projects Done</h5>
                </div>
                <div className="text2">
                    <h3>20K</h3>
                    <h5>Happy Clients</h5>
                </div>
                <div className="text3">
                    <h3>200+</h3>
                    <h5>Live Projects Hosted</h5>
                </div>
            </div>
            <a href="/about" className='abtbtn btn btn-success btn-lg'>Read More</a>
        </div>
      </section>
    </div>
  )
}

export default Aboutprofile;

