import React from 'react';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';

export const BannerWhatIs = ({ img, imgPattern, aboutUs }) => (
  <div
    className="bannerWhatIs"
    style={{ backgroundImage: img ? `url(${img})` : 'none' }}
  >
    <div
      className="bannerWhatIs__container"
      style={{ backgroundImage: imgPattern ? `url(${imgPattern})` : 'none' }}
    >
      <div className="bannerWhatIs__container--containerInfo">
        <div className="bannerWhatIs__container--containerInfo__contentInfo">
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(aboutUs.title, {
                ADD_ATTR: ['target'],
              }),
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(aboutUs.description || aboutUs.intro, {
                ADD_ATTR: ['target'],
              }),
            }}
          />

          <Link href={aboutUs.link || '/quienes-somos'} passHref legacyBehavior>
            <ButtonGeneric
              href={''}
              className={'btn-planetary'}
              textButton={'Quiero saber más'}
              textTransform={'toUpperCase'}
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
);
