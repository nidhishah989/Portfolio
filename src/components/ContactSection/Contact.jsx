import React from 'react';
import "./contact.css";
import imgsit from '../../style/Images/contact_img.png';

function Contact() {
    return (
        <div className='container-fluid contactsection'>
            <div className='row py-4'>
                <div className='col-md-6 col-12'>
                    <div>
                    <h2 className='my-5'>Exploring opportunities for Collaboration!</h2>
                    <h5>If you have a project or job opening in mind, connect with me on <a href="https://www.linkedin.com/in/nidhishah989/" target="_blank" rel="noopener noreferrer" style={{ color: '#d64c31' }}>
                        LinkedIn </a> or email me using given form.
                        I'm excited to dive into discussions and hear about the exciting opportunities you have in store.</h5>
                    </div>    
                    <div>
                        <img src={imgsit}></img>
                    </div>
                </div>
                <div className='col-md-6 col-12 my-5 contactform position-relative'>
                    <div className="text-center mb-3 position-absolute top-0 start-50 translate-middle formtitle">
                        <h2 className='mx-4'>Contact Me</h2>
                    </div>
                    <div>
                    <form className='mb-5'>
                        <div className="mb-3 mt-5">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" name="fullName" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                        </div>

                        <div className="text-center mb-4">
                            <button type="submit" className="btn btn-large btn-primary position-absolute top-100 start-50 translate-middle">Send Email</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Contact