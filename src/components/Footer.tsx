import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0A192F] text-white py-8">
            <div className="container mx-auto text-center">
                {/* Frase motivacional */}
                <p className="text-lg italic text-[#64FFDA] mb-4">
                    Dream big, work hard, stay focused.
                </p>
                {/* Línea divisoria */}
                <hr className="border-t border-[#64FFDA] opacity-30 mb-4" />
                {/* Copyright */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Jade Arias. 
                </p>
            </div>
        </footer>
    );
};

export default Footer;
