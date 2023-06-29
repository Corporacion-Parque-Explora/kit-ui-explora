import React from "react";
import Image from "next/image";

export const CardProjects = () => {
  const exampleCodeFontsInLine = ` <div className="cardProyects">
  <div className="cardProyects-img">
    <Image
      src="/assets/icons-learn/hd.jpeg"
      alt="Imagen"
      width="330"
      height="240"
    />
  </div>

  <div className="cardProyects-body">

    <h3 className="cardProyects-body-title"> EJEMPLO TITULO </h3>

    <p className="cardProyects-body-info">
      popularizado en los 60s con la creación de las hojas etraset, las
      cuales contenian pasajes de Lorem Ipsum, y más recientemente con
      software de autoedición, como por ejemplo Aldus PageMaker, el cual
      incluye versiones de Lorem Ipsum.popularizado en los 60s con la
    </p>

    <button className="cardProyects-body-btn"> ver más </button>

  </div>
</div>`;

  return (
    <div className="itemCards">
      <div className="titles">
        <div className="title1">
          <h3 className="fs-5">Card Proyectos</h3>
        </div>
      </div>
      <hr />
      <br />

      <div className="cardProyects">
        <div className="cardProyects-img">
          <Image
            src="/assets/icons-learn/hd.jpeg"
            alt="Imagen"
            width="330"
            height="240"
          />
        </div>
        <div className="cardProyects-body">
          <h3 className="cardProyects-body-title">EJEMPLO TITULO </h3>
          <p className="cardProyects-body-info">
            popularizado en los 60s con la creación de las hojas etraset, las
            cuales contenian pasajes de Lorem Ipsum, y más recientemente con
            software de autoedición, como por ejemplo Aldus PageMaker, el cual
            incluye versiones de Lorem Ipsum.popularizado en los 60s con la
          </p>
          <button className="cardProyects-body-btn">ver más</button>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
