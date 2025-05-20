import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          <li className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700">HTML</li>
          <li className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700">CSS</li>
          <li className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700">JavaScript</li>
          <li className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700">React</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
