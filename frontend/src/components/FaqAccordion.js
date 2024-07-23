import React from 'react'
import './FaqAccordion.css'
import Accordion from 'react-bootstrap/Accordion'
const FaqAccordion = () => {
  return (
    <div className='faq-section'>
      <div className="contaeens d-flex flex-column items-center">
        <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
        <p className='text-center mb-5'>Unsure of your academic direction? We can help you explore your interests</p>
        <Accordion defaultActiveKey="" flush>
            <Accordion.Item eventKey='0'>
             <Accordion.Header>What are the admission requirements for the IT courses ?</Accordion.Header>
              <Accordion.Body>
              Many institutions have dedicated webpages for each program outlining admission requirements. You can usually find these by searching
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
             <Accordion.Header>Does the institution offer financial aid or scholarships ?</Accordion.Header>
              <Accordion.Body>
              Most institutions have a financial aid office with dedicated staff to answer your questions. You can find their contact information on the institution's website. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
             <Accordion.Header>What is the campus life like at the institution ?</Accordion.Header>
              <Accordion.Body>
              you might find student testimonials or blogs on the website or social media that describe campus life. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
             <Accordion.Header>What are the career services offered by the institution ?</Accordion.Header>
              <Accordion.Body>
              Look for a "Career Services" section on the institution's website. This should provide information about career fairs, resume workshops, interview preparation, and job placement assistance.
              </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default FaqAccordion;
