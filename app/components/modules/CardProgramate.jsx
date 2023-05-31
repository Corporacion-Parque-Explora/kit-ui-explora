import React from "react";
import Image from "next/image";
import ExampleCard from "./ExamplesCards";

export const CardProgramate = () => {
  const exampleCodeFontsInLine = ` <div className="cardp is-active">
  <div className="cardp-header ">
    <Image
      src="/assets/icons-learn/img.jpeg"
      alt="..."
      width="298"
      height="200"
    />
    <div aria-hidden="true" className="cardp-header-location"> Planetario </div>
    <div className="cardp-header-audience">
      <p aria-hidden="true" className="cardp-header-audience-tag"> Jóvenes y adultos </p>
      <p aria-hidden="true" className="cardp-header-audience-modality"> Presencial </p>
    </div>
  </div>
  
  <div className="cardp-bodyDate">
    <div className="cardp-bodyDate-itemDate">
      <h3 className="cardp-bodyDate-itemDate-day"> 2 </h3>
      <h3 className="cardp-bodyDate-itemDate-month"> JUNIO </h3>
    </div>
  </div>
  <span className="separatorCard"></span>
  <div className="cardp-infoCard">
    <p aria-label={"Hora del evento: 3:00 pm"}className="cardp-infoCard-hour"> 3:00 p.m. </p>
    <h4 className="cardp-infoCard-title"> EJM: EJEMPLO CARD </h4>
    <button className="cardp-infoCard-btn"> VER MÁS </button>
  </div>
</div> `;

  return (
    <>
      <div className="itemCards">
        <div className="titles">
          <div className="title1">
            <h3 className="fs-5">Card Programate</h3>
          </div>
        </div>
        <hr />
        <br />

        <div className="cardp is-active">
          <div className="cardp-header ">
            <Image
              src="/assets/icons-learn/img.jpeg"
              alt="..."
              width="298"
              height="200"
            />
            <div aria-hidden="true" className="cardp-header-location">
              {" "}
              Planetario{" "}
            </div>
            <div className="cardp-header-audience">
              <p aria-hidden="true" className="cardp-header-audience-tag">
                {" "}
                Jóvenes y adultos{" "}
              </p>
              <p aria-hidden="true" className="cardp-header-audience-modality">
                Presencial
              </p>
            </div>
          </div>

          <div className="cardp-body">
            <div className="cardp-body-date">
              <h3 className="cardp-body-date-day">2</h3>
              <h3 className="cardp-body-date-month">JUNIO</h3>
            </div>
            <div>
              <div className="cardp-body-date-itemNow">
                <span className="icon-explora icon-location-c"></span>
                <span className="">Ocurre ahora</span>
              </div>
            </div>
          </div>
          <span className="separatorCard"></span>
          <div className="cardp-infoCard">
            <p
              aria-label={`Hora del evento: 3:00 pm`}
              className="cardP-infoCard-hour"
            >
              {" "}
              3:00 p.m.{" "}
            </p>
            <h4 className="cardp-infoCard-title">EJM: EJEMPLO CARD</h4>
            <button className="cardp-infoCard-btn">VER MÁS</button>
          </div>
        </div>

        <br />
        <br />
        <br />

        <ExampleCard
          exampleCode={exampleCodeFontsInLine}
          language={"javascript"}
        ></ExampleCard>
      </div>
    </>
  );
};
