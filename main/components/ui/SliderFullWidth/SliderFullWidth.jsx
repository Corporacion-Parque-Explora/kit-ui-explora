import React from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import Image from 'next/image';

export default function SliderFullWidth({
  height,
  imgBackground,
  videoBackground,
  title,
  subtitle,
  date,
  description,
  textButton,
  linkButton,
  isCentered,
}) {
  return (
    <div
      className="sliderContent"
      style={{
        backgroundImage: imgBackground
          ? `linear-gradient(90deg, rgba(0,0,0,0.49) 0%, rgba(0,0,0,0.30015756302521013) 47%, rgba(0,0,0,0.49) 100%), url(${imgBackground})`
          : '#000',
        minHeight: `${height}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={`sliderContentContainer ${isCentered && 'is-centered'}`}
        style={{ height: `${height}` }}
      >
        {!imgBackground && (
          <div
            className="sliderContentVideo"
            style={{ opacity: '0.5', height: `${height}` }}
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

        <div className={`sliderContentData `}>
          <h2 className="sliderContentDataTitle">{title}</h2>
          <h3 className="sliderContentDataSubtitle">{subtitle}</h3>

          {date && (
            <div className="sliderContentDataDate">
              <Image
                src={'/assets/home/icon-date.svg'}
                height={20}
                width={20}
                alt=""
              />
              <span>{date}</span>
            </div>
          )}
          <p className="sliderContentDataDescription">{description}</p>
          {textButton && (
            <div>
              <Link href={`${linkButton}`} legacyBehavior>
                <a className="btn-explore blue">{textButton}</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
