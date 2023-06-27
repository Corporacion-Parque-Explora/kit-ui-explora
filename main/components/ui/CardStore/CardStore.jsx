import React from 'react';

export const CardStore = () => (
  <div className="card-generic">
    <a>
      <div
        style={{
          backgroundImage:
            'url(https://imgix.cosmicjs.com/d7ed4460-3ac6-11ed-adfd-ddb1795c6ac6-EXOPLANETAS-BANN.jpg?fit=crop&w=322&h=250)',
        }}
      ></div>
    </a>
    <div className="card-generic__containerContent">
      <h3 className="card-generic__containerContent--title">
        chiribiquete medellin, un universo inesperado
      </h3>
      <p className="card-generic__containerContent--info red-3 bold">
        $ 10.000 COP
      </p>
      <a
        role={'button'}
        aria-label={''}
        className="btn-explore target bg-gray hover-dark"
      >
        COMPRAR
      </a>
    </div>
  </div>
);
