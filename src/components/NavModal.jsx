import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const linkClassNames = 'leading-10 text-3xl font-semibold border-b-2 mb-4 pb-2';

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
        },
        content: {
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          border: 'none',
          background: '#fff',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '0',
          overflow: 'hidden',
          outline: 'none',
          padding: '20px',
          maxWidth: '100%',
        },
      }}
    >
      <div className="flex flex-col justify-center pt-12">
        <a href="#portfolio" className={linkClassNames} onClick={() => handleClick('#portfolio')}>Portfolio</a>
        <a href="#about" className={linkClassNames} onClick={() => handleClick('#about')}>About</a>
        <a href="#contact" className={linkClassNames} onClick={() => handleClick('#contact')}>Contact</a>
      </div>
      <button type="button" className="close absolute top-0 right-0 text-5xl mr-3 transform rotate-45 cursor-pointer" onClick={() => setModalIsOpen(false)}>
        +
      </button>
    </Modal>
  );
}

NavModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};

export default NavModal;
