import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const CardProgramate = ({
  isNow,
  price,
  location,
  img,
  audience,
  modality,
  date,
  title,
  time,
  hour,
  slug,
}) => {
  const separatedDate = date ? date.split('-') : ['2022', 1, '27'];

  const formatedDate = new Date(
    separatedDate[0],
    separatedDate[1] - 1,
    separatedDate[2]
  );
  time && formatedDate.setHours(time / 100);
  return (
    <div className="cardProgramate">
      <div className="cardProgramate__containerImg">
        <Image
          src={img}
          alt="..."
          width="100%"
          height="52%"
          layout="responsive"
          objectFit="cover"
          aria-label={`Evento en Parque Explora para ${audience}, ${modality}, Nombre del evento: ${title}`}
        />
        <p
          aria-hidden="true"
          className="cardProgramate__containerImg--location"
        >
          {location}
        </p>
        <div className="cardProgramate__containerImg--containerAudience">
          <p
            aria-hidden="true"
            className="cardProgramate__containerImg--containerAudience__audience"
          >
            {audience}
          </p>
          <p
            aria-hidden="true"
            className="cardProgramate__containerImg--containerAudience__modality"
          >
            {modality}
          </p>
        </div>
      </div>
      <div className="cardProgramate__containerDate">
        <div className="cardProgramate__containerDate--itemDate">
          <h3 className="cardProgramate__containerDate--itemDate__day">
            {formatedDate.toLocaleString('default', {
              day: '2-digit',
            })}
          </h3>
          <h3 className="cardProgramate__containerDate--itemDate__month">
            {formatedDate
              .toLocaleString('default', {
                month: 'short',
              })
              .replace('.', '')}
          </h3>
        </div>
        {isNow && (
          <div className="cardProgramate__containerDate--itemNow">
            <span className="icon-explora icon-location-c"></span>
            <span className="ms-2 ">Ocurre ahora</span>
          </div>
        )}
      </div>
      <hr />
      <div className="cardProgramate__containerBody">
        <p
          aria-label={`Hora del evento: 7:00 pm`}
          className="cardProgramate__containerBody--hour"
        >
          {hour}
        </p>
        <h4 className="cardProgramate__containerBody--title">{title}</h4>
        <p className="cardProgramate__containerBody--price">{price || ''}</p>
        <Link href={`${slug}`} passHref legacyBehavior>
          <button
            aria-label={`Ver mas sobre el evento de HIPOPÓTAMOS`}
            className="btn-explore no-icon bg-gray"
          >
            VER MÁS
          </button>
        </Link>
      </div>
    </div>
  );
};
