import Image from 'next/image';
import Link from 'next/link';

export const CardBackground = ({ img, title, subtitle, format, theme }) => (
  <div className="containerCardContent">
    <div className="cardHeader">
      <Link href="#" legacyBehavior>
        <a>
          <Image src={img} alt="" width="325" height="211" />
        </a>
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
      ) : format == 'Articulo' ? (
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
      {theme == 'Medio ambiente' ? (
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
      ) : (
        ''
      )}
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Link href="" legacyBehavior>
        <a className="btn-explore target bg-gray hover-dark">
          QUIERO INSCRIBIRME
        </a>
      </Link>
    </div>
  </div>
);
