import "tailwindcss/tailwind.css"
import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Contacts from "./components/Contact";


const App: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Home />
            <About />
            <Proyects />
            <Contacts />\

        </div>
    );
};

export default App;