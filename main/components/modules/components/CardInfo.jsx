import Image from "next/image";
export default function CardsInfo() {
  return (
    <div className="item-box">
      <div className="titles">
        <div className="title1">
          <h3 className="fs-5">Card Info</h3>
          <hr />
        </div>
      </div>

      <div className="cardInfo-header">
        <div className="cardInfo-body">
          <Image
            aria-hidden="true"
            src="/assets/icons/icon-time2.webp"
            alt="icon"
            width={"150"}
            height={"150"}
          />

          <h3 className="cardInfo-body-title">HORARIOS Y TARIFAS</h3>

          <a
            role="button"
            aria-label="Ver mas sobre HORARIOS Y TARIFAS"
            className="cardInfo-body-button"
            href=""
          >
            VER MÁS
          </a>
        </div>

        <div className="cardInfo-body">
          <Image
            aria-hidden="true"
            src="/assets/icons/location.webp"
            alt="icon"
            width={"120"}
            height={"160"}
          />

          <h3 className="cardInfo-body-title">CÓMO LLEGAR</h3>

          <a
            role="button"
            aria-label="Ver mas sobre HORARIOS Y TARIFAS"
            className="cardInfo-body-button"
            href=""
          >
            VER MÁS
          </a>
        </div>

        <div className="cardInfo-body">
          <Image
            aria-hidden="true"
            src="/assets/icons/icon-people.webp"
            alt="icon"
            width={"200"}
            height={"150"}
          />

          <h3 className="cardInfo-body-title">INGRESO GRATUITO</h3>

          <a
            role="button"
            aria-label="Ver mas sobre HORARIOS Y TARIFAS"
            className="cardInfo-body-button"
            href=""
          >
            VER MÁS
          </a>
        </div>

        <div className="cardInfo-body">
          <Image
            aria-hidden="true"
            src="/assets/icons/icon-percentage.webp"
            alt="icon"
            width={"130"}
            height={"150"}
          />

          <h3 className="cardInfo-body-title">DESCUENTOS</h3>

          <a
            role="button"
            aria-label="Ver mas sobre HORARIOS Y TARIFAS"
            className="cardInfo-body-button"
            href=""
          >
            VER MÁS
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
