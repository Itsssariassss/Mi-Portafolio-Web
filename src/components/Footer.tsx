import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0A192F] text-white py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-center space-y-6">
                    {/* Frase motivacional con decoración */}
                    <div className="relative">
                        <p className="text-lg sm:text-xl italic text-[#64FFDA] font-light">
                            Dream big, work hard, stay focused.
                        </p>
                        {/* Decoradores laterales */}
                        <span className="hidden sm:block absolute top-1/2 -left-8 w-6 h-[1px] bg-[#64FFDA]/30"></span>
                        <span className="hidden sm:block absolute top-1/2 -right-8 w-6 h-[1px] bg-[#64FFDA]/30"></span>
                    </div>

                    {/* Línea divisoria con gradiente sutil */}
                    <div className="w-full max-w-xs sm:max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#64FFDA]/30 to-transparent"></div>

                    {/* Copyright con año dinámico y hover effect */}
                    <p className="text-sm text-gray-400 hover:text-[#64FFDA] transition-colors duration-300">
                        © {new Date().getFullYear()} Jade Arias
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;