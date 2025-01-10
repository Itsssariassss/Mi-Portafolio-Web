import React from "react";
import Habilidades from "./Skills";


const About: React.FC = () => {
    return (

        <div className="bg-gray-900 min-h-screen py-10">
            {/* Sección "Acerca de mí" */}
            <section className="bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-10">
                <h2 className="flex justify-center text-6xl font-bold text-white mb-4">Acerca de mí</h2>
                <p className="text-2xl text-gray-300 leading-relaxed">
                    ¡Hola! Soy Jade Alexa, una desarrolladora web apasionada por crear soluciones digitales
                    que mezclen funcionalidad y diseño.
                </p>
                <p className="text-2xl text-gray-300 mt-4 leading-relaxed">
                    Me especializo en frontend y me encanta trabajar en proyectos que requieren creatividad
                    y atención al detalle. Siempre busco aprender y mejorar mis habilidades para ofrecer el mejor resultado.
                </p>
            </section>

            <Habilidades />
        </div>

    );
};

export default About;