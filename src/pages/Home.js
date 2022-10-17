import React from 'react';
import Me from '../components/Me';

const Home = () => {
    return(
        <div className='home'>
            <div>
            <Me />
            </div>
            <div className='homer'>
            <h2> Hello World</h2>
            <p>Welcome to my portolio</p>
            </div>
        </div>

    );
};

export default Home;