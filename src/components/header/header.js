import React from 'react';
import './header.css';
import {Link} from "@material-ui/core";


function Header(props) {
    return (
        <href to='/'>
        <header className='header'>
            <div className='container'>
                <div className='header-brand'>{props.brand}</div>
            </div>
        </header>
        </href>
    );
}

export default Header ;