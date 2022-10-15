import React from 'react';
import headshot from '../assets/images/headshot.jpeg';

function Me(){
    return(
        <div>
            <img src={headshot} className='headshot' alt='TRG'/>          
        </div>
    );
}

export default Me;