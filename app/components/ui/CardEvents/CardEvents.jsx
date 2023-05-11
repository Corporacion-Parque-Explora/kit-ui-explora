import Link from 'next/link';
import React from 'react';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';

export const CardEvents = ({ img, date, title, hour, slug, location }) => {
  const separatedDate = date ? date.split('-') : ['2022', 1, '27'];
  const formatedDate = new Date(
    separatedDate[0],
    separatedDate[1] - 1,
    separatedDate[2]
  );
  return (
    <div className="card-generic">
      <a>
        <div
          style={{
            backgroundImage: img
              ? 'url(https://imgix.cosmicjs.com/d7ed4460-3ac6-11ed-adfd-ddb1795c6ac6-EXOPLANETAS-BANN.jpg?fit=crop&w=322&h=250)'
              : '#000',
          }}
        ></div>
      </a>
      <div className="card-generic__card-date">
        <p>
          {formatedDate.toLocaleString('default', {
            day: '2-digit',
          })}
        </p>
        <p>
          {formatedDate
            .toLocaleString('default', {
              month: 'short',
            })
            .replace('.', '')}
        </p>
      </div>
      <div className="card-generic__containerContent">
        <h3 className="card-generic__containerContent--title">{title}</h3>
        <p className="card-generic__containerContent--info red-3 light">
          {hour}
        </p>
        <Link
          href={
            location == 'Planetario'
              ? `https:/www.planetariomedellin.org/programate/${slug}`
              : `/programate/${slug}`
          }
          legacyBehavior
        >
          <ButtonGeneric
            href={''}
            className={'btn-explore target bg-gray hover-dark'}
            ariaLabel={`Ver mas sobre: actividad ${title}`}
            textButton={'VER MÁS'}
            textTransform={'none'}
          />
        </Link>
      </div>
    </div>
  );
};
