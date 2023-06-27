import React from 'react';

export const ButtonGeneric = ({
  href,
  className,
  textButton,
  target,
  ariaLabel,
  textTransform,
  onClicked,
}) => (
  <>
    {onClicked ? (
      <button
        className={className}
        role={'button'}
        aria-label={ariaLabel}
        onClick={() => onClicked(true)}
        style={{ cursor: 'pointer' }}
      >
        {textTransform === 'toUpperCase'
          ? textButton.toUpperCase()
          : textButton}
        {textTransform === 'none' ? textButton : null}
      </button>
    ) : (
      <a
        href={href || ''}
        target={target || null}
        className={className}
        role={'button'}
        aria-label={ariaLabel}
      >
        {textTransform === 'toUpperCase' && textButton.toUpperCase()}
        {textTransform === 'none' && textButton}
      </a>
    )}
  </>
);
