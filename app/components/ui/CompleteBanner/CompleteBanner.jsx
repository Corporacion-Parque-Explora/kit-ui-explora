/* eslint-disable camelcase */
import BackLink from '../BackLink/BackLink';

const CompleteBanner = ({ data = {}, sections = [], backLink = './' }) => {
  const { title, subtitle, background_img, topic } = data;

  return (
    <div
      className="complete-banner"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.6),rgba(0,0,0,0.2)), url(${
          background_img || ''
        })`,
        height: '50vh',
        maxHeight: '50vh',
      }}
    >
      <BackLink sections={sections} href={backLink}></BackLink>
      <div className="complete-banner__container">
        <span>{topic}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CompleteBanner;
