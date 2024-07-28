import React from "react";
import portfol from '../assets/portfolio/portfolio.png';
import bbudy from '../assets/BudgetBuddy.png';
import trv from '../assets/portfolio/Traveller.png';
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfol,
      code: "https://github.com/17abhishekk/Portfolio-Website",
      demo: "https://17abhishekk.netlify.app",
      title: "Portfolio Website"
    },
    {
      id: 2,
      src: bbudy,
      code: "https://github.com/17abhishekk/BudgetBuddy",
      demo: "https://17abhishekk-budgetbuddy.netlify.app",
      title: "Budget Buddy"
    },
    {
      id: 3,
      src: trv,
      code: "https://github.com/17abhishekk/Traveller",
      demo:"",
      title: "Traveller"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <h3 className="text-xl font-bold text-center my-2">{title}</h3>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(demo, '_blank')}
                  className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(code, '_blank')}
                  className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
