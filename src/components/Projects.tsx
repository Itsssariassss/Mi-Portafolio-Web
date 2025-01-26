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
    liveLink: 'https://itsssariassss.github.io/Calculadora-electron/',
    githubLink: 'https://github.com/Itsssariassss/Calculadora-electron.git',
    technologies: ['HTML', 'CSS', 'JavaScript'] as Technology[],
  },
  {
    id: 3,
    title: 'To-Do List',
    description: 'Este es un proyecto de una aplicación web de gestión de tareas (To-Do List), desarrollada con React y Tailwind CSS, que permite a los usuarios agregar, editar, eliminar y organizar tareas. Los usuarios pueden asignar prioridades, fechas de vencimiento y añadir comentarios a cada tarea.',
    image: '/images/To-DoList.png',
    liveLink: 'https://github.com/Itsssariassss/To-Do-List',
    githubLink: '',
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
    <section className="py-12 bg-gray-900 text-white" id="proyectos">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Mis Proyectos</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 animate-fade-up"
            >
              <div className="flex items-center p-6">
                {/* Imagen del proyecto */}
                <div className="w-1/4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                {/* Información del proyecto */}
                <div className="w-2/3 pl-4">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-justify">{project.description}</p>

                  {/* Mostrar tecnologías utilizadas */}
                  <div className="mb-4">
                    {project.technologies.map((tech) => (
                      <i
                        key={tech}
                        className={`${TechnologiesIcons[tech]} text-2xl text-gray-300 mr-3`}
                        title={tech}
                      ></i>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline flex items-center"
                      >
                        <i className="fas fa-eye mr-2 text-2xl"></i> Ver Proyecto
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline flex items-center"
                      >
                        <i className="fab fa-github text-3xl mr-2"></i>
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
