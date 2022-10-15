import React from 'react';
import Navigation from './Navigation';
import cactus from '../assets/images/steiger-skinny.jpg'

function Header() {
    return (
        <div>
            <img src={cactus} alt="Cactus" className="hero"/>
            {/* <h1>Tracy Rose Guajardo</h1> */}
            <Navigation />
        </div>
    );
}

export default Header;
