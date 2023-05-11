import Link from 'next/link';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';
import { ModalTrailer } from '../ModalTrailer/ModalTrailer';
import useScrollBlock from '../../../hooks/useScrollBlock';

export const BannerSlugPlanetary = ({
  imgBackground,
  videoBackground,
  title,
  subtitle,
  minHeightSlider,
  linkButton,
  textButton,
  trailer,
}) => {
  const { block, unBlock } = useScrollBlock();
  const [modal, setModal] = useState(false);
  const handleModal = (status) => {
    setModal(status);
    status === true ? block() : unBlock();
  };
  return (
    <div className="bannerSlugPlanetary">
      <div
        className="bannerSlugPlanetary__container"
        style={{
          background: imgBackground
            ? `linear-gradient(90deg, rgba(0,0,0,0.49) 0%, rgba(0,0,0,0.48923319327731096) 47%, rgba(0,0,0,0.49) 100%),url(${imgBackground})`
            : '',
          minHeight: `${minHeightSlider}`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="bannerSlugPlanetary__container--containerContent"
          style={{ minHeight: `${minHeightSlider}` }}
        >
          {videoBackground && (
            <div
              className="bannerSlugPlanetary__container--containerContent__containerVideo"
              style={{ minHeight: `${minHeightSlider}` }}
            >
              <ReactPlayer
                className={`bg-video`}
                url={`${videoBackground}`}
                playing={true}
                width={'auto'}
                height={'auto'}
                loop={true}
                muted={true}
              />
            </div>
          )}
          <div className="bannerSlugPlanetary__container--containerContent__containerInfo">
            <div>
              <div>
                <h2>{title || ''}</h2>
                <h3>{subtitle || ''}</h3>
                {}
              </div>
              {textButton && (
                <div>
                  <Link href={linkButton} passHref legacyBehavior>
                    <ButtonGeneric
                      href={''}
                      textButton={textButton}
                      textTransform={'toUpperCase'}
                      className={`btn-planetary`}
                    />
                  </Link>
                  {trailer && (
                    <ButtonGeneric
                      className={`btn-planetary blue`}
                      onClicked={handleModal}
                      textButton={'ver trailer'}
                      textTransform={'toUpperCase'}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <ModalTrailer trailerVideo={trailer} handleModal={handleModal} />
      )}
      <div className="bannerSlugPlanetary__header">
        <Link href={'/docs/planetario'} legacyBehavior>
          <a
            role={'button'}
            aria-label="botón: Volver a la página anterior"
            href=""
            className="planetary"
          >
            <i
              aria-hidden="true"
              className="icon-explora icon-arrow-left-cirlcle"
            />
          </a>
        </Link>
        <Link href={'/docs/planetario'} legacyBehavior>
          <a aria-hidden="true" href="" className="planetary">
            Programate{' '}
          </a>
        </Link>
        {'>'}
        <Link href={'/docs/planetario'} legacyBehavior>
          <a aria-hidden="true" href="" className="ms-2 planetary">
            {title}
          </a>
        </Link>
      </div>
    </div>
  );
};
