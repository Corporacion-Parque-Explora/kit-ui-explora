import Link from 'next/link';

export default function InformationBar({
  iconCol1,
  titleCol1,
  texxtCol1,
  iconCol2,
  titleCol2,
  texxtCol2,
  iconCol3,
  titleCol3,
  texxtCol3,
  linkAbout,
  linkSchedule,
  linkLocation,
}) {
  return (
    <div className="wrapper-infobar">
      <div className="Infobar">
        <Link href={`${linkAbout}`} passHref legacyBehavior>
          <a href="" className="col-">
            <div>
              <i
                aria-hidden="true"
                aria-label="Icono"
                className={`icon-explora ${iconCol1}`}
              ></i>
            </div>
            <div>
              <h3 className="is-size-3">{titleCol1}</h3>
              <p className="is-size-4">{texxtCol1}</p>
            </div>
          </a>
        </Link>
        <Link href={`${linkSchedule}`} passHref legacyBehavior>
          <a href="" className="col- center">
            <div>
              <i
                aria-hidden="true"
                aria-label="Icono"
                className={`icon-explora ${iconCol2}`}
              ></i>
            </div>
            <div>
              <h3 className="is-size-3">{titleCol2}</h3>
              <p className="is-size-4">{texxtCol2}</p>
            </div>
          </a>
        </Link>
        <Link href={`${linkLocation}`} passHref legacyBehavior>
          <a href="" className="col- ">
            <div>
              <i
                aria-hidden="true"
                aria-label="Icono"
                className={`icon-explora ${iconCol3}`}
              ></i>
            </div>
            <div>
              <h3 className="is-size-3">{titleCol3}</h3>
              <p className="is-size-4">{texxtCol3}</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
