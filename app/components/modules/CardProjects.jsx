import React from "react";
import Image from "next/image";


export const CardProjects = () => {
  return (
    <div className="itemCards">
      <div className="titles">
        <div className="title1">
          <h3 className="fs-5">Card Proyectos</h3>
        </div>
      </div>


      <div style={{ width: "348px" }}>
        <Image
          src="/assets/icons-learn/img.jpeg"
          classame="card-img-top img-fluid"
          alt="Imagen"
          width="343"
          height="233"
        />
        <div className="cardProyects-body">
          <h3>EJEMPLO TITULO </h3>
          <p>
            popularizado en los 60s con la creación de las hojas etraset, las
            cuales contenian pasajes de Lorem Ipsum, y más recientemente con
            software de autoedición, como por ejemplo Aldus PageMaker, el cual
            incluye versiones de Lorem Ipsum.
          </p>

         
            <button className="btn no-icon bg-gray">ver más</button>
         
        </div>
      </div>
    </div>
  );
};
