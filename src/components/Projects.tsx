import React from 'react';

type Technology = 'HTML' | 'CSS' | 'JavaScript';

const projects = [
  {
    id: 1,
    title: 'Coffe Menu',
    description:
      'Este proyecto es una página web sencilla que simula el menú de un café llamado "Camper Café". Está diseñado utilizando únicamente HTML y CSS, con un enfoque en la estructura y el diseño básico de una página de menú para establecimientos de comida.',
    image: '/images/CoffeeMenu.png',
    liveLink: 'https://itsssariassss.github.io/Coffee-Menu/',
    githubLink: 'https://github.com/Itsssariassss/Coffee-Menu.git',
    technologies: ['HTML', 'CSS'] as Technology[],
  },
  {
    id: 2,
    title: 'Calculadora Básica',
    description: 'Este proyecto es una calculadora básica creada con HTML, CSS y JavaScript. Es ideal para aprender conceptos básicos de desarrollo web y trabajar con eventos en JavaScript.',
    image: '/images/Calculadora.png',
    liveLink: 'https://basicc-calculatorr.netlify.app/',
    githubLink: 'https://github.com/Itsssariassss/Calculadora-electron.git',
    technologies: ['HTML', 'CSS', 'JavaScript'] as Technology[],
  },
  {
    id: 3,
    title: 'To-Do List',
    description: 'Este es un proyecto de una aplicación web de gestión de tareas (To-Do List), desarrollada con React y Tailwind CSS, que permite a los usuarios agregar, editar, eliminar y organizar tareas. Los usuarios pueden asignar prioridades, fechas de vencimiento y añadir comentarios a cada tarea.',
    image: '/images/To-DoList.png',
    liveLink: 'https://to-do-lissssst.netlify.app/',
    githubLink: 'https://github.com/Itsssariassss/To-Do-List',
    technologies: ['HTML', 'CSS', 'JavaScript'] as Technology[],
  }
];

const TechnologiesIcons: Record<Technology, string> = {
  HTML: 'fab fa-html5',
  CSS: 'fab fa-css3',
  JavaScript: 'fab fa-js',
};

const Projects: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-900 text-white" id="proyectos">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Mis Proyectos</h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 mx-auto rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 animate-fade-up w-full"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center p-4 md:p-6">
                {/* Imagen del proyecto */}
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* Información del proyecto */}
                <div className="w-full md:w-3/4 md:pl-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm md:text-base text-justify">
                    {project.description}
                  </p>

                  {/* Tecnologías utilizadas */}
                  <div className="mb-4 flex flex-wrap gap-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full"
                      >
                        <i
                          className={`${TechnologiesIcons[tech]} text-lg text-[#64FFDA]`}
                          title={tech}
                        ></i>
                        <span className="text-sm text-gray-300">{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="flex flex-wrap gap-4 items-center">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#64FFDA]/10 hover:bg-[#64FFDA]/20 
                                 text-[#64FFDA] rounded-lg transition-all duration-300 group"
                      >
                        <i className="fas fa-external-link-alt text-lg group-hover:rotate-12 transition-transform"></i>
                        <span>Demo en vivo</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 
                                 text-white rounded-lg transition-all duration-300 group"
                      >
                        <i className="fab fa-github text-lg group-hover:rotate-12 transition-transform"></i>
                        <span>Ver código</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;