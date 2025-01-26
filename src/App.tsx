import "tailwindcss/tailwind.css"
import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";


const App: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <RoadMap />
            <Footer />

        </div>
    );
};

export default App;