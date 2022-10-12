import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
        <Link to="/">
          <ul>Home</ul>
        </Link>

        <Link to="/portfolio">
            <ul>Portfolio</ul>
        </Link>

        <Link to="/resume">
            <ul>Resume</ul>
        </Link>

        <Link to="/about">
            <ul>About</ul>
        </Link>

        <Link to="/contact">
            <ul>Contact</ul>
        </Link>
        </div>
    );
}

export default Nav;