// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="home-content">
          <h1 className="text-5xl font-bold">Hi! I'm Hariprasath</h1>
          <div className="change-text my-4">
            <h3 className="text-2xl">And I'm</h3>
            <h3 className="text-2xl">
              <span className="word">Web Designer</span>
              <span className="word">Frontend Developer</span>
              <span className="word">UX/UI Developer</span>
            </h3>
          </div>
          <p className="mt-4">
            <span className="font-semibold">IBM Certified Fullstack Developer</span>
            <br /> A proficient Computer Science student adept in HTML, CSS, Java, Python, React.js, Node.js, and SQL. Experienced in project leadership, website development, and problem-solving.
          </p>
          <div className="info-box my-4">
            <div className="email-info">
              <h5 className="font-semibold">Email :</h5>
              <span>haritheking.18@gmail.com</span>
            </div>
          </div>
          <div className="btn-box flex space-x-4">
            <a href="./img/Resume.pdf" className="btn bg-blue-500 text-white px-4 py-2 rounded">Resume</a>
            <a href="#contact" className="btn bg-green-500 text-white px-4 py-2 rounded">Hire Me Now!</a>
          </div>
          <div className="social-icons flex space-x-4 mt-4">
            <a href="#contact"><i className='bx bxl-gmail text-2xl'></i></a>
            <a href="https://github.com/Hariprasath-Developer"><i className='bx bxl-github text-2xl'></i></a>
            <a href="http://www.linkedin.com/in/hariprasathdeveloper"><i className='bx bxl-linkedin text-2xl'></i></a>
            <a href="#contact"><i className='bx bxl-twitter text-2xl'></i></a>
          </div>
        </div>
        <div className="home-image mt-8 md:mt-0 md:ml-8">
          <div className="img-box">
            <img src="./src/assets\img\absolute-image.jpg" width="380" height="380" loading="lazy" alt="Ethan's Photo" className="img-cover rounded-full shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
