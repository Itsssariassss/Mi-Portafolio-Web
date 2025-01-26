import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <section id="inicio" className="bg-[#0A192F] text-white py-20 px-12 flex flex-col justify-center items-center pt-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Hola, soy <br />
            <span className="text-5xl font-extrabold text-[#64FFDA] mb-1 typing-effect inline-block">
              Jade Arias
            </span>
          </h1>
          <p className="text-lg mb-4">Frontend Developer • Web Developer</p>

          {/* Botones con íconos */}
          <div className="flex justify-center gap-6 mt-6">
            {/* GitHub */}
            <a
              href="https://github.com/Itsssariassss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-[#64FFDA] hover:text-black transition"
            >
              <div className="bg-[#0A192F] border-2 border-[#64FFDA] p-4 rounded-full hover:bg-[#64FFDA]">
                <FaGithub size={30} />
              </div>
              <span className="mt-2 text-sm">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jade-ariasss-97959133b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-[#64FFDA] hover:text-black transition"
            >
              <div className="bg-[#0A192F] border-2 border-[#64FFDA] p-4 rounded-full hover:bg-[#64FFDA]">
                <FaLinkedin size={30} />
              </div>
              <span className="mt-2 text-sm">LinkedIn</span>
            </a>

            {/* Gmail */}
            <a
              href="mailto:jade.arias@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-[#64FFDA] hover:text-black transition"
            >
              <div className="bg-[#0A192F] border-2 border-[#64FFDA] p-4 rounded-full hover:bg-[#64FFDA]">
                <FaEnvelope size={30} />
              </div>
              <span className="mt-2 text-sm">Gmail</span>
            </a>

            {/* CV */}
            <a
              href="/images/CV JADE PICHARDO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-[#64FFDA] hover:text-black transition"
            >
              <div className="bg-[#0A192F] border-2 border-[#64FFDA] p-4 rounded-full hover:bg-[#64FFDA]">
                <FaFilePdf size={30} />
              </div>
              <span className="mt-2 text-sm">CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
