import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <span className="text-lg text-gray-500">What I will do for you</span>
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          <div className="services-box w-1/3 p-4">
            <i className='bx bxs-layer service-icon text-6xl mb-4'></i>
            <h3 className="text-2xl font-bold mb-4">UI/UX Designer</h3>
            <p>"As a seasoned UI/UX developer, I specialize in crafting seamless digital experiences that captivate and engage users. With a keen eye for design aesthetics and a deep understanding of user behavior, I leverage cutting-edge tools and techniques to create intuitive interfaces and delightful interactions."</p>
          </div>
          <div className="services-box w-1/3 p-4">
            <i className='bx bx-desktop service-icon text-6xl mb-4'></i>
            <h3 className="text-2xl font-bold mb-4">Fullstack Developer</h3>
            <p>"As a full-stack developer, I bring a wealth of experience in both frontend and backend technologies, ensuring holistic solutions from conception to deployment. Proficient in HTML, CSS, JavaScript, and adept with frameworks like React.js and Node.js, I've led numerous projects to success."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
