import React, { useState } from 'react';

const About = () => {
  const [showExtraContent, setShowExtraContent] = useState(false);

  return (
    <section id="about" className="about flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-200">
      <div className="img-about text-center relative">
        <img src="./src/assets/img/hero-banner.jpg" width="300" height="400" alt="" className="rounded shadow-lg w-96 h-64" />

        <div className="info-about1 bg-gray-100 text-xs absolute p-2 w-24 h-24 rounded-full top-14 left-80 border-2 border-gray-300 shadow-lg">
          <span className="text-blue-500 font-bold block">100+</span>
          <p>Coding problems solved</p>
        </div>
        <div className="info-about2 bg-gray-100 text-xs absolute p-2 w-24 h-24 rounded-full top-1 left-69 border-2 border-gray-300 shadow-lg">
          <span className="text-blue-500 font-bold block">50+</span>
          <p>Projects Completed</p>
        </div>
        <div className="info-about3 bg-gray-100 text-xs absolute p-2 w-24 h-24 rounded-full top-75 left-70 border-2 border-gray-300 shadow-lg">
          <span className="text-blue-500 font-bold block">200+</span>
          <p>Hours of Learning & working</p>
        </div>
      </div>
      <div className="about-content p-8">
        <span className="text-lg font-semibold text-blue-500">Let me introduce myself</span>
        <h2 className="text-4xl font-bold my-4">About Me</h2>
        <h3 className="text-2xl my-2">A story of good</h3>
        <p className="my-2 text-black-100">
          Hari Prasath, a Computer Science student skilled in HTML, CSS, Java, Python, React.js, Node.js, and SQL. Led projects, built websites, and excelled in problem-solving. Ready to contribute as a full-stack developer.
        </p>
        {showExtraContent && (
          <p className="my-2 text-black-100">
            Experienced in spearheading React.js and Node.js projects, with a portfolio spanning 50+ JavaScript endeavors. Equipped with strong leadership and problem-solving acumen honed through active participation in events like the Inventors Challenge and the Smart India Hackathon. Ready to contribute as a full-stack developer, driven by a passion for innovation and collaboration.
          </p>
        )}
        <div className="btn-box mt-4">
          <button onClick={() => setShowExtraContent(!showExtraContent)} className="btn bg-blue-500 text-white px-4 py-2 rounded">
            {showExtraContent ? "Show Less" : "Read More!"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
