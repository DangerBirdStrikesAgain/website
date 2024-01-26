import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog/blog';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
        </Router>
    );
}
 
export default App;