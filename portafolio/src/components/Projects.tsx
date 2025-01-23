import React from 'react';



const projects = [

    {
        id: 1,
        title: 'Coffe Menu',
        description:
            'Este proyecto es una página web sencilla que simula el menú de un café llamado "Camper Café". Está diseñado utilizando únicamente HTML y CSS, con un enfoque en la estructura y el diseño básico de una página de menú para establecimientos de comida.',
        image: '/images/CoffeeMenu.png',
        liveLink: 'https://itsssariassss.github.io/Coffee-Menu/',
        githubLink: "https://github.com/Itsssariassss/Coffee-Menu.git",
    },
    {
        id: 2,
        title: 'Calculadora Básica',
        description: 'Este proyecto es una calculadora básica creada con HTML, CSS y JavaScript. Es ideal para aprender conceptos básicos de desarrollo web y trabajar con eventos en JavaScript.',
        image: '/images/Calculadora.png',
        liveLink: 'https://itsssariassss.github.io/Calculadora-electron/',
        githubLink: 'https://github.com/Itsssariassss/Calculadora-electron.git',
    },
    {
        id: 3,
        title: 'To-Do List',
        description: 'Una aplicación para gestionar tareas diarias.',
        image: '/images/ToDoList.png',
        liveLink: 'https://github.com/Itsssariassss/To-Do-List',
        githubLink: '',
    },
];

const Projects: React.FC = () => {
    return (
        <section className="py-16 bg-gray-900 text-white" id="proyectos">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Mis Proyectos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex justify-between">
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ver Proyecto</a>)}

                                    {project.githubLink && (
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Código Fuente</a>
                                    )}
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