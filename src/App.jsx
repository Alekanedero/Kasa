import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.css';

import About from './pages/About';
import Home from './pages/Home';
import House from './pages/House';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
   return (
      <Router>
         <div className="app-container">
            <Header />
            <div className="content-container">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/house/:id" element={<House />} />

                  <Route path="*" element={<NotFound />} />
               </Routes>
            </div>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
