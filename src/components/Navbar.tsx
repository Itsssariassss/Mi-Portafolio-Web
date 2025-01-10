import React from 'react';

const Navbar: React.FC = () => {
    return (

        <div>
            <nav className="bg-[#0A192F] text-white py-4 px-8 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <i className="fas fa-code mr-2"></i>
                    AriasBytes
                </div>
                <ul className="flex gap-8">
                    <li><a href="#inicio" className="hover:text-[#64FFDA]">Inicio</a></li>
                    <li><a href="#acerca" className="hover:text-[#64FFDA]">Sobre mi</a></li>
                    <li><a href="#proyectos" className="hover:text-[#64FFDA]">Proyectos</a></li>
                    <li><a href="#contacto" className="hover:text-[#64FFDA]">Contacto</a></li>
                </ul>
            </nav>

            {/* Linea divisoria */}
            <div className="lg-w-1/2 flex justify-center lg:justify-end">
                <img src="" alt="" className="rounded-md border-4 border-highlight w-72 object-cover shadow-md" />
            </div>
        </div>

    );
};

export default Navbar;