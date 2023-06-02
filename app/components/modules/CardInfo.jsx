import Image from "next/image";

export default function CardsInfo() {
  return (
    <div className="informationInterest">
      <div>
        <div className="itemCards">
          <div className="titles">
            <div className="title1">
              <h3 className="fs-5">Card Info</h3>
              <hr />
            </div>
          </div>
          <div className="CardsInfo">
            <div className="cardInfo">
              <Image
                aria-hidden="true"
                src="/assets/icons/icon-time2.webp"
                alt="icon"
                width={"140"}
                height={"150"}
              />

              <h3 className="infoTitle">HORARIOS Y TARIFAS</h3>
              
              <a
                role="button"
                aria-label="Ver mas sobre HORARIOS Y TARIFAS"
                className="infoButton"
                href="">
                VER MÁS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
