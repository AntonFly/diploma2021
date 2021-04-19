import React from 'react';
import './footer.css';


function Footer(props) {
    return (
        <header className='footer'>
            <div className='container'>
                <div className='footer-info'>{props.footerInfo}</div>
            </div>
        </header>
    );
}

export default Footer;