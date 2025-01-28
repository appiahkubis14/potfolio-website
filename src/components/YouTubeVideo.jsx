import React from "react";
import Modal from "react-modal";

const YouTubeModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="YouTube Video"
      className="youtube-modal"
      overlayClassName="youtube-overlay"
    >
      <svg
        className="close-btn-youtube"
        onClick={onRequestClose}
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g strokeWidth="0"></g>
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g>
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="#FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.16998 14.83L14.83 9.17004"
            stroke="#FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.83 14.83L9.16998 9.17004"
            stroke="#FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>{" "}
      <div className="modal-content">
        <iframe
          src="https://www.youtube.com/embed/IMxDeACOWCE"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </Modal>
  );
};

export default YouTubeModal;
