import React, { useState } from "react";

const About: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div id="acerca" className="bg-gray-900 text-white py-10 px-16 flex flex-col md:flex-row items-center md:items-start">
            <section className="bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-10 animate-fade-in flex flex-col md:flex-row items-center md:items-start">
                {/* Foto a la izquierda */}
                <div className="mb-6 md:mb-0 md:w-1/3">
                    <img
                        src="/public/images/Perfil.JPG"
                        alt="Jade Arias"
                        className="rounded-full border-4 border-highlight w-64 h-64 object-cover"
                    />
                </div>

                <div className="md:w-2/3 md:ml-8 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-4">Acerca de mí</h2>
                    <p className="text-xl text-gray-300 leading-relaxed text-justify">
                        ¡Hola!, Soy Jade Arias. Una desarrolladora web apasionada por crear soluciones digitales
                        que mezclen funcionalidad y diseño.
                    </p>

                    <p
                        className={`text-xl text-gray-300 mt-5 leading-relaxed text-justify ${isExpanded ? "block" : "line-clamp-3"}`}
                    >
                        Me especializo en frontend y me encanta trabajar en proyectos que requieren creatividad
                        y atención al detalle. Siempre busco aprender y mejorar mis habilidades para ofrecer el
                        mejor resultado. Me encanta colaborar en equipo y contribuir a la creación de productos
                        que tengan un impacto positivo en las personas. Mi pasión por el aprendizaje continuo me
                        lleva a explorar nuevas tecnologías y enfoques para resolver problemas de manera
                        innovadora.
                    </p>

                    {/* Botón para leer más / leer menos */}
                    <button
                        onClick={toggleText}
                        className="text-[#64FFDA] mt-4 text-lg font-semibold hover:underline"
                    >
                        {isExpanded ? "Leer menos" : "Leer más"}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;
