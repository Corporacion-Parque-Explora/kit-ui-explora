/* eslint-disable no-undef */
import Image from 'next/image';
import Link from 'next/link';

export const CardHome = ({
  img,
  category,
  title,
  name,
  date,
  isSlider,
  slug,
}) => {
  const separatedDate = date?.split('-');
  const formatedDate = separatedDate
    ? new Date(separatedDate[0], separatedDate[1] - 1, separatedDate[2])
    : '';

  console.log(formatedDate);

  return (
    img && (
      <div className={`cardPensive ${isSlider && 'cardPensiveSlider'}`}>
        <div className="cardHeader">
          <Link href={`/${slug}` || ''}>
            <Image
              src={img}
              alt=""
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </Link>
          {category == 'Ciencias y humanidades' ? (
            <>
              <div className="CardHeaderIcon">
                <Image
                  src="/assets/home/icon-Ciencias.svg"
                  alt=""
                  width={50}
                  height={40}
                />
              </div>
              <p className="CardHeaderCategory bg-00">
                {'Ciencias y humanidades'}
              </p>
            </>
          ) : category == 'Astronomía' ? (
            <>
              <div className="CardHeaderIcon">
                <Image
                  src="/assets/home/icon-Astronomia.svg"
                  alt=""
                  width={50}
                  height={40}
                />
              </div>
              <p className="CardHeaderCategory bg-01">{'Astronomía'}</p>
            </>
          ) : category == 'Biodiversidad' ? (
            <>
              <div className="CardHeaderIcon">
                <Image
                  src="/assets/home/icon-Biodiversidad.svg"
                  alt=""
                  width={50}
                  height={40}
                />
              </div>
              <p className="CardHeaderCategory bg-03">{'Biodiversidad'}</p>
            </>
          ) : (
            ''
          )}
        </div>

        <div className="cardDate">
          <p>
            {formatedDate.toLocaleString('default', {
              day: '2-digit',
            })}
          </p>
          <p>
            {formatedDate
              .toLocaleString('default', {
                month: 'short',
              })
              .replace('.', '')}
          </p>
        </div>
        <br />
        <hr />
        <div className="CardBodyText">
          <h1>{title}</h1>
          <p className="color-01">{name}</p>

          <Link href={`/${slug}` || ''} legacyBehavior>
            <a className="btn-explore target hover-dark">VER MÁS</a>
          </Link>
        </div>
      </div>
    )
  );
};
