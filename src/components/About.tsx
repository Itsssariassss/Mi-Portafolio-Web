import React from "react";

const About: React.FC = () => {
    return (
        <div id="acerca" className="bg-gray-900 text-white py-10 px-16 flex flex-col md:flex-row items-center md:items-start">
            <section className="bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-10 animate-fade-in">
                <h2 className="flex justify-center text-4xl font-bold text-white mb-4">Acerca de mí</h2>
                <p className="text-1xl text-gray-300 leading-relaxed">
                    ¡Hola! Soy Jade Arias, una desarrolladora web apasionada por crear soluciones digitales
                    que mezclen funcionalidad y diseño.
                </p>
                <p className="text-1xl text-gray-300 mt-4 leading-relaxed">
                    Me especializo en frontend y me encanta trabajar en proyectos que requieren creatividad
                    y atención al detalle. Siempre busco aprender y mejorar mis habilidades para ofrecer el mejor resultado.
                </p>
            </section>
        </div>
    );
};

export default About;