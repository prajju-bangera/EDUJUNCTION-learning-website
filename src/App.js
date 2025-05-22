import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Platform from './components/Platform';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Pages
import Courses from './pages/Courses';
import PlatformList from './pages/PlatformList';

function App() {
  return (
    <Router>
            <CustomCursor />
      <Header />

      <Routes>
        {/* ✅ Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            {/* <Platform /> */}
            <Services />
            
          </>
        } />

        {/* ✅ Courses Page */}
        <Route path="/courses" element={<Courses />} />

        {/* ✅ Platform List Page */}
        <Route path="/platform" element={<PlatformList />} />
      </Routes>

      {/* ✅ Footer (if exists) */}
      {/* <Footer /> */}
<Footer/>
     
    </Router>
  );
}

export default App;
