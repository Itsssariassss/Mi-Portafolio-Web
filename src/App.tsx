import React from 'react';

const App = () => {
    return (
        <div className="font-sans bg-gray-50">


            {/* Barra de Navegacion */}
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <nav className="max-w-7x1 mx-auto flex justify-between items-center">
                    <div className="text-xl font-semibold">Mi Portafolio Web</div>
                    <ul className="flex space-x-6">
                        <li><a href="#inicio" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#acerca" className="hover:text-gray-300">Sobre mi</a></li>
                        <li><a href="#proyectos" className="hover:text-gray-300">Proyectos</a></li>
                        <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
                    </ul>
                </nav>
            </header>

            {/* Seccion Inicio */}

            <section id="inicio" className="flex items-center justify min-h0screen bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                <div className="text-center">
                    <h1 className="text-5xl font-blod">Texto...</h1>
                    <p className="mt-4 text-lg">texto...</p>
                </div>
            </section>

            {/* Seccion Acerca de */}

            <section id="acerca" className="py-20 px-6 bg-white">
                <div className="max-w-7x1 mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-gray-800">Texto...</h2>
                    <p className="mt-4 text-lg text-gray-600">texto...</p>
                    <div className="mt-8">
                        <h3 className="text-2xl font-medium text-gray-800">Habilidades</h3>
                        <ul className="mt-4 text-lg text-gray-600">
                            {/* <li><span className="font-bold">HTML</span> - 95%</li>
                        <li><span className="font-bold">CSS</span> - 90%</li>
                        <li><span className="font-bold">JavaScript</span> - 85%</li>
                        <li><span className="font-bold">ReactJS</span> - 75%</li> */}
                            <li>HTML / CSS</li>
                            <li>JavaScript / Typescript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Seccion Proyectos */}

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

            {/* Seccion contacto */}

            <section id="contacto" className="py-20 px-6 bg-white">
                <div className="max-w-7x1 mx-auto">
                    <h2 className="text-4xl font-semibold text-gray-800 text-center">Contacto</h2>
                    <p className="text-lg text-gray-600 text-center mt-4">Texto...</p>
                    <form className="mt-8 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
                        <div className="mb-6">
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input type="text" id="nombre" className="mt-2 block w-full px-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Tu nombre" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                            <input type="email" id="email" className="mt-2 block w-full px-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Tu correo Electronico" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                            <textarea id="mensaje" rows={4} className="mt-2 block w-full px-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Tu mensaje"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 round-md hover:bg-blue-700 focus:outline-none focus-ring-2 focus:ring-blue-500">Enviar</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default App;