import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/index.css';

import About from './pages/About';
import Home from './pages/Home';
import House from './pages/House';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/house/*" element={<House />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
