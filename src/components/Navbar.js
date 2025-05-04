import React, { useState } from 'react';
import logo from '../img/android app icon.png';
import grip from '../img/dots.png';


export default function Navbar(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleGripClick = () => {
    setMenuVisible(!menuVisible);
    const navbar = document.querySelector('.navbar');
    if (menuVisible) {
      navbar.classList.remove('blur');
    } else {
      navbar.classList.add('blur');
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo"/>
          <a href='$'>BLUESTOCK</a>
        </div>
        <div className="redirect">
          <li><a href='%'>PRODUCTS</a></li>
          <li><a href='%'>COMUNNITY</a></li>
          <li><a href='%'>MEDIA ▾</a></li>
          <li><a href='%'>SUPPORT</a></li>
          <li><a href='%'>LIVE NEWS</a>
            <button className="new-btn">NEW</button>
          </li>
        </div>
        
        <div className="left">
          <a className='signin-btn' href='$'>Sign In</a>
          <button className='sign-btn'>Sign Up Now</button>
          <div className="grip" onClick={handleGripClick}>
            <img src={grip} alt="Grip"/>
          </div>
          
          {menuVisible && (
            <div className="menu">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#signin">Sign In</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
