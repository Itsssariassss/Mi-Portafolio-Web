import React from "react";

const Contacts: React.FC = () => {

    return (
        <section id="contacto" className="bg-[#0A192F] text-white py-16 px-8 flex flex-col md:flex-row items-center md:items-start">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-10 animate-fade-in">

                {/* Formulario de contacto */}
                <div>
                    <h2 className="flex justify-center text-2xl font-bold mb-6">Contáctame</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full bg-[#333333] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#64FFDA]"
                        />
                        <input type="email" placeholder="Correo Electronico"
                            className="w-full bg-[#333333] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#64FFDA]" />
                        <textarea id="Message" placeholder="Mensaje" rows={5}
                            className="w-full bg-[#333333] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#64FFDA]"></textarea>
                        <button type="submit" className="bg-[#64FFDA] text-black px-6 py-2 rounded-lg hover:bg-[#52e0c7] transition-colors">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </section>
    );
}



export default Contacts;