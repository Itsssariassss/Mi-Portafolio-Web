import React from "react";

const RoadMap: React.FC = () => {
    const roadmapItems = [
        {
            title: "En Progreso",
            items: [
                "Aprender TypeScript avanzado",
                "Practicar desarrollo backend con Node.js",
                "Mejorar diseño con Tailwind CSS",
            ],
        },
        {
            title: "Por Aprender",
            items: [
                "Explorar Docker para contenedores",
                "Aprender GraphQL para APIs",
                "Estudiar testing con Jest y Cypress",
            ],
        },
        {
            title: "Dominado",
            items: [
                "Desarrollo con React",
                "Diseño responsivo",
                "Git y control de versiones",
            ],
        },
    ];

    return (
        <section id="roadmap" className="bg-[#0A192F] text-white py-16 px-8">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-[#64FFDA] mb-12">
                    Mi Camino de Aprendizaje
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {roadmapItems.map((category, index) => (
                        <div
                            key={index}
                            className="bg-[#112240] p-6 rounded-lg shadow-lg transition hover:scale-105"
                        >
                            <h3 className="text-2xl font-bold text-[#64FFDA] mb-4">
                                {category.title}
                            </h3>
                            <ul className="list-disc list-inside space-y-2">
                                {category.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-gray-300 hover:text-[#64FFDA] transition"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoadMap;
