import React from 'react';
import IndexBarExplora from '../IndexBarExplora/IndexBarExplora';
import Link from 'next/link';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';

export const Banner = ({ title, subtitle }) => (
  <div
    className="banner"
    style={{
      background: `url(https://imgix.cosmicjs.com/152f49e0-39c3-11ed-adfd-ddb1795c6ac6-Noche-de-sordos-banner.jpg?fit=crop&w=1354&h=588)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >
    <IndexBarExplora title={'NUESTRA PROGRAMACIÓN'} isColor={1} isTrasparent />
    <div className="banner__infoBannerProgramming">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link href={`/programate/`} passHref legacyBehavior>
        <ButtonGeneric
          href={''}
          className={`btn-explore is-bold`}
          ariaLabel={`ver mas sobre ${title}`}
          textButton={'Ver evento'}
          textTransform={'toUpperCase'}
        />
      </Link>
    </div>
  </div>
);
