import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/home';
import ProjectsHome from './pages/projects/projectsHome';
import SecurityHome from './pages/security/securityHome';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/projects' element={<ProjectsHome />} />
                <Route path='/security' element={<SecurityHome />} />
            </Routes>
        </Router>
    );
}
 
export default App;