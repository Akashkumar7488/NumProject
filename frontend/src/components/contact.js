import React from 'react'
import './contact.css';
import cont from './images/cont.svg'

const Contact = () => {
  return (
    <>
    <section className="contact">
        <div className="contactcontainer">
            <h2><img src={cont} className='h-20 w-20 inline-block' alt="" />
                Contact Us</h2>
            <div className="contact-wrapper">
            <div className="contact-info">
            <p className='text-xl -ml-40 mb-5'>𝑾𝒆'𝒓𝒆 𝒉𝒆𝒓𝒆 𝒕𝒐 𝒉𝒆𝒍𝒑! 𝑹𝒆𝒂𝒄𝒉 𝒐𝒖𝒕 𝒂𝒏𝒅<br/> 𝒄𝒐𝒏𝒏𝒆𝒄𝒕 𝒘𝒊𝒕𝒉 𝒐𝒖𝒓 𝒇𝒓𝒊𝒆𝒏𝒅𝒍𝒚 𝒕𝒆𝒂𝒎.</p>

                    <h3 className='-ml-40'>Contact Information</h3>
                    <p className='-ml-40'><i className="fas fa-phone"></i>+91 2323 2323 23</p>
                    <p className='-ml-40'><i className="fas fa-envelope "></i>React@gmail.com</p>
                    <p className='-ml-40'><i className="fas fa-map-marker-alt"></i>800007, AshokRajpath, Patna, India</p>
                </div>
                <div className="contact-form ">
                    <h3>Send us a message</h3>
                    <form action="">
                        <div className="form-group">
                            <input type="text" name='name' placeholder='Your Name' />
                        </div>
                        <div className="form-group">
                            <input type="email" name='email' placeholder='Your Email' />
                        </div>

                        <div className="form-group">
                            <textarea name="message" placeholder='Your Message'></textarea>
                        </div>
                        <button type='submit' className='contactbtn'>Send Message</button>
                    </form>
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact;
