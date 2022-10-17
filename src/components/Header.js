import React from 'react';
import Navigation from './Navigation';
import cactus from '../assets/images/steiger-skinniest.jpg'

function Header() {
    return (
        <figure>
            <img src={cactus} alt="Cactus" className="hero"/>
            <Navigation />
            <h1>Tracy Rose Guajardo</h1>
        </figure>
    );
}

export default Header;
