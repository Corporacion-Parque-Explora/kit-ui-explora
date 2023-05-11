import Image from 'next/image';
import Link from 'next/link';

export const CardContents = ({ img, title, subtitle, format, theme, slug }) => (
  <div className="containerCardContent">
    <div className="cardHeader">
      <Link href={slug}>
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

      {format == 'Interactivo' ? (
        <div className="cardFormat">
          <Image
            src="/assets/icons-learn/icon-interactive-black.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{format}</p>
        </div>
      ) : format == 'Multimedia' ? (
        <div className="cardFormat">
          <Image
            src="/assets/icons-learn/icon-multimedia-black.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{format}</p>
        </div>
      ) : format == 'Actividad' ? (
        <div className="cardFormat">
          <Image
            src="/assets/icons-learn/icon-activity-black.png"
            alt=""
            width={17}
            height={20}
          />
          <p>{format}</p>
        </div>
      ) : format == 'Audio' ? (
        <div className="cardFormat">
          <Image
            src="/assets/icons-learn/icon-sound-black.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{format}</p>
        </div>
      ) : format == 'Lengua de señas' ? (
        <div className="cardFormat">
          <Image
            src="/assets/icons-learn/icon-sing-lenguage-black.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{format}</p>
        </div>
      ) : format == 'Artículo' ? (
        <div className="cardFormat">
          <Image
            src="/assets/icons-learn/icon-article-black.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{format}</p>
        </div>
      ) : (
        ''
      )}
    </div>

    <div className="cardBody">
      {theme == 'Medio Ambiente' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/icon-enviroment.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : theme == 'Astronomía' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/icon-astronomy.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : theme == 'Biología' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/icon-biology.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : theme == 'Física' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/icon-physics.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : theme == 'Salud' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/icon-health-white.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : theme == 'Ciencias sociales' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/icon-social-sciences.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : theme == 'Tecnología' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/icon-technology.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : theme == 'Arte' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/icon-art.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : theme == 'Física' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/icon-physics.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : theme == 'Historia' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/icon-history.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : theme == 'Ciencias exactas y naturales' ? (
        <div className="cardTheme">
          <Image
            src="/assets/icons-learn/medio-ambiente.png"
            alt=""
            width={20}
            height={20}
          />
          <p>{theme}</p>
        </div>
      ) : (
        ''
      )}

      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Link href={slug} legacyBehavior>
        <a className="btn-explore target bg-gray hover-dark">Ver más</a>
      </Link>
    </div>
  </div>
);
