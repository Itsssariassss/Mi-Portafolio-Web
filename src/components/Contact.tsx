import React from "react";

const Contacts = () => {

    return (
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
    );
}



export default Contacts;