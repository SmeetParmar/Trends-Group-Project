
// /--------------------- DHRUV ---------------------/ 

import React from 'react';
import chefImage from '../assets/images/chef.jpg'; // Import the image from your local folder

function About() {
  return (
    <div className="about section-padding" style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 style={{ fontWeight: 'bold', color: '#003366' }}>About Us</h2>
            <h4 style={{ color: '#666', marginBottom: '20px' }}>Revolutionizing Your Dining Experience</h4>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <p>
                At FlavorWave, we believe in bringing the latest food trends to your plate. Our chefs are dedicated to creating innovative dishes that excite your taste buds.
              </p>
              <p>
                Our restaurant was founded with the mission to revolutionize the way people think about food. We blend traditional techniques with modern flavors, ensuring every dish is unique and unforgettable.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ position: 'relative', marginTop: '30px' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', backgroundColor: '#003366', borderRadius: '8px', transform: 'rotate(-3deg)' }}></div>
              <img src={chefImage} alt="Our Chefs" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', zIndex: '2' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
