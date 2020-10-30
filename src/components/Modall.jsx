import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const modalClassNames = 'p-2 my-2 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl';

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
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          border: '1px solid #ebecf0',
          boxShadow: '0px 48px 48px rgba(37, 47, 137, 0.08)',
          background: '#fff',
          margin: '3rem auto',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '8px',
          maxWidth: '50vw',
          outline: 'none',
          padding: '25px 20px',
          height: 'max-content',
        },
      }}
    >
      <div className="content-area">
        <div className="h-auto">
          <img src="/images/facebook-login.png" alt="" className="object-cover max-w-full" />
        </div>
        <div className="project-info pt-8">
          <h2 className="text-2xl">
            Keeping track of hundreds of
            components
          </h2>

          <button type="button" className={`${modalClassNames} mr-3 flex`}>
            See live
            <img src="/vectors/live.svg" alt="see live" />
          </button>
          <button type="button" className={modalClassNames}>See Source</button>

        </div>
      </div>
    </Modal>
  );
}

Modall.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};

export default Modall;
