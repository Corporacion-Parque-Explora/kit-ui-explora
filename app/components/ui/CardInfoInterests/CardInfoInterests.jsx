import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';

export const CardInfoInterests = ({ extraInfo }) => (
  <div className="cardInfoInterests">
    {extraInfo.schedule_rate.icon.url && (
      <Image
        src={
          extraInfo?.schedule_rate.icon.imgix_url ||
          '/assets/icons/icon-clock-green.png'
        }
        alt="icon"
        objectFit="contain"
        width={'120'}
        height={'150'}
        aria-hidden="true"
      />
    )}
    <h3>{extraInfo?.schedule_rate.title}</h3>
    <Link
      href={`/visitanos/${extraInfo?.schedule_rate.link}`}
      passHref
      legacyBehavior
    >
      <ButtonGeneric
        className={'btn-planetary target cardInfoInterests__infoButtton'}
        href={''}
        ariaLabel={`Ver mas sobre ${extraInfo?.schedule_rate.title}`}
        textTransform={'none'}
        textButton={'Ver más'}
      />
    </Link>
  </div>
);
