import React from "react";

const Skills: React.FC = () => {
    const skillsData = [
        { name: "HTML", percentage: 80, icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
        { name: "CSS", percentage: 80, icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
        { name: "JavaScript", percentage: 67, icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
        { name: "ReactJS", percentage: 50, icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    ];

    return (
        <section id="skills" className="bg-[#0A192F] text-white py-16 px-8  items-center md:items-start">
            <h3 className="flex justify-center text-4xl font-bold text-white mb-4">Habilidades en construcción</h3>
            <ul className="space-y-6">
                {skillsData.map((skill, index) => (
                    <li key={index} className="flex items-center gap-6">
                        {/* Ícono */}
                        <div className="w-12 h-12 flex-shrink-0 bg-gray-700 p-2 rounded-full shadow-md">
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>

                        {/* Contenedor de texto y barra */}
                        <div className="flex-grow">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-gray-200 font-semibold">{skill.name}</span>
                                <span className="text-gray-400">{skill.percentage}%</span>
                            </div>

                            {/* Barra de progreso */}
                            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                                <div
                                    className={`h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full`}
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
