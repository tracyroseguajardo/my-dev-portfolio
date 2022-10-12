import React from 'react';
import styles from '../styles.css'
import salutations from '../assets/images/salutations-screenshot.png';
import weather from '../assets/images/weather-dashboard-screenshot.png';
import gator from '../assets/images/gator-tracker-screenshot.png';
import booksearch from '../assets/images/book-search-engine-screenshot.png';


function Project() {
    return (
        <main>
            <div>
                <h2>Salutations from the Sun</h2>
                <img src={salutations} alt="Salutations from the Sun" className='screenshot' />;
                <p>deployed app</p>
                <p>github repo</p>
            </div>

            <div>
                <h2>Weather Dashboard</h2>
                <img src={weather} alt="Weather Dashboard" className='screenshot' />;
                <p>deployed app</p>
                <p>github repo</p>
            </div>

            <div>
                <h2>Gator Tracker</h2>
                <img src={gator} alt="Gator Tracker" className='screenshot' />;
                <p>deployed app</p>
                <p>github repo</p>
            </div>

            <div>
                <h2>Book Search Engine</h2>
                <img src={booksearch} alt="Book Search Engine" className='screenshot' />;
                <p>deployed app</p>
                <p>github repo</p>
            </div>
            <div>
                <h2>Weather Dashboard</h2>
                <img src={weather} alt="Weather Dashboard" className='screenshot' />;
                <p>deployed app</p>
                <p>github repo</p>
            </div>
        </main>

    );
}

export default Project;