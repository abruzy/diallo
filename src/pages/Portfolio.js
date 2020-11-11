/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Modal from 'react-modal';
import Modall from './Modall';

const projects = [
  {
    pics: '/images/findhouse.png',
    alt: 'findhouse',
    title: 'FindHouse App',
    description: 'This is a simple fullstack app that was built with ReactJS for the frontend and Ruby On Rails for the backend. This app is a mobile web app that contains listings of houses, apartments, rooms etc. On the Home page, when you first visit the app, you can see a short description of the app. Through there you can either sign in or sign up to access the listings. When logged in, the Home page shows all of the listings, from there you can access the Listing Details page or the Favourites page. In the Listing Details page you can see the full details for that house. From the Details page you can also add that particular listing to your list of Favourites, or remove it.',
    githubLink: 'https://github.com/abruzy/find_your_house-frontend',
    liveUrl: 'https://findhouse-app.herokuapp.com',
    languages: ['Ruby on rails', 'HTML/CSS', 'React', 'Redux'],
  },
  {
    pics: '/images/newsweek-clone.png',
    alt: 'newsweek',
    title: 'Newsweek',
    description: 'This is a bootstrap project aimed at cloning the Newsweek page',
    githubLink: 'https://github.com/abruzy/newsweek-clone',
    liveUrl: 'https://rawcdn.githack.com/abruzy/newsweek-clone/b7cfb0020030ce6f20debd6995fb4dff8b852215/index.html',
    languages: ['HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    pics: '/images/facebook-login.png',
    alt: 'fakebook',
    title: 'FakeBook',
    description: 'A social media app built with ruby on rails. It includes some of the core features of the Facebook app which include; creating users, sending friend request and accepting friend request, creating posts, liking posts and commenting on posts, etc.',
    githubLink: 'https://github.com/abruzy/facebook-clone',
    liveUrl: 'https://owl-social.herokuapp.com/',
    languages: ['Ruby on rails', 'PostgreSQL', 'HTML/CSS', 'RSpec', 'Omniauth'],
  },
  {
    pics: '/images/space-shooter.png',
    alt: 'space-shooter',
    title: 'Space Shooter',
    description: 'Implementation of The SpaceShooter Game Using PhaserJS and Webpack',
    githubLink: 'https://spaceshooter-game.netlify.app/',
    liveUrl: '',
    languages: ['JavaScript', 'PhaserJS', 'Webpack'],
  },
  {
    pics: '/images/youtube-clone.png',
    alt: 'youtube',
    title: 'YouTube Clone',
    description: 'This is a bootstrap project aimed at cloning the YouTube page',
    githubLink: 'https://github.com/abruzy/youtube-clone',
    liveUrl: 'https://rawcdn.githack.com/abruzy/youtube-clone/1fe1d9af49c6a5308da33b861e7465e6b61aab12/index.html',
    languages: ['HTML5', 'CSS3'],
  },
  {
    pics: '/images/intuit.png',
    alt: 'intuit',
    title: 'Intuit Clone',
    description: 'This is a bootstrap project aimed at cloning the Intuit signin/signup page',
    githubLink: 'https://github.com/abruzy/HTML-Forms',
    liveUrl: 'https://rawcdn.githack.com/abruzy/HTML-Forms/08e547354d4edf7aa2c569549dbc976689eeb9c0/index.html',
    languages: ['HTML5', 'CSS3'],
  },
];

Modal.setAppElement('#root');

function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <>
      <section id="portfolio" className="works py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">My Recent Works</h2>

          <div className="grid md:grid-cols-2 px-5 lg:grid-cols-3 col-gap-6 row-gap-5">
            {
            projects.map((project, projectIdx) => (
              <div key={projectIdx} className="shadow-xs rounded hover:shadow-xl border border-gray-200">
                <div className="h-64">
                  <img src={project.pics} alt={project.alt} className="object-cover max-w-full" />
                </div>
                <div className="py-4 px-3 flex flex-col items-center bg-white">
                  <h4 className="text-xl font-medium w-56 text-center">{project.title}</h4>

                  <div className="flex flex-wrap items-center my-4 text-xs">
                    {
                      project.languages.map((language, languageIdx) => <span key={languageIdx} className="py-1 px-2 m-1 bg-light-green rounded">{language}</span>)
                    }
                  </div>
                  <button
                    type="button"
                    className="p-2 my-2 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl"
                    onClick={() => {
                      setCurrentProject(project);
                      setModalIsOpen(true);
                    }}
                  >
                    See project
                  </button>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </section>
      <Modall modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} title={currentProject.title} description={currentProject.description} imageUrl={currentProject.pics} githubLink={currentProject.githubLink} liveUrl={currentProject.liveUrl} techStack={currentProject.languages} />
    </>
  );
}

export default Portfolio;
