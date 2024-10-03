// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';


function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Services />
            <Skills />
          
           
        </div>
    );
}

export default App;
