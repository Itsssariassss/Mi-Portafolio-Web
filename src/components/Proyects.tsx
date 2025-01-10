import React from 'react';

const Proyects: React.FC  = () => {
    return (
    <section id="proyectos" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-800">Mis Proyectos</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rouded-lg shadow-md">
                    <h3 className="text-2x1 font-semibold text-gray-800">Proyecto 1</h3>
                    <p className="mt-4 text-lg text-gray-600">Descripcion del proyecto 1</p>
                    <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Ver más</a>
                </div>
                <div className="bg-white p-6 rouded-lg shadow-md">
                    <h3 className="text-2x1 font-semibold text-gray-800">Proyecto 2</h3>
                    <p className="mt-4 text-lg text-gray-600">Descripcion del proyecto 2</p>
                    <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Ver más</a>
                </div>
                <div className="bg-white p-6 rouded-lg shadow-md">
                    <h3 className="text-2x1 font-semibold text-gray-800">Proyecto 3</h3>
                    <p className="mt-4 text-lg text-gray-600">Descripcion del proyecto 3</p>
                    <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Ver más</a>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Proyects;