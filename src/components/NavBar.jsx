/* eslint-disable max-len */
import React, { useState } from 'react';

import useDocumentScrollThrottled from '../utils/useDocumentScrollThrottled';
import NavModal from './NavModal';

const linkClassNames = 'text-dark-more hidden md:flex px-2 mx-1 font-medium';

function NavBar() {
  const [shouldHdeNavBar, setShouldHdeNavBar] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    <nav className={`navbar ${hiddenStyle} ${shadowStyle} navbar fixed bg-white flex items-center justify-between md:justify-center px-10 h-20 md:h-16 w-full top-0 left-0`}>
      <span className="text-xl font-semibold md:hidden">Welcome</span>
      <a href="#blog" className={linkClassNames}>Blog</a>
      <a href="#portfolio" className={linkClassNames}>Portfolio</a>
      <a href="#about" className={linkClassNames}>About</a>
      <a href="#contact" className={linkClassNames}>Contact</a>
      <img src="/vectors/menu.svg" alt="Menu" className="md:hidden" onClick={() => setModalIsOpen(true)} />
      <NavModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </nav>
  );
}

export default NavBar;
