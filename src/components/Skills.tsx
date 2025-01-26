import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-[#0A192F] text-white py-16 px-8">
      <h3 className="text-center text-4xl font-bold mb-8">Skills</h3>
      <div className="max-w-2xl text-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Front-End Skills */}
        <div className="bg-[#1D2A41] p-6 rounded-lg shadow-lg h-full">
          <h4 className="text-center text-3xl font-semibold mb-4">Front-End</h4>
          <ul className="space-y-4">
            {[
              { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
              { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
              { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
              { name: 'ReactJS', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
              { name: 'Tailwind CSS', icon: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' }
            ].map((skill, index) => (
              <li key={index} className="flex items-center gap-4">
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                <span className="text-gray-200 font-medium">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back-end Skills */}
        <div className="bg-[#1D2A41] p-6 rounded-lg shadow-lg h-full">
          <h4 className="text-center text-3xl font-semibold mb-4">Back-End</h4>
          <ul className="space-y-4">
            {[
              { name: 'SQL Server', icon: 'https://cdn-icons-png.flaticon.com/512/5815/5815886.png' },
              { name: 'NodeJS', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' }
            ].map((skill, index) => (
              <li key={index} className="flex items-center gap-4">
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                <span className="text-gray-200 font-medium">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
