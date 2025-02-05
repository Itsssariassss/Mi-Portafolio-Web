import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const navItems = [
        { id: "inicio", label: "Inicio" },
        { id: "acerca", label: "Sobre mí" },
        { id: "skills", label: "Habilidades" },
        { id: "proyectos", label: "Proyectos" },
        { id: "roadmap", label: "Progreso" }
    ];

    return (
        <>
            <header className={`bg-[#0A192F]/95 backdrop-blur-sm text-white fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
                <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-xl md:text-2xl font-bold flex items-center">
                        <i className="fas fa-code mr-2 text-[#64FFDA]"></i>
                        <span className="hover:text-[#64FFDA] transition-colors">
                            AriasBytes
                        </span>
                    </div>

                    {/* Botón Menú Hamburguesa */}
                    <button
                        className="text-2xl md:hidden focus:outline-none hover:text-[#64FFDA] transition-colors p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>

                    {/* Lista de Navegación */}
                    <div className={`
                        fixed md:relative top-[72px] md:top-0 right-0 
                        h-[calc(100vh-72px)] md:h-auto w-64 md:w-auto 
                        bg-[#0A192F]/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none
                        transform transition-transform duration-300 ease-in-out
                        ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                    `}>
                        <ul className="
                            flex flex-col md:flex-row items-center 
                            md:gap-8 pt-8 md:pt-0
                            h-full md:h-auto
                        ">
                            {navItems.map((item) => (
                                <li key={item.id} className="w-full md:w-auto">
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.id);
                                        }}
                                        className="
                                            block text-center px-6 py-4 md:py-2 
                                            hover:text-[#64FFDA] hover:bg-white/5 md:hover:bg-transparent
                                            transition-all duration-300
                                            text-lg md:text-base
                                        "
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <hr className="border-t border-[#64FFDA]/20" />
            </header>
            
            {/* Overlay para cerrar el menú en móvil */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default Navbar;