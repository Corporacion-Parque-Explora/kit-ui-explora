import React from 'react';

export const ModalTrailer = ({ trailerVideo, handleModal }) => (
  <div
    style={{
      display: `flex`,
    }}
    className="containerModalSessions"
  >
    <div className="modalSessions" onClick={() => handleModal(false)}></div>
    <div className="modalSessions__modalWindow">
      <div
        className="modalSessions__modalWindow--btnClose"
        role={'button'}
        onClick={() => handleModal(false)}
      >
        <i className="icon-explora icon-close is-size-5" />
      </div>
      <iframe src={trailerVideo} scrolling="no" />
    </div>
  </div>
);
