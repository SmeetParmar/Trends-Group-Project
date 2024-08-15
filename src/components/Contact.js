import React from 'react';

function Contact() {
  return (
    <div className="contact section-padding">
      <div className="container">
        <h2>Contact Us</h2>
        <p>If you have any questions or need more information, please feel free to contact us through the form below or visit us at our location.</p>
        <img src="https://example.com/location.jpg" alt="Our Location" />
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
