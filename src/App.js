import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import About from './pages/About';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
  //  <>
  //  <h1>Hello</h1>
  //  </>
         <Router>
         <div className="flex-column justify-flex-start min-100-vh">
           <Header />
           <div className="container">
             {/* Wrap Route elements in a Routes component */}
             <Routes>
               {/* Define routes using the Route component to render different page components at different paths */}
               {/* Define a default route that will render the Home component */}
               <Route 
                 path="/" 
                 element={<About />} 
               />
               {/* Define a route that will take in variable data */}
               <Route 
                 path="/portfolio" 
                 element={<Portfolio />} 
               />
               <Route 
                 path="/about" 
                 element={<About />} 
               />
               <Route 
                 path="/contact" 
                 element={<Contact />} 
               />
               <Route 
                 path="/resume" 
                 element={<Resume />} 
               />
             </Routes>
           </div>
           <Footer />
         </div>
       </Router>
  );
}

export default App;
