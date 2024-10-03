import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills py-20">
      <div className="container mx-auto text-center">
        <span className="text-lg text-gray-500">Technical and Professional</span>
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>
        <div className="flex flex-wrap justify-center">
          <div className="skill-box w-1/6 p-4">
            <i className="bx bxl-html5 text-6xl mb-2"></i>
            <small>HTML</small>
          </div>
          <div className="skill-box w-1/6 p-4">
            <i className="bx bxl-tailwind-css text-6xl mb-2"></i>
            <small>Tailwind CSS</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
