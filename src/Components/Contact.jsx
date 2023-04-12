import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <div id='contact'>
      <div className='icons'>
      <FacebookIcon/>
      <TwitterIcon/>
      <LinkedInIcon/>
      </div>
      


      <h3>Send Mail</h3>
      <div className='contact-input' >
        <input type="email" placeholder='example@gmail.com' />
          <a >Contact</a>
      </div>
    </div>
  )
}

export default Contact