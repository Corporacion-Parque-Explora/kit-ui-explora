import Image from 'next/image';
import Link from 'next/link';

export const GBCard = ({ img, title, href }) => (
  <div
    className="card-gb"
    style={{
      backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7301514355742297) 0%, rgba(255,255,255,0) 100%),url(${
        img || '#00000'
      })`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
    key={title}
  >
    {title == 'ASTRONOMÍA' ? (
      <div className="content-card">
        <Image
          src="/assets/home/icon-Astronomia.svg"
          alt=""
          height={70}
          width={80}
        />
        <h2>{title}</h2>
      </div>
    ) : title == 'BIODIVERSIDAD' ? (
      <div className="content-card">
        <Image src="/assets/home/icon-bio.svg" alt="" height={70} width={80} />
        <h2>{title}</h2>
      </div>
    ) : title == 'CIENCIAS Y HUMANIDADES' ? (
      <div className="content-card">
        <Image
          src="/assets/home/icon-Ciencias.svg"
          alt=""
          height={60}
          width={70}
        />
        <h2>{title}</h2>
      </div>
    ) : (
      ''
    )}
    <Link href={`escuela/${href}`} legacyBehavior>
      <a className="btn-escuela-OutLine white">VER MÁS </a>
    </Link>
  </div>
);
