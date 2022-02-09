import React from 'react';
import Logo from '../assets/logo.svg'

import './FooterStyles.css'
const Footer = () => {
return (
    <div className='footer'>
    <div className='container-fluid'>
        <div className='row'>
        <hr />
        <div className='text col-lg-12' >
                Powered by <img src={Logo} />
            </div>
          
        </div>
    </div>
        
    </div>
)
};

export default Footer;
