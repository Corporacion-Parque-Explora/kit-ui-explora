import React from 'react';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';
import { formatPeso } from '../../../middleware/moneyFormat';

export const CardStorePlanetary = ({ title, thumbnail, link, price }) => (
  <>
    <div className="cardStorePlanetary">
      <a
        role="button"
        aria-label={`Comprar ${title}`}
        target={'_blank'}
        href={link || '/'}
        rel="noreferrer"
      >
        <div
          style={{
            background: `url(${thumbnail}?fit=crop&w=296&h=250)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: thumbnail ? '1' : '0',
          }}
        />
      </a>

      <div className="cardStorePlanetary__containerInfo">
        <h3>{title}</h3>
        <p className="is-size-2 fw-bold">{formatPeso.format(price)}</p>
        <ButtonGeneric
          className={'btn-planetary target'}
          href={link}
          target={'_blank'}
          ariaLabel={`Comprar ${title}`}
          textButton={'Comprar'}
          textTransform={'none'}
        />
      </div>
    </div>
  </>
);
