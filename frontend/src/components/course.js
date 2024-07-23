import React from 'react';
import './course.css';
import AC5 from './images/AC5.jpg';
import AC6 from './images/AC6.jpg';
import AC7 from './images/AC7.jpg';
import AC8 from './images/AC8.jpg';
import AC9 from './images/AC9.jpg';
import AC10 from './images/AC10.jpg';
import { Card } from 'react-bootstrap';

const courses = [
  {
    id: 4,
    img: AC5,
    title: '',
    description: '𝐁𝐮𝐢𝐥𝐝 𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 𝐔𝐈𝐬 𝐰𝐢𝐭𝐡 𝐑𝐞𝐚𝐜𝐭! 𝐓𝐡𝐢𝐬 𝐥𝐢𝐛𝐫𝐚𝐫𝐲 𝐨𝐟𝐟𝐞𝐫𝐬 𝐚 𝐬𝐭𝐫𝐞𝐚𝐦𝐥𝐢𝐧𝐞𝐝 𝐚𝐩𝐩𝐫𝐨𝐚𝐜𝐡 𝐭𝐨 𝐜𝐫𝐞𝐚𝐭𝐢𝐧𝐠 𝐫𝐞𝐮𝐬𝐚𝐛𝐥𝐞 𝐜𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬.'
  },
  {
    id: 5,
    img: AC6,
    title: '',
    description: '𝐘𝐨𝐮𝐫 𝐠𝐚𝐭𝐞𝐰𝐚𝐲 𝐭𝐨 𝐚 𝐰𝐨𝐫𝐥𝐝 𝐨𝐟 𝐩𝐨𝐬𝐬𝐢𝐛𝐢𝐥𝐢𝐭𝐢𝐞𝐬! 𝐌𝐚𝐬𝐭𝐞𝐫 𝐰𝐞𝐛 𝐝𝐞𝐯, 𝐝𝐚𝐭𝐚 𝐬𝐜𝐢𝐞𝐧𝐜𝐞, 𝐨𝐫 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐰𝐢𝐭𝐡 𝐭𝐡𝐢𝐬 𝐯𝐞𝐫𝐬𝐚𝐭𝐢𝐥𝐞 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞.'
  },
  {
    id: 6,
    img: AC7,
    title: '',
    description: '𝐁𝐮𝐢𝐥𝐝 𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞𝐝 𝐰𝐞𝐛 𝐚𝐩𝐩𝐬 𝐰𝐢𝐭𝐡 𝐀𝐧𝐠𝐮𝐥𝐚𝐫. 𝐓𝐡𝐢𝐬 𝐟𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤 𝐩𝐫𝐨𝐯𝐢𝐝𝐞𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐥𝐢𝐤𝐞 𝐝𝐞𝐩𝐞𝐧𝐝𝐞𝐧𝐜𝐲 𝐢𝐧𝐣𝐞𝐜𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐩𝐨𝐰𝐞𝐫𝐟𝐮𝐥 𝐭𝐨𝐨𝐥𝐢𝐧𝐠.'
  },
  {
    id: 7,
    img: AC8,
    title: '',
    description: '𝐃𝐢𝐯𝐞 𝐝𝐞𝐞𝐩 𝐟𝐨𝐫 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞 𝐰𝐢𝐭𝐡 𝐂++. 𝐌𝐚𝐬𝐭𝐞𝐫 𝐭𝐡𝐢𝐬 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞 𝐟𝐨𝐫 𝐜𝐨𝐦𝐩𝐥𝐞𝐱 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞, 𝐠𝐚𝐦𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭, 𝐚𝐧𝐝 𝐝𝐞𝐦𝐚𝐧𝐝𝐢𝐧𝐠 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬.'
  },
  {
    id: 8,
    img: AC9,
    title: '',
    description: '𝐌𝐚𝐬𝐭𝐞𝐫 𝐜𝐨𝐫𝐞 𝐉𝐚𝐯𝐚 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞𝐬 𝐟𝐨𝐫 𝐞𝐧𝐭𝐞𝐫𝐩𝐫𝐢𝐬𝐞 𝐚𝐩𝐩𝐬, 𝐰𝐞𝐛 𝐝𝐞𝐯, 𝐀𝐧𝐝𝐫𝐨𝐢𝐝 𝐚𝐩𝐩𝐬, 𝐚𝐧𝐝 𝐦𝐨𝐫𝐞! 𝐋𝐞𝐚𝐫𝐧 𝐬𝐲𝐧𝐭𝐚𝐱 𝐚𝐧𝐝 𝐨𝐛𝐣𝐞𝐜𝐭-𝐨𝐫𝐢𝐞𝐧𝐭𝐞𝐝 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐜𝐨𝐧𝐜𝐞𝐩𝐭𝐬.'
  },
  {
    id: 9,
    img: AC10,
    title: '',
    description: '𝐒𝐢𝐦𝐩𝐥𝐢𝐟𝐲 𝐑𝐞𝐚𝐜𝐭 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐰𝐢𝐭𝐡 𝐍𝐞𝐱𝐭.𝐣𝐬. 𝐋𝐞𝐯𝐞𝐫𝐚𝐠𝐞 𝐝𝐚𝐭𝐚 𝐟𝐞𝐭𝐜𝐡𝐢𝐧𝐠, 𝐒𝐒𝐑, 𝐚𝐧𝐝 𝐒𝐒𝐆 𝐟𝐨𝐫 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐭 𝐚𝐧𝐝 𝐒𝐄𝐎-𝐟𝐫𝐢𝐞𝐧𝐝𝐥𝐲 𝐚𝐩𝐩𝐬.'
  }
];

const Course = () => {
  return (
    <div className="courses-page">
      <header className="height-75 d-flex flex-column align-items-center justify-content-center text-light">
        <div className="courcontainer text-center">
          <h1 className="fw-semibold">Our Courses</h1>
          <p className="w-75 mx-auto mb-5">
          Dive into a world of enriching courses designed to empower your learning journey.<br/> We offer a diverse range of topics, from in-demand tech skills to creative pursuits,<br/> ensuring you find the perfect fit to achieve your goals.
          </p>
        </div>
      </header>

      <div className="courcontainer py-5">
        <div className="row g-4">
          {courses.map((course) => (
            <div key={course.id} className="col-lg-6">
              <Card className="text-white scale-hover-effect">
                <Card.Img src={course.img} />
                <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-md-5">
                  <Card.Title className="fs-1 text-danger">{course.title}</Card.Title>
                  <Card.Text className="text-center mt-60">{course.description}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
