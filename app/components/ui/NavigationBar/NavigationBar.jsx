import React from 'react';

export const NavigationBar = ({ data, onClicked, navigationIndex }) => (
  <div className="navigationBar">
    <ul>
      {data.length <= 4 ? (
        data?.map((item, index) => (
          <li
            key={index}
            style={{
              width: `calc(100%/${data.length})`,
              marginRight: `${data.length - 1 === index && '0'}`,
            }}
            onClick={() => onClicked('', index)}
          >
            <div>
              <p>{`0${index + 1}`}</p>
              <div
                className={`isInactiveMobile ${
                  navigationIndex === index ? 'isActiveMobile' : ''
                }`}
                style={{ display: 'block' }}
              ></div>
            </div>
            <div>
              <h3>{item.title}</h3>
              <div
                className={`isInactiveDesktop ${
                  navigationIndex === index ? 'isActiveDesktop' : ''
                }`}
              ></div>
            </div>
          </li>
        ))
      ) : (
        <li style={{ width: '100%', borderRight: '0' }}>
          <div>
            <p>{`0${navigationIndex + 1}`}</p>
          </div>
          <div>
            <h3>{data[navigationIndex]?.title}</h3>
          </div>
        </li>
      )}
    </ul>
  </div>
);
