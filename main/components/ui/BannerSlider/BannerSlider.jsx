import React from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export const BannerSlider = ({
  content,
  imgBackground,
  videoBackground,
  title,
  subtitle,
  description,
  textButton,
  linkButton,
  isPlanetary,
  outPage,
}) => {
  // usar reducer de accesibilidad
  const { hideImages, stopAnimations } = useSelector(
    (state) => state.accesibility
  );

  const cleanContent = content?.map((item) => ({
    title: item.title,
    ...item.metadata,
  }));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <div className="tabs container">
          <ul className="nav-tabs"> {dots} </ul>
        </div>
      </div>
    ),
    customPaging: (i) => (
      <div className="tab-content">
        {
          <>
            <h3 className="tab-number">{`0${i + 1}`}</h3>
            <p className="tab-text is-size-3">{cleanContent[i].title}</p>
          </>
        }
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      {cleanContent?.map((item, index) => (
        <div
          key={index}
          className="bannerSlider"
          style={{
            background: !hideImages
              ? `url(${imgBackground}?fit=crop&w=1542&h=700)`
              : '#000',
          }}
        >
          <div className="bannerSlider__container">
            <div className="bannerSlider__container&--containerContent">
              {!hideImages && (
                <ReactPlayer
                  className={`bg-video`}
                  url={`${videoBackground}`}
                  playing={!stopAnimations}
                  width={'auto'}
                  height={'auto'}
                  loop={true}
                  muted={true}
                />
              )}
            </div>
            <div className="container px-lg-0 py-5" style={{ zIndex: '1' }}>
              <div className="content-slide">
                <div className="col-lg-6 py-5">
                  <h2 className={`slider-title fs-1`}>{title}</h2>
                  <h3 className={`slider-subtitle is-size-1 mb-4`}>
                    {subtitle}
                  </h3>
                  <p className={`slider-description mb-4`}>{description}</p>
                  {textButton && (
                    <div>
                      {outPage == 'Externo' ? (
                        <a
                          href={`${linkButton}`}
                          className={
                            isPlanetary ? `btn-planetary` : 'btn-explore'
                          }
                          target="_blank"
                          title={`${title}`}
                          rel="noreferrer"
                          role={`button`}
                        >
                          {textButton}
                        </a>
                      ) : (
                        <Link href={`${linkButton}`} passHref legacyBehavior>
                          <a
                            href=""
                            className={
                              isPlanetary ? `btn-planetary` : 'btn-explore'
                            }
                            title={`${title}`}
                            role={`button`}
                          >
                            {textButton}
                          </a>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
