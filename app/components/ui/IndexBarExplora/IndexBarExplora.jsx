import React from 'react';
import Link from 'next/link';

// Colores Disponibles [0]Rojo, [1]Amarillo, [2] Verde
const color = [
  'banner__indexBarExplora__indexTitle_red',
  'banner__indexBarExplora__indexTitle_yellow',
  'banner__indexBarExplora__indexTitle_green',
];

const IndexBarExplora = ({
  isTrasparent,
  isTrasparentToStatic,
  title,
  isColor,
  textColor,
  url,
}) => (
  <div
    className={`${
      isTrasparent
        ? 'banner__indexBarExplora__indexOverlay'
        : isTrasparentToStatic
        ? 'banner__indexBarExplora__isTrasparentToStatic'
        : 'banner__indexBarExplora__indexStatic'
    }`}
  >
    <Link href={url || '/'} legacyBehavior>
      <a role={'button'} href="" aria-label="Botón vover a la pagina anterior">
        <i
          className={`fs-4 icon-explora icon-arrow-left-cirlcle ${
            isTrasparent
              ? 'banner__indexBarExplora__text-white'
              : isTrasparentToStatic
              ? 'banner__indexBarExplora__isTrasparentToStatic__dynamicColor'
              : textColor
              ? `banner__indexBarExplora__text-${textColor}`
              : 'banner__indexBarExplora__text-dark'
          }`}
          style={textColor && { color: `${textColor} !important` }}
        />
      </a>
    </Link>
    <div
      className={`${
        isColor ? `${color[isColor]}` : 'banner__indexBarExplora__indexTitle'
      } ${
        isTrasparent
          ? 'banner__indexBarExplora__text-white'
          : isTrasparentToStatic
          ? 'banner__indexBarExplora__isTrasparentToStatic__dynamicColor'
          : textColor
          ? `banner__indexBarExplora__text-${textColor}`
          : 'banner__indexBarExplora__text-dark'
      }`}
    >
      <h1 className="banner__indexBarExplora__title">{title}</h1>
    </div>
  </div>
);

export default IndexBarExplora;
