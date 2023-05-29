import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CardProgramate = () => {
  return (
    <>
      <div className="itemCards">
        <div className="titles">
          <div className="title1">
            <h3 className="fs-5">Card Programate</h3>
          </div>
        </div>
        
        <div className="cardProgramate">
          <div className="cardProgramate-bodyImg ">
            <Image
              src="/assets/icons-learn/img.jpeg"
              alt="..."
              width="252"
              height="180"
            />
            <p
              aria-hidden="true"
              className="cardProgramate-bodyImg-location"
            >
              Planetario
            </p>
            <div className="cardProgramate-bodyImg-audience">
              {" "}
              <p
                aria-hidden="true"
                className="cardProgramate-bodyImg-audience-udience"
              >
                Jóvenes y adultos
              </p>
              <p
                aria-hidden="true"
                className="cardProgramate-bodyImg-audience-modality"
              >
        
                Presencial
              </p>
            </div>
          </div>
          <div className="cardProgramate-bodyDate">
            <div className="cardProgramate-bodyDate-itemDate">
              <h3 className="cardProgramate-bodyDate-itemDate-day">2</h3>
              <h3 className="cardProgramate-bodyDate-itemDate-month">
                JUNIO
              </h3>
            </div>
          </div>
          <hr />
          <div className="cardProgramate-infoCard">
            <p
              aria-label={`Hora del evento: 7:00 pm`}
              className="cardProgramate-infoCard-hour"
            >
              {" "}
              3:00 p.m.
            </p>
            <h4 className="cardProgramate-infoCard-title">
              EJM: EJEMPLO CARD
            </h4>
            <button className="cardProgramate-infoCard-btn">VER MÁS</button>
          </div>
        </div> 

      <br />
      <br />
      <br />
        <div className="content">
          <div>
            <h3 className="content title">HTML</h3>
          </div>
          <div className=" content interfaz">
            <div className="subtitle"></div>
          </div>
        </div>
      </div>
    </>
  );
};
