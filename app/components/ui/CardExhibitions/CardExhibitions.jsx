import React from 'react';
import Image from 'next/image';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';

export const CardExhibitions = () => (
  <div className="cardExhibitions">
    <Image
      src={
        'https://imgix.cosmicjs.com/f6a69870-ac5a-11ec-bd4d-d755cb3d1844-Enmascarar-grupo-301.png'
      }
      alt="..."
      width="736"
      height="654"
      aria-hidden="true"
    />
    <div className="cardExhibition1MouseOver">
      <h3>El vuelo de las aves</h3>

      <div className="cardExhibition1MouseOver__containerText">
        Conoce las maravillas de “El vuelo de las aves” en tu recorrido por
        nuestro museo de ciencias y, también, con experiencias digitales. Vuela
        con nosotros.
      </div>
      <ButtonGeneric
        className={'btn-explore btn-simple'}
        href={''}
        title={'El vuelo de las aves'}
        textButton={'VER MÁS'}
        textTransform={'toUpperCase'}
      />
    </div>
    <div className="cardExhibition1">
      <h4 className="is-size-1">EL VUELO DE LAS AVES</h4>
    </div>
  </div>
);
