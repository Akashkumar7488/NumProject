import React from 'react'
import './Faculty.css'
import { FaUserTie, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import p from './images/p.jpeg';
import p2 from './images/p2.jpg'
import p3 from './images/p3.jpg'
import p4 from './images/p4.jpg'
const Faculty = () => {
  const navigate = useNavigate();

  return (
    <>
   <section className='mains'>
    <div className="mains-top">
      <h1>Attendence</h1>
      <FaUserTie className='icon'/>
    </div>
    <div className="users">
      <div className="card">
        <img src={p} alt="" />
        <h4>Akash Kumar</h4>
        <p>Web Designer</p>
        <div className="per">
          <table>
            <tr>
              <td><span>85%</span></td>
              <td><span>90%</span></td>
            </tr>
            <tr>
            <td>Month</td>
            <td>Year</td>
            </tr>
          </table>
        </div>
        <button>Profile</button>
      </div>

      <div className="card">
        <img src={p2} alt="" />
        <h4>Chiara</h4>
        <p>Programmer</p>
        <div className="per">
          <table>
            <tr>
              <td><span>79%</span></td>
              <td><span>75%</span></td>
            </tr>
            <tr>
            <td>Month</td>
            <td>Year</td>
            </tr>
          </table>
        </div>
        <button>Profile</button>
      </div>

      <div className="card">
        <img src={p3} alt="" />
        <h4>Elio</h4>
        <p>Developer</p>
        <div className="per">
          <table>
            <tr>
              <td><span>95%</span></td>
              <td><span>90%</span></td>
            </tr>
            <tr>
            <td>Month</td>
            <td>Year</td>
            </tr>
          </table>
        </div>
        <button>Profile</button>
      </div>

      <div className="card">
        <img src={p4} alt="" />
        <h4>Anaya</h4>
        <p>Freelancer</p>
        <div className="per">
          <table>
            <tr>
              <td><span>88%</span></td>
              <td><span>82%</span></td>
            </tr>
            <tr>
            <td>Month</td>
            <td>Year</td>
            </tr>
          </table>
        </div>
        <button>Profile</button>
      </div>
    </div>
   </section>

   <section className='attendence'>
    <div className="attendence-list">
      <h1>Attendence List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Date</th>
            <th>Join Time</th>
            <th>Logout Time</th>
            <th>Details</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Akash Kumar</td>
            <td>Web Designer</td>
            <td>23-01-24</td>
            <td>9:30AM</td>
            <td>6:30PM</td>
            <td><button>View</button></td>
          </tr>

          <tr>
            <td>02</td>
            <td>Chiara</td>
            <td>Programmer</td>
            <td>23-01-24</td>
            <td>9:30AM</td>
            <td>6:30PM</td>
            <td><button>View</button></td>
          </tr>

          <tr>
            <td>03</td>
            <td>Elio</td>
            <td>Developer</td>
            <td>23-01-24</td>
            <td>9:30AM</td>
            <td>6:30PM</td>
            <td><button>View</button></td>
          </tr>

          <tr>
            <td>04</td>
            <td>Anaya</td>
            <td>Freelancer</td>
            <td>23-01-24</td>
            <td>9:30AM</td>
            <td>6:30PM</td>
            <td><button>View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    
   </section>
   </>
  )
}

export default Faculty;
