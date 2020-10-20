/* eslint-disable max-len */
import React from 'react';

const linkClassNames = 'text-dark-more px-2 mx-1 font-medium';

// const navEl = document.querySelector('.navbar');
// let lastScrollPosition = window.pageYOffset;

// function effect1() {
//   const scrollHeight = window.pageYOffset;

//   if (scrollHeight >= 1200) {
//     navEl.style.top = 0;
//   } else if (scrollHeight > 150) {
//     navEl.style.top = '-4rem';
//   } else {
//     navEl.style.top = 0;
//   }
// }

// function effect2() {
//   const scrollHeight = window.pageYOffset;

//   const difference = scrollHeight - lastScrollPosition;
//   lastScrollPosition = scrollHeight;

//   if (Math.abs(difference) < 5) return;

//   if (scrollHeight <= 150 || difference < 0) {
//     navEl.style.top = 0;
//     navEl.classList.add('shadow-xs');
//   } else {
//     navEl.style.top = '-4rem';
//     navEl.classList.remove('shadow-xs');
//   }
// }

// window.addEventListener('scroll', () => effect2());

function NavBar() {
  return (
    <header className="banner min-h-screen">
      <nav className="navbar fixed bg-white flex items-center justify-center h-16 w-full top-0 left-0">
        <a href="#blog" className={linkClassNames}>Blog</a>
        <a href="#portfolio" className={linkClassNames}>Portfolio</a>
        <a href="#about" className={linkClassNames}>About</a>
        <a href="#contact" className={linkClassNames}>Contact</a>
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
          <a href="https://github.com/abruzy" rel="noopener noreferrer" target="_blank" className="p-2 mx-1">
            <img src="/vectors/github.svg" alt="GitHub" />
          </a>
          <a href="#linkekdin" rel="noopener noreferrer" target="_blank" className="p-2 mx-1">
            <img src="/vectors/in.svg" alt="LinkedIn" />
          </a>
          <a href="#angelist" rel="noopener noreferrer" target="_blank" className="p-2 mx-1">
            <img src="/vectors/angel.svg" alt="AngelList" />
          </a>
          <a href="https://twitter.com/abruzy01" rel="noopener noreferrer" target="_blank" className="p-2 mx-1">
            <img src="/vectors/tw.svg" alt="Twitter" />
          </a>
          <a href="#medium" rel="noopener noreferrer" target="_blank" className="p-2 mx-1">
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
