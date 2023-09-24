import React from 'react';
import './Footer.css';
import logo from "../../assets/Images/logo.png";

export const Footer = () => {
    return (
        <>
            <div className="footer">
            <div className='logo'>
              <img src={logo} alt=''/>
            </div>
                <div className="first">
                    <h2>Food Swift</h2>
                    <h5>@ 2023 Rickey</h5>
                    <h5>Technologies Pvt.Ltd</h5>
                </div>
                <div className="second">
                    <h2>Company</h2>
                    <h5>About</h5>
                    <h5>Careers</h5>
                    <h5>Team</h5>
                    <h5>Swiggy One</h5>
                    <h5>Swiggy Instamart</h5>
                    <h5>Swiggy Genie</h5>
                    
                </div>
                <div className="third">
                    <h2>Contact us</h2>
                    <h5>Help and Support</h5>
                    <h5>Partner with us</h5>
                    <h5>Ride with us</h5>
                    
                </div>
                <div className="forth">
                    <h2>We deliver to:</h2>
                    <h5>Bangalore</h5>
                    <h5>Gurgaon</h5>
                    <h5>Hyderabad</h5>
                    <h5>Delhi</h5>
                    <h5>Mumbai</h5>
                    <h5>Pune</h5>
                </div>
            </div>
        </>
    )
}