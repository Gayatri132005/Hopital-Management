import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="hospital" />
      </div>
      <div className="banner">
        <h2> About Our Hospital</h2>
        <p>
          Established in 1996, we are a premier healthcare institution,
          dedicated to excellence in patient care, research, and innovation.
        </p>
        {/* <h3>Our Specialties</h3>
        <ul>
         <b> <li><strong>Emergency & Critical Care</strong></li></b>
          <li><strong>Cardiology & Heart Surgery</strong></li>
          <li><strong>Neurology & Neurosurgery</strong></li>
          <li> <strong>Oncology & Cancer Treatment</strong></li>
          <li><strong>Orthopedics & Maternity Care</strong></li>
        </ul> */}
        <h3>Why Choose Us?</h3>
        <p>
          ✅ 24/7 Emergency Services  
          <br>
          </br>
          ✅ Advanced Medical Technology  
          <br>
          </br>
          ✅ Expert & Compassionate Care  
          <br>
          </br>
          ✅ Affordable & Accessible Treatment  
        </p>
        <p> Your health is our priority. Experience world-class care with us.</p>
      </div>
    </div>
  );
};

export default Biography;
