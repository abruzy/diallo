import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const linkClassNames = 'leading-10 pb-12 text-5xl font-semibold';

function NavModal({ modalIsOpen, setModalIsOpen }) {
  const handleClick = pageName => {
    setModalIsOpen(false);
    window.location.href = pageName;
  };

  return (
    <Modal
      isOpen={modalIsOpen}
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
      <div className="flex flex-col justify-center pt-20">
        <a href="#portfolio" className={linkClassNames} onClick={() => handleClick('#portfolio')}>Portfolio</a>
        <a href="#about" className={linkClassNames} onClick={() => handleClick('#about')}>About</a>
        <a href="#contact" className={linkClassNames} onClick={() => handleClick('#contact')}>Contact</a>
      </div>
      <button type="button" className="close absolute top-0 right-0 text-5xl pr-5 transform rotate-45 cursor-pointer" onClick={() => setModalIsOpen(false)}>+</button>
    </Modal>
  );
}

NavModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};

export default NavModal;
