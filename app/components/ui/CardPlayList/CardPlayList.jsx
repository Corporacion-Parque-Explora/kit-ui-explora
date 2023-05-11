import React from 'react';

export const CardPlayList = ({ img, title, url }) => (
  <div
    className="cardPlayList"
    style={{
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="cardPlayListContent">
      <h2 className="cardPlayListContentTitle">{title}</h2>
      <div className="cardPlayListContentBtn">
        <a
          href={`/${url}`}
          target="_blank"
          rel="noreferrer"
          className="btn-explore btn-simple"
        >
          VER MÁS
        </a>
      </div>
    </div>
  </div>
);
