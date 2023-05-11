import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';

export const CardLearn = ({
  img,
  title,
  shortDescription,
  format,
  theme,
  logoFormat,
  logoTheme,
  slug,
}) =>
  img && (
    <div className="cardLearn">
      <div className="cardLearn__containerImg">
        <Link href={`${slug}`} passHref legacyBehavior>
          <a href="">
            <Image
              src={`${img}?fit=crop&w=490&h=255`}
              className="card-img-top img-fluid "
              alt="..."
              width="100%"
              height="52%"
              layout="responsive"
              objectFit="cover"
              aria-hidden="true"
            />
          </a>
        </Link>
        <div className="cardLearn__containerImg--cardFormat">
          {logoFormat && (
            <Image
              src={logoFormat}
              className="img-fluid"
              alt={`Logo ${format}`}
              width="19%"
              height="21%"
              layout="fixed"
              objectFit="contain"
              aria-hidden="true"
            />
          )}
          <p>{format}</p>
        </div>
      </div>
      <div className="cardLearn__containerBody">
        <div className="cardLearn__containerBody--cardTheme">
          {logoTheme && (
            <Image
              src={logoTheme}
              className="img-fluid"
              alt={`Logo  ${theme}`}
              width="19%"
              height="21%"
              layout="fixed"
              objectFit="contain"
              aria-hidden="true"
            />
          )}
          <p className="mb-0 text-white">{theme}</p>
        </div>
        <h3 className="cardLearn__containerBody--title">{title}</h3>
        <p className="cardLearn__containerBody--description">
          {shortDescription}
        </p>
        <Link href={`${slug}`} passHref legacyBehavior>
          <ButtonGeneric
            href={''}
            className={'btn-explore no-icon bg-gray'}
            ariaLabel={`Ver más sobre ${title}`}
            textButton={'VER'}
            textTransform={'none'}
          />
        </Link>
      </div>
    </div>
  );
