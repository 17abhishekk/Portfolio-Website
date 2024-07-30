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
        I am Abhishek Kumar Singh, a B.Tech student in Computer Science and Engineering at the United College of Engineering and Research,
         Prayagraj. I excel in programming languages like Java, C, JavaScript, and Python, and have a strong foundation in data
          structures and algorithms. My academic achievements include a solid GPA and top rankings in competitive programming contests
           like TCS CodeVita.
        </p>

        <br />

        <p className="text-xl">
        From developing finance-tracking applications to creating weather forecasting tools, 
        each project has honed my skills and expanded my horizons. 
        Currently, I'm working on a predictive model to identify IPC sections based on incident descriptions,
         showcasing my dedication to both front-end development and data science.


        </p>

        <br />

        <p className="text-xl">
        My passion for technology drives me to continuously learn and innovate. I am eager to take on new challenges,
         collaborate with like-minded professionals, and contribute to impactful projects. Whether it's building dynamic
          web applications or diving deep into machine learning and data analysis, I am committed to leveraging my skills
           to create meaningful solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
