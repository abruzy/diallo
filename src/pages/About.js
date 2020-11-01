/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';

const tools = [
  {
    pics: '/vectors/languages.svg',
    alt: 'Languages',
    title: 'Languages',
    languages: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
  },
  {
    pics: '/vectors/frameworks.svg',
    alt: 'Frameworks',
    title: 'Frameworks',
    languages: ['Bootstrap', 'Ruby on rails', 'RSpec', 'Capybara', 'Selenium'],
  },
  {
    pics: '/vectors/skills.svg',
    alt: 'Skills',
    title: 'Skills',
    languages: ['Codekit', 'Github', 'Codepen', 'Gitlab', 'Terminal'],
  },
];

function About() {
  return (
    <section id="about" className="about pb-20 px-5">
      <div className="intro pt-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-5">About me</h2>
        <p className="max-w-3xl mx-auto text-xl text-center text-normal text-fade-gray">
          I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded,
          don’t hestiate to contact me.
        </p>
        <a href="https://docs.google.com/document/d/1M_TyXPYW_L7ClD506XA37VeqX-8xGiOpTLbj9NDGfyQ/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
          <button type="button" className="p-3 my-8 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl">
            Get My Resume
          </button>
        </a>
      </div>

      <div className="grid px-5 lg:grid-cols-3 col-gap-6 row-gap-6 max-w-6xl mx-auto mt-10">
        {
          tools.map((tool, toolIdx) => (
            <div key={toolIdx} className="bg-light-green border border-gray-200 rounded py-12 flex flex-col items-center">
              <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center shadow-xl mb-10">
                <img src={tool.pics} alt={tool.alt} />
              </div>
              <h3 className="font-medium text-2xl text-faded-gray">{tool.title}</h3>

              <div className="flex flex-wrap justify-center items-center mt-4 text-xs text-dark-green">
                {
              tool.languages.map((lang, langIdx) => <span key={langIdx} className="p-2 m-1 bg-white rounded">{lang}</span>)
            }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default About;
