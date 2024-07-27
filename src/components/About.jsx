import React from "react";
const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am Abhishek Kumar Singh, a B.Tech student in Computer Science and Engineering 
        at the United College of Engineering and Research, Prayagraj. I excel in programming 
        languages like Java, C, JavaScript, and Python, and have a strong foundation in data structures 
        and algorithms. My academic achievements include a high GPA and top rankings in competitive 
        programming contests like TCS CodeVita.
        </p>

        <br />

        <p className="text-xl">
        My expertise extends to full stack development, demonstrated through projects like my 
        personal portfolio website, built with HTML, CSS, JavaScript, and React.js, and a real-time 
        chat application using the MERN stack. I have a keen interest in integrating front-end and 
        back-end technologies to create seamless user experiences. Additionally, I am passionate about
         exploring the potential of machine learning to solve real-world problems and innovate further 
         in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default About;
