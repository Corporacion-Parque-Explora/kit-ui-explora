import React from 'react';
import Link from 'next/link';

export const CardContractUs = () => (
  <div
    className="cardContractUs"
    style={{
      background: `url(https://imgix.cosmicjs.com/98d69c80-8f50-11ec-bd12-cf727cdcf55d-acuarioexplora.jpg?fit=crop&w=440&h=600?fit=crop&w=440&h=600)`,
    }}
    aria-label={`Imagen Rutas pedagógicas`}
  >
    <div className="cardContractUs__overlay"></div>
    <div className="cardContractUs__content" style={{ zIndex: '1' }}>
      <h2>Rutas pedagógicas</h2>
      <p>Haz del Parque Explora el laboratorio de tu colegio</p>
    </div>
    <div className="cardContractUs__containerBtn" style={{ zIndex: '1' }}>
      <Link href={``} passHref legacyBehavior>
        <a
          className={`cardContractUs__containerBtn__btn btn-explore`}
          role="button"
          aria-label={`Ver más sobre Rutas pedagógicas`}
        >
          ver más
        </a>
      </Link>
    </div>
  </div>
);
