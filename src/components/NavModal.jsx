import React, { useState } from 'react';
import Modal from 'react-modal';

const linkClassNames = 'leading-10 pb-16 text-5xl font-semibold';

function NavModal({ modalIsOpen, setModalIsOpen }) {
  const handleClick = pageName => {
    setModalIsOpen(false);
    window.location.href = pageName;
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          border: 'none',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '0',
          outline: 'none',
          padding: '20px',
        },
      }}
    >
      <div className="flex flex-col justify-center pt-20 pl-3">
        <a className={linkClassNames} onClick={() => handleClick('#portfolio')}>Portfolio</a>
        <a className={linkClassNames} onClick={() => handleClick('#about')}>About</a>
        <a className={linkClassNames} onClick={() => handleClick('#contact')}>Contact</a>
      </div>
      <div className="close absolute top-0 right-0 text-5xl pr-5 transform rotate-45 cursor-pointer" onClick={() => setModalIsOpen(false)}>+</div>
    </Modal>
  );
}

export default NavModal;
