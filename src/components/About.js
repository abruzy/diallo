/* eslint-disable max-len */
import React from 'react';

function About() {
  return (
    <section id="about" className="about pb-20">
      <div className="intro pt-20 flex flex-col items-center">
        <h2 className="text-4xl font-medium text-center mb-5">About me</h2>
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

      <div className="grid grid-cols-3 col-gap-6 row-gap-6 max-w-6xl mx-auto mt-10">
        <div className="bg-light-green border border-gray-200 rounded py-12 flex flex-col items-center">
          <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center shadow-xl mb-10">
            <img src="vectors/languages.svg" alt="Languages" />
          </div>
          <h3 className="font-medium text-2xl text-faded-gray">Languages</h3>

          <div className="flex flex-wrap items-center mt-4 text-xs text-dark-green">
            <span className="p-2 m-1 bg-white rounded">Javascript</span>
            <span className="p-2 m-1 bg-white rounded">Ruby</span>
            <span className="p-2 m-1 bg-white rounded">HTML</span>
            <span className="p-2 m-1 bg-white rounded">CSS</span>
          </div>
        </div>

        <div className="bg-light-green border border-gray-200 rounded py-12 flex flex-col items-center">
          <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center shadow-xl mb-10">
            <img src="vectors/frameworks.svg" alt="Languages" />
          </div>
          <h3 className="font-medium text-2xl text-faded-gray">Frameworks</h3>

          <div className="flex flex-wrap justify-center items-center mt-4 text-xs text-dark-green">
            <span className="p-2 m-1 bg-white rounded">Bootstrap</span>
            <span className="p-2 m-1 bg-white rounded">Ruby on rails</span>
            <span className="p-2 m-1 bg-white rounded">RSpec</span>
            <span className="p-2 m-1 bg-white rounded">Capybara</span>
            <span className="p-2 m-1 bg-white rounded">Selenium</span>
          </div>
        </div>

        <div className="bg-light-green border border-gray-200 rounded py-12 flex flex-col items-center">
          <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center shadow-xl mb-10">
            <img src="vectors/skills.svg" alt="Languages" />
          </div>
          <h3 className="font-medium text-2xl text-faded-gray">Skills</h3>

          <div className="flex flex-wrap items-center mt-4 text-xs text-dark-green">
            <span className="p-2 m-1 bg-white rounded">Codekit</span>
            <span className="p-2 m-1 bg-white rounded">Github</span>
            <span className="p-2 m-1 bg-white rounded">Codepen</span>
            <span className="p-2 m-1 bg-white rounded">Gitlab</span>
            <span className="p-2 m-1 bg-white rounded">Terminal</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
