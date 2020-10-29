/* eslint-disable react/no-array-index-key */
import React from 'react';

const projects = [
  {
    pics: '/images/findhouse.png',
    alt: 'findhouse',
    title: 'FindHouse',
    languages: ['Ruby on rails', 'HTML/CSS', 'React', 'Redux'],
  },
  {
    pics: '/images/newsweek-clone.png',
    alt: 'newsweek',
    title: 'Newsweek',
    languages: ['HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    pics: '/images/facebook-login.png',
    alt: 'fakebook',
    title: 'FakeBook',
    languages: ['Ruby on rails', 'PostgreSQL', 'HTML/CSS', 'Devise Gem', 'RSpec', 'Capybara', 'Omniauth'],
  },
  {
    pics: '/images/space-shooter.png',
    alt: 'space-shooter',
    title: 'Space Shooter',
    languages: ['JavaScript', 'PhaserJS', 'Webpack'],
  },
  {
    pics: '/images/youtube-clone.png',
    alt: 'youtube',
    title: 'YouTube Clone',
    languages: ['HTML5', 'CSS3'],
  },
  {
    pics: '/images/intuit.png',
    alt: 'intuit',
    title: 'Intuit Clone',
    languages: ['HTML5', 'CSS3'],
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="works py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-medium text-center mb-10">My Recent Works</h2>

        <div className="grid md:grid-cols-2 px-5 lg:grid-cols-3 col-gap-6 row-gap-5">
          {
            projects.map((project, projectIdx) => (
              <div key={projectIdx} className="shadow-xs rounded hover:shadow-xl border border-gray-200">
                <div className="h-64 bg-green-200">
                  {/* <img src={project.pics} alt={project.alt} className="object-cover max-w-full" /> */}
                </div>
                <div className="py-4 px-3 flex flex-col items-center bg-white">
                  <h4 className="text-xl font-medium w-56 text-center">{project.title}</h4>

                  <div className="flex flex-wrap items-center my-4 text-xs">
                    {
                      project.languages.map((language, languageIdx) => <span key={languageIdx} className="py-1 px-2 m-1 bg-light-green rounded">{language}</span>)
                    }
                  </div>

                  <button type="button" className="p-2 my-2 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl">See project</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
