import React, { useState } from "react";

const About: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div id="acerca" className="py-8 md:py-12 bg-gray-900">
            <section className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl max-w-4xl mx-auto 
                transform hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Contenedor de la imagen con efectos */}
                    <div className="md:w-1/3 relative group">
                        <div className="absolute -inset-1 bg-[#64FFDA]/20 rounded-full blur-md 
                            group-hover:bg-[#64FFDA]/30 transition-all duration-300"></div>
                        <img
                            src="/images/Perfil.JPG"
                            alt="Jade Arias"
                            className="relative rounded-full border-4 border-[#64FFDA] w-56 h-56 sm:w-64 sm:h-64 
                                object-cover shadow-lg transform transition-transform duration-300 
                                group-hover:scale-105"
                        />
                    </div>

                    {/* Contenedor del texto */}
                    <div className="md:w-2/3 space-y-6 text-justify md:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#64FFDA] 
                            to-teal-200 bg-clip-text text-transparent">
                            Acerca de mí
                        </h2>

                        <div className="space-y-4">
                            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                                ¡Hola!, Soy Jade Arias. Una desarrolladora web apasionada por crear soluciones digitales
                                que mezclen funcionalidad y diseño.
                            </p>

                            <div className="relative">
                                <p className={`text-lg sm:text-xl text-gray-300 leading-relaxed
                                    ${!isExpanded && "line-clamp-3"}`}>
                                    Me especializo en frontend y me encanta trabajar en proyectos que requieren creatividad
                                    y atención al detalle. Siempre busco aprender y mejorar mis habilidades para ofrecer el
                                    mejor resultado. Me encanta colaborar en equipo y contribuir a la creación de productos
                                    que tengan un impacto positivo en las personas. Mi pasión por el aprendizaje continuo me
                                    lleva a explorar nuevas tecnologías y enfoques para resolver problemas de manera
                                    innovadora.
                                </p>
                                {!isExpanded && (
                                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t 
                                        from-gray-800 to-transparent"></div>
                                )}
                            </div>

                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="inline-flex items-center gap-2 text-[#64FFDA] text-lg font-semibold 
                                    hover:text-teal-300 transition-colors duration-200"
                            >
                                {isExpanded ? "Leer menos" : "Leer más"}
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-200 
                                        ${isExpanded ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;