import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Home: React.FC = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      text: "GitHub",
      href: "https://github.com/Itsssariassss"
    },
    {
      icon: FaLinkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/jade-ariass-97959133b/"
    },
    {
      icon: FaEnvelope,
      text: "Gmail",
      href: "mailto:jade.arias@outlook.com"
    },
    {
      icon: FaFilePdf,
      text: "CV",
      href: "/images/CV JADE PICHARDO.pdf"
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          
          @keyframes blink {
            50% { border-color: transparent }
          }
          
          .typing-animation {
            display: inline-block;
            overflow: hidden;
            border-right: 3px solid #64FFDA;
            white-space: nowrap;
            margin: 0;
            animation: 
              typing 3.5s steps(40, end),
              blink 0.75s step-end infinite;
          }
        `}
      </style>
      
      <section 
        id="inicio" 
        className="bg-[#0A192F] text-white min-screen py-20 px-6 sm:px-12 
          flex flex-col justify-center items-center"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Hola, soy <br />
              <span className="typing-animation text-5xl sm:text-6xl font-extrabold text-[#64FFDA] mb-1">
                Jade Arias
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-4 text-gray-300">
              Frontend Developer • Web Developer
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="bg-[#0A192F] border-2 border-[#64FFDA] p-4 rounded-full 
                    group-hover:bg-[#64FFDA] transition-all duration-300 ease-in-out"
                  >
                    <link.icon 
                      size={30} 
                      className="text-[#64FFDA] group-hover:text-[#0A192F] transition-colors duration-300"
                    />
                  </div>
                  <span className="mt-2 text-sm text-[#64FFDA] group-hover:text-[#64FFDA]/80 
                    transition-colors duration-300"
                  >
                    {link.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;