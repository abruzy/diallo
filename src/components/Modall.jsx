import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

function Modall({ modalIsOpen, setModalIsOpen }) {
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
          backgroundColor: '#c1c7d0',
          opacity: '0.9',
        },
        content: {
          position: 'absolute',
          top: '30%',
          left: '0',
          right: '30%',
          bottom: '0',
          transform: 'translate(20%, -30%)',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '15px',
          outline: 'none',
          padding: '20px',
        },
      }}
    >
      <h2>Modal title</h2>
      <p>Modal boday</p>
    </Modal>
  );
}

Modall.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};

export default Modall;
