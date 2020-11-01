/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const modalClassNames = 'p-2 my-2 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl flex justify-center items-center';

function Modall({
  modalIsOpen, setModalIsOpen, imageUrl, title, description, githubLink, liveUrl, techStack,
}) {
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
          margin: '1rem auto',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '8px',
          width: '40vw',
          maxWidth: '100%',
          outline: 'none',
          padding: '25px 20px',
          height: 'max-content',
        },
      }}
    >
      <div className="content-area">
        <div className="h-auto">
          <img src={imageUrl} alt="" className="object-cover max-w-full" />
        </div>
        <div className="project-info pt-8 items-center">
          <h2 className="text-2xl font-semibold">
            {title}
          </h2>

          <a href={liveUrl} target="_blank" rel="noopener noreferrer" type="button" className={`${modalClassNames} mr-3`}>
            See live
            <img src="/vectors/live.svg" alt="see live" className="pl-2" />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" type="button" className={modalClassNames}>
            See Source
            <img src="/vectors/source.png" alt="source" className="pl-2" />
          </a>
        </div>
        <div className="flex flex-wrap items-center my-4 text-xs">
          {
            techStack.map(tech => <span key={tech} className="py-1 px-2 m-1 bg-light-green rounded">{tech}</span>)
          }
        </div>
        <p className="text-justify">{description}</p>
      </div>
    </Modal>
  );
}

Modall.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
};

export default Modall;
