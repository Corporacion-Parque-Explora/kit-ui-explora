import React from 'react';
import { formatPeso } from '../../../middleware/moneyFormat';
import Link from 'next/link';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';

export const CardProgramatePlanetary = ({
  location,
  img,
  audience,
  modality,
  date,
  price,
  title,
  time,
  slug,
}) => {
  const separatedDate = date ? date.split('-') : ['2022', 1, '27'];

  const formatedDate = new Date(
    separatedDate[0],
    separatedDate[1] - 1,
    separatedDate[2]
  );
  return (
    <div className="cardProgramatePlanetary">
      <div
        className="cardProgramatePlanetary__containerImg"
        style={{ backgroundImage: img ? `url(${img})` : 'none' }}
      >
        {location && (
          <div
            className="cardProgramatePlanetary__containerImg__cardLocation"
            aria-label={`Ubicación: ${location}`}
          >
            {location}
          </div>
        )}
        {audience && modality && (
          <div className="cardProgramatePlanetary__containerImg__containerCategory">
            {audience && (
              <p aria-label={`Audiencia: ${audience}`}>{audience}</p>
            )}
            {modality && (
              <p aria-label={`Modalidad: ${modality}`}>{modality}</p>
            )}
          </div>
        )}
      </div>
      <div className="cardProgramatePlanetary__containerInfo">
        <div className="cardProgramatePlanetary__containerInfo--date">
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
        <div className="cardProgramatePlanetary__containerInfo--info">
          <p>{time}</p>
          <div>
            <h2 aria-label={`Evento sobre ${title}`}>{title}</h2>
          </div>
          {price && <p className="is-size-6">{formatPeso.format(price)}</p>}
          {slug && (
            <Link
              href={
                location == 'Planetario'
                  ? `/programate/${slug}/`
                  : `https://parqueexplora.org/programate/${slug}/`
              }
              passHref
              legacyBehavior
            >
              <ButtonGeneric
                href={''}
                className={''}
                ariaLabel={`ver más sobre ${title}`}
                textButton={'ver más'}
                textTransform={'toUpperCase'}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
