import React from "react";

const Home: React.FC = () => {
    return (

        
        <section id="inicio" className="bg-[#0A192F] text-white py-20 px-12 flex flex-col md:flex-row items-center md:items-start">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg-justify-between">
                <div className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-4xl font-bold mb-4">Hola, soy <br /> <span className="text-5xl font-extrabold text-[#64FFDA] mb-6">Jade Arias</span></h1>
                    <p className="text-lg mb-6">  Desarrolladora Web apasionada por crear experiencias únicas.</p>
                    <div className="flex justify-center lg:justify-start gap-4 mb-6">
                        <a href="#contacto" className="bg-[#64FFDA] text-black py-2 px-4 rounded hover:bg-[#0A192F] border border-[#64FFDA] hover:text-[#64FFDA] transition">Hire Me</a>
                        <a href="/public/images/CV JADE PICHARDO.pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-[#64FFDA] text-[#64FFDA] py-2 px-4 rounded hover:bg-[#64FFDA] hover:text-black transition">Download CV</a>
                    </div>

                    {/* Iconos personales */}

                    <div className="flex justify-center lg:justify-start gap-4">
                        <a href="https://github.com/Itsssariassss" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/public/images/github.png"
                                alt="GitHub"
                                className="rounded-full border-4 border-highlight w-12 h-12 object-cover"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/jade-ariass-97959133b/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/public/images/linkedin.png"
                                alt="Linkedin"
                                className="rounded-full border-4 border-highlight w-12 h-12 object-cover"
                            />
                        </a>
                        <a href="mailto:jade.arias@outlook.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/public/images/gmail.png"
                                alt="Gmail"
                                className="rounded-full border-4 border-highlight w-12 h-12 object-cover"
                            />
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
                    <img src="/public/images/Perfil.JPG" alt="" className="rounded-full border-4 border-higlight w-64 h-64 object-cover" />
                </div>
                
            </div>

            
        </section>
        
    );
}

export default Home;