import React from 'react';
import Link from 'next/link';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';

export const CardShow = ({ slug, img, title, description, audience, tag }) => (
  <div className="cardShow">
    <div
      className="cardShow__cardImage"
      style={{
        backgroundImage: img
          ? `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${img}?fit=crop&w=406&h=261)`
          : `linear-gradient(rgba(0,0,0,1),rgba(0,0,0,1)), url(${img}?fit=crop&w=406&h=261)`,
      }}
    >
      <div className="cardShow__cardImage--showCategory">
        {audience && (
          <div aria-label={`Audiencia: ${audience}`} className="item">
            {audience}
          </div>
        )}
        {tag && tag !== 'No aplica' && (
          <div aria-label={`Etiqueta: ${tag}`} className="item">
            {tag}
          </div>
        )}
      </div>
    </div>
    <div className="cardShow__showContent">
      <h2 className="is-size-1">{title}</h2>
      <p>{description}</p>
      <Link href={`/shows/${slug}`} passHref legacyBehavior>
        <ButtonGeneric
          href={''}
          className={'cardShow__cardBtn'}
          ariaLabel={`Ver más sobre el show ${title}`}
          textButton={'Ver más'}
          textTransform={'toUpperCase'}
        />
      </Link>
    </div>
  </div>
);
