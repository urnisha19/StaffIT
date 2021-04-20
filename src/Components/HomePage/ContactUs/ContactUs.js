import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-area">
            <div className="container">
                <div className="row d-flex py-5">
                    <div className="col-md-4 offset-md-1 col-12 col-sm-12">
                        <h3 className="text-brand">Let's handle your <br />project professionally</h3>
                        <p className="py-3" style={{ fontSize: '14px', lineHeight: '24px' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis expedita nulla perspiciatis.</p>
                    </div>
                    <div className="col-md-6 col-12 col-sm-12">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your email address..." />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / company’s name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="6" placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-block contact-send-button">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;