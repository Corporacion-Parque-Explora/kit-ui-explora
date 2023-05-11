import Link from 'next/link';

export const IndexBarSchool = ({ title, href, isRed, isGreen, isBlue }) => (
  <div className="indexBarSchool">
    <Link href={href} legacyBehavior>
      <a
        className="indexBarSchoolIcon"
        aria-label="Botón para volver a la página anterior"
      >
        <i className="icon-explora icon-arrow-left-cirlcle"></i>{' '}
      </a>
    </Link>
    <div className="indexBarSchoolContent">
      <h2 className="indexBarSchoolContentTitle">{title}</h2>
      <hr
        className={`${
          isRed ? 'isRed' : isGreen ? 'isGreen' : isBlue ? 'isBlue' : ''
        }`}
      />
    </div>
  </div>
);
