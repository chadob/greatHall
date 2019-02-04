import React from 'react';
import "../styles/end.css";

export class End extends React.Component {
  render() {
    return (
      <div className="about">
  			<div className="about-left">
  				<img className="about-pic" src="../assets/profileSide.jpg" />
  			</div>
  			<div className="about-right">
          <div className="about-par">
            <p className="bio"> For as long as I can remember I have been enthralled with the ability to create. It is magic what we have been able to do with computers, and it is a joy to be a part of this medium.
              I am continually trying new things and looking to improve my skills.
            </p>
            <p className="contact">
              I would love to hear from you if you think that I might be able to bring my skills and passion to you and your company.
             Please contact me at chadnobrowne@gmail.com, (206) 679-0868, or through Linked In at the link below.
            </p>
            <a href="https://www.linkedin.com/profile/edit?locale=en_US&trk=profile-preview">
              <img src="../assets/linkedInLogo.png" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
