/* eslint-disable max-len */
import React, { useState } from 'react';

import useDocumentScrollThrottled from '../utils/useDocumentScrollThrottled';

const linkClassNames = 'text-dark-more hidden md:flex px-2 mx-1 font-medium';

function NavBar() {
  const [shouldHdeNavBar, setShouldHdeNavBar] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 150);

    setTimeout(() => {
      setShouldHdeNavBar(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHdeNavBar ? 'hidden' : '';

  return (
    <header className="banner sm:min-h-screen">
      <nav className={`navbar ${hiddenStyle} ${shadowStyle} navbar fixed bg-white flex items-center justify-between md:justify-center px-10 h-20 md:h-16 w-full top-0 left-0`}>
        <span className="text-xl font-semibold md:hidden">Welcome</span>
        <a href="#blog" className={linkClassNames}>Blog</a>
        <a href="#portfolio" className={linkClassNames}>Portfolio</a>
        <a href="#about" className={linkClassNames}>About</a>
        <a href="#contact" className={linkClassNames}>Contact</a>
        <img src="/vectors/menu.svg" alt="Menu" className="md:hidden" />
      </nav>

      <div className="pt-56 px-5 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center">
          <span className="tracking-normal">Hey there. I’m Abubakar.</span>
          <br className="hidden lg:flex" />
          <span className="text-normal-green tracking-wide">I’m a software developer</span>
        </h1>
        <p className="lg:max-w-3xl mx-auto my-4 text-xl text-center">
          I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded,
          don’t hestiate to contact me.
        </p>

        <div className="flex items-center justify-center my-2">
          <a href="https://github.com/abruzy" rel="noopener noreferrer" target="_blank" className="p-2 mx-1">
            <img src="/vectors/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/abubakardiallo" rel="noopener noreferrer" target="_blank" className="p-2 mx-1">
            <img src="/vectors/in.svg" alt="LinkedIn" />
          </a>
          <a href="https://angel.co/u/abruzy" rel="noopener noreferrer" target="_blank" className="p-2 mx-1">
            <img src="/vectors/angel.svg" alt="AngelList" />
          </a>
          <a href="https://twitter.com/abruzy01" rel="noopener noreferrer" target="_blank" className="p-2 mx-1">
            <img src="/vectors/tw.svg" alt="Twitter" />
          </a>
          <a href="https://medium.com/@dialloabubakar5861" rel="noopener noreferrer" target="_blank" className="p-2 mx-1">
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
