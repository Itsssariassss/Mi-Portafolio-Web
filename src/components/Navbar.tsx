import React, { useState } from 'react';

const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
     const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsOpen(false);

     };

        return (

            <div>
                <header className="bg-[#0A192F] text-white fixed w-full z-50 shadow-lg">
                    <nav className="container mx-auto px-3 py-1 flex justify-between items-center">
                        {/* Logo */}
                        <div className="text-2xl font-bold">
                            <i className="fas fa-code mr-2"></i>
                            AriasBytes
                        </div>

                        {/* Botón Menú Hamburguesa */}
                        <button
                            className="text-2xl md:hidden focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isOpen ? '✖️' : '☰'}
                        </button>

                        {/* Lista de Navegación */}
                        <ul
                            className={`md:flex md:items-center md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0A192F] md:bg-transparent transition-all duration-300 ${isOpen ? 'block' : 'hidden'
                                }`}
                        >
                            <li>
                                <a href="#inicio" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("inicio");
                                }} className="block px-2 py-2 hover:text-[#64FFDA]">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#acerca" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("acerca");
                                }} className="block px-2 py-2 hover:text-[#64FFDA]">
                                    Sobre mí
                                </a>
                            </li>
                            <li>
                                <a href="#skills" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("skills");
                                }} className="block px-2 py-2 hover:text-[#64FFDA]">
                                    Habilidades
                                </a>
                            </li>
                            <li>
                                <a href="#proyectos" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("proyectos");
                                }} className="block px-2 py-2 hover:text-[#64FFDA]">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a href="#contacto" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("contacto");
                                }} className="block px-2 py-2 hover:text-[#64FFDA]">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* Línea Divisoria (puedes duplicarla para otras secciones) */}
                    <hr className="border-t border-[#64FFDA] opacity-30 mt-4" />
                </header>


            </div>

        );
    };

    export default Navbar;