import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const CardProyects = ({ img, title, description }) => (
  <div style={{ width: '348px' }}>
    <Image
      src={img}
      className="card-img-top img-fluid"
      alt={`Imagen`}
      width="343"
      height="233"
      layout="responsive"
      objectFit="cover"
      objectPosition="center"
      aria-hidden="true"
    />
    <div className="cardProyects__containerBody">
      <h3>{title}</h3>
      <p>{description}</p>

      <Link href="" passHref legacyBehavior>
        <button
          aria-label={`Ver más sobre el proyecto ${title}`}
          className="btn-explore no-icon bg-gray"
        >
          ver más
        </button>
      </Link>
    </div>
  </div>
);
