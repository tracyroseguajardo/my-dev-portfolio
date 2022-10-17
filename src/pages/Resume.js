import React from 'react';

const Resume = () => {
    return(
        <div className='resume'>
            <div>
                <h4>Languages & Proficiencies</h4>
                <ul>
                    FRONT END
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.js</li>
                    <li>Handlebars.js</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <br></br>
                    BACK END
                    <li>Node</li>
                    <li>Express</li>
                    <li>Mongoose</li>
                    <li>Sequelize</li>
                    <br></br>
                    DATABASES
                    <li>GraphQL</li>
                    <li>Mongo</li>
                    <li>SQL</li>
                    <li>Third Party APIs</li>
                    <br></br>
                    ETC
                    <li>Insomnia</li>
                    <li>Apollo Sandbox</li>
                    <li>Heroku Deployment</li>
                </ul>
            </div>
            <div className='file'>
            <h2>Resume coming soon!</h2>
            </div>
        </div>

    );
};

export default Resume;