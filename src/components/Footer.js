import React from 'react';

function Footer() {
  return (
    <footer className="flex items-center justify-center py-3 border-t border-gray-300">
      <a href="https://github.com/abruzy" target="_blank" rel="noopener noreferrer" className="p-2 mx-1">
        <img src="/vectors/github.svg" alt="GitHub" />
      </a>
      <a href="#df" target="_blank" rel="noopener noreferrer" className="p-2 mx-1">
        <img src="/vectors/in.svg" alt="LinkedIn" />
      </a>
      <a href="#fs" target="_blank" rel="noopener noreferrer" className="p-2 mx-1">
        <img src="/vectors/angel.svg" alt="AngelList" />
      </a>
      <a href="https://twitter.com/abruzy01" target="_blank" rel="noopener noreferrer" className="p-2 mx-1">
        <img src="/vectors/tw.svg" alt="Twitter" />
      </a>
      <a href="#sf" target="_blank" rel="noopener noreferrer" className="p-2 mx-1">
        <img src="/vectors/medium.svg" alt="Medium" />
      </a>
    </footer>
  );
}

export default Footer;
