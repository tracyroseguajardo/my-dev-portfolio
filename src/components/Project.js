import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../styles.css'
import salutations from '../assets/images/salutations-screenshot.png';
import connectable from '../assets/images/connectable-screenshot.png';
import weather from '../assets/images/weather-dashboard-screenshot.png';
import gator from '../assets/images/gator-tracker-screenshot.png';
import booksearch from '../assets/images/book-search-engine-screenshot.png';
import planner from '../assets/images/daily-planner-screenshot.png';
import notetaker from '../assets/images/note-taker-screenshot.png';
import texteditor from '../assets/images/text-editor-screenshot.png';
import quiz from '../assets/images/timed-quiz-screenshot.png';
import password from '../assets/images/password-generator-screenshot.png';




function Project() {
    const apps = [
        {
            title: "Salutations from the Sun",
            image: salutations,
            repo: "https://github.com/krsparks2/salutations",
            deploy: "https://krsparks2.github.io/salutations/"
        },
        {
            title: "Connectable",
            image: connectable,
            repo: "https://github.com/LeaBryant/connect-able",
            deploy: "https://intense-oasis-97749.herokuapp.com/"
        },
        {
            title: "Weather Dashboard",
            image: weather,
            repo: "https://github.com/tracyroseguajardo/weather-dashboard",
            deploy: "https://tracyroseguajardo.github.io/weather-dashboard/"
        },
        {
            title: "Gator Tracker",
            image: gator,
            repo: "https://github.com/villettec/Gator_Aid",
            deploy: "https://gator-tracker-app.herokuapp.com/"
        },
        {
            title: "Book Search Engine",
            image: booksearch,
            repo: "https://github.com/tracyroseguajardo/book-search-engine",
            deploy: "https://limitless-crag-40769.herokuapp.com/"
        },
        {
            title: "Daily Planner",
            image: planner,
            repo: "https://github.com/tracyroseguajardo/daily-planner",
            deploy: "https://tracyroseguajardo.github.io/daily-planner/"
        },
        {
            title: "Text Editor",
            image: texteditor,
            repo: "https://github.com/tracyroseguajardo/jate-text-editor",
            deploy: "https://desolate-shelf-99414.herokuapp.com/"
        },
        {
            title: "Note Taker",
            image: notetaker,
            repo: "https://github.com/tracyroseguajardo/note-taker",
            deploy: "https://stark-mountain-87784.herokuapp.com/"
        },
        {
            title: "Timed Quiz",
            image: quiz,
            repo: "https://github.com/tracyroseguajardo/timed-quiz",
            deploy: "https://tracyroseguajardo.github.io/timed-quiz/"
        },
        {
            title: "Password Generator",
            image: password,
            repo: "https://github.com/tracyroseguajardo/password-generator",
            deploy: "https://tracyroseguajardo.github.io/password-generator/"
        },
    ]

    return (
        <div>
            <Container>
                <Row>
            {apps.map((app) => (
                <div className='card'>
                    <h2>{app.title}</h2>
                    <img src={app.image} alt={app.title} className='screenshot' />
                    <a href={app.deploy}>Take me to the Deployed App</a>
                    <a href={app.repo}>Take me to Github Repo</a>
                </div>
            ))}
            </Row>
            </Container>
            {/* <Container fluid="md">
                <Row>
                    <Col>
                        <h2>{app.title}</h2>
                        <img src={app.image} alt={app.title} className='screenshot' />
                        <a href={app.deploy}>deployed app</a>
                        <a href={app.repo}>github repo</a>
                    </Col>
                </Row>
            </Container> */}

        </div>

    );
}

export default Project;