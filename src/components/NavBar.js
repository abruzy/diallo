import React from 'react';
// import { Link } from 'react-router-dom';

// const linkClassNames = 'text-dark-more px-2 mx-1 font-medium';

function NavBar() {
  return (
    <header className="banner min-h-screen">
      <nav className="navbar fixed bg-white flex items-center justify-center h-16 w-full top-0 left-0">
        <a href="#blog" className="text-dark-more px-2 mx-1 font-medium">Blog</a>
        <a href="#portfolio" className="text-dark-more px-2 mx-1 font-medium">Portfolio</a>
        <a href="#about" className="text-dark-more px-2 mx-1 font-medium">About</a>
        <a href="#contact" className="text-dark-more px-2 mx-1 font-medium">Contact</a>
      </nav>
      <div className="pt-56 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">
          <span className="tracking-normal">Hey there. I’m Abubakar.</span>
          <br />
          <span className="text-normal-green tracking-wide">I’m a software developer</span>
        </h1>
        <p className="max-w-3xl mx-auto my-4 text-xl text-center">
          I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded,
          don’t hestiate to contact me.
        </p>

        <div className="flex items-center justify-center my-2">
          <a href="https://github.com/abruzy" target="_blank" className="p-2 mx-1">
            <img src="/vectors/github.svg" alt="GitHub" />
          </a>
          <a href="#linkekdin" target="_blank" className="p-2 mx-1">
            <img src="/vectors/in.svg" alt="LinkedIn" />
          </a>
          <a href="#angelist" target="_blank" className="p-2 mx-1">
            <img src="/vectors/angel.svg" alt="AngelList" />
          </a>
          <a href="https://twitter.com/abruzy01" target="_blank" className="p-2 mx-1">
            <img src="/vectors/tw.svg" alt="Twitter" />
          </a>
          <a href="#medium" target="_blank" className="p-2 mx-1">
            <img src="/vectors/medium.svg" alt="Medium" />
          </a>
        </div>

        <a href="#portfolio" className="mx-auto w-16 h-16 border rounded-full mt-20 animate-bounce flex items-center justify-center">
          {/* <img src="media/down.svg" class="h-10 animate-bounce" alt=""> */}
          <svg className="animate-bounce w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
