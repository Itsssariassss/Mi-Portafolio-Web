import React from 'react';

const skillsData = {
  frontend: [
    { name: 'HTML', icon: 'fa-html5', color: 'text-orange-500' },
    { name: 'CSS', icon: 'fa-css3-alt', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'fa-js', color: 'text-yellow-400' },
    { name: 'ReactJS', icon: 'fa-react', color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: 'fa-wind', color: 'text-cyan-500' }
  ],
  backend: [
    { name: 'SQL Server', icon: 'fa-database', color: 'text-red-500' },
    { name: 'NodeJS', icon: 'fa-node-js', color: 'text-green-500' }
  ]
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-[#0A192F] text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-3xl md:text-6xl font-bold mb-12 relative">
          <span className="text-[#64FFDA]">Habilidades</span>
          <div className="bg-[#64FFDA] bottom-0 left-1/2 transform -translate-x-1/2 mt-4 rounded-full"></div>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Frontend Skills */}
          <div className="group">
            <div className="bg-[#1D2A41] rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl border border-[#64FFDA]/20 hover:border-[#64FFDA]/40">
              <h4 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-[#64FFDA]">
                <i className="fas fa-code mr-2"></i>
                Front-End
              </h4>
              <div className="space-y-4">
                {skillsData.frontend.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#0A192F]/50 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 ${skill.color}`}>
                      <i className={`fab ${skill.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-lg text-gray-200">{skill.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="group">
            <div className="bg-[#1D2A41] rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl border border-[#64FFDA]/20 hover:border-[#64FFDA]/40">
              <h4 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-[#64FFDA]">
                <i className="fas fa-server mr-2"></i>
                Back-End
              </h4>
              <div className="space-y-4">
                {skillsData.backend.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#0A192F]/50 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 ${skill.color}`}>
                      <i className={`fab ${skill.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-lg text-gray-200">{skill.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;