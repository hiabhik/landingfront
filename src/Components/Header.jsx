import React from 'react';
import Navbar from './Navbar'

const Header = () => {
  return (
    <div id='main'>
      <Navbar/>
      <div className="name">
        <h1><span>Foreeteers</span> </h1>
        <p className='managed'>Managed Wordpress Hosting </p>
        <p className='details'>Test your Creativity with us</p>
        <a href="#"className='cv-btn' >Click Here</a>
      </div>
    </div>
  )
}

export default Header