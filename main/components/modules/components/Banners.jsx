import Link from "next/link";
import ReactPlayer from "react-player";
import Banner from "../../ui/Banner/Banner";
import Slider from "../../ui/Slider/Slider";

export default function Banners() {
  const x = [0, 0, 0, 0, 0, 0];
  return (
    <div className="main-container" id="banners">
      <div className="titles">
        <div className="">
          <h3 className="title1 fs-5">Objeto Banner - Slider</h3>
        </div>
      </div>
      <p className="is-size-2">
        Se creo un objeto usando la librería swiper llamado
        {" <Banner></Banner>"}, todo lo que este adentro de este objeto ya queda
        automaricamente entre un slider
      </p>
      <br />
      <Banner>
        <div className="banner-slide-content">
          <div className="banner-slide is-blue">
            <h3>Banner principal</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur eos ipsum odio minima porro, perferendis accusantium
              magni natus voluptatum aperiam.
            </p>
          </div>
        </div>
        <div className="banner-simple-slide has-bg-primary">
          <div className="banner-simple-slide-col-1">
            <h3>Banner dos columnas</h3>
            <p className="subtitle">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur eos ipsum odio minima porro, perferendis accusantium
              magni natus voluptatum aperiam.
            </p>
          </div>
          <div className="banner-simple-slide-col-2">
            --------------------- Área para ilustración random
            -----------------------
          </div>
        </div>
        <div className={"banner-basic  is-green"}>
          <h2 className={"banner-basic-text"}>
            {` La trascendencia de un museo no se mide por el número de visitantes, sino por la conversación que genera.\n\n- Jorge Wagensberg`}
          </h2>
        </div>
      </Banner>
      <pre className="code-container">
        <code>
          {`
          <Banner>
            {Lista de slides}
          </Banner>
          `}
        </code>
      </pre>
      <br />

      <p className="is-size-2">
        Se creo un objeto usando la librería swiper llamado
        {" <Slider></Slider>"}, esta diseñado para poner multiples cards o
        componentes pequeños
      </p>
      <br />
      <Slider>
        {x.map((item, index) => (
          <div className="cardGeneric" key={index}>
            <a>
              <div
                style={{
                  backgroundImage:
                    "url(https://imgix.cosmicjs.com/d7ed4460-3ac6-11ed-adfd-ddb1795c6ac6-EXOPLANETAS-BANN.jpg?fit=crop&w=322&h=250)",
                }}
              ></div>
            </a>

            <div className="cardGeneric-date">
              <p>19 </p>
              <p>MAY</p>
            </div>

            <div className="cardGeneric-body">
              <h3 className="cardGeneric-body title">Ejemplo de titulo</h3>
              <p className="cardGeneric-body hour">3:00 p.m.</p>
              <button className="cardGeneric-body-btn">VER MÁS</button>
            </div>
          </div>
        ))}
      </Slider>
      <pre className="code-container">
        <code>
          {`
          <Slider>
            {Lista de componentes}
          </Slider>
          `}
        </code>
      </pre>
      <div className="titles">
        <div className="">
          <h3 className="title1 fs-5">Banners - Slides</h3>
        </div>
      </div>
      <br />
      <p>
        Los banners son diseños de slides que se usan para tener plantillas del
        contenido. Para cambiar su imagen de fondo se hace directamente desde
        los estilos. Si se agrega un main-title o un info-title estos se
        acomodan por defecto en la esquina superior derecha
      </p>
      <br />
      <div className="main-title">Banner principal</div>
      <Banner>
        <div className="banner-slide is-blue">
          <div className="banner-slide-content">
            <h3>Banner principal</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur eos ipsum odio minima porro, perferendis accusantium
              magni natus voluptatum aperiam.
            </p>
            <div className="banner-info-btns">
              <a href="">Sección 1</a>
              <a href="">Sección 2</a>
              <a href="">Sección 3</a>
            </div>
          </div>
        </div>
      </Banner>
      <pre className="code-container">
        <code>
          {`
  <Banner>
      <div className="banner-slide is-blue">
        <div className="banner-slide-content">
          <h3>Banner principal</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur eos ipsum odio minima porro, perferendis accusantium
            magni natus voluptatum aperiam.
          </p>
          <div className="banner-info-btns">
            <a href="">Sección 1</a>
            <a href="">Sección 2</a>
            <a href="">Sección 3</a>
          </div>
        </div>
      </div>
    </Banner>`}
        </code>
      </pre>
      <br />
      <div className="main-title">Banner de dos columnas</div>
      <Banner>
        <div className="banner-simple-slide has-bg-primary">
          <div className="banner-simple-slide-col-1">
            <h3>Banner dos columnas</h3>
            <p className="subtitle">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur eos ipsum odio minima porro, perferendis accusantium
              magni natus voluptatum aperiam.
            </p>
          </div>
          <div className="banner-simple-slide-col-2">
            --------------------- Área para ilustración random
            -----------------------
          </div>
        </div>
      </Banner>
      <pre className="code-container">
        <code>
          {`
          <Banner>
              <div className="banner-simple-slide has-bg-primary">
                <div className="banner-simple-slide-col-1">
                  <h3>Banner dos columnas</h3>
                  <p className="subtitle">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aspernatur eos ipsum odio minima porro, perferendis
                    accusantium magni natus voluptatum aperiam.
                  </p>
                </div>
                <div className="banner-simple-slide-col-2">
                  --------------------- Área para ilustración random
                  -----------------------
                </div>
              </div>
            </Banner>`}
        </code>
      </pre>
      <br />
      <div className="main-title">Banner básico</div>
      <p>Solo tiene un título o texto en el banner</p>
      <br />
      <Banner>
        <div className={"banner-basic  is-green"}>
          <h2 className={"banner-basic-text"}>
            {` La trascendencia de un museo no se mide por el número de visitantes, sino por la conversación que genera.\n\n- Jorge Wagensberg`}
          </h2>
        </div>
      </Banner>
      <pre className="code-container">
        <code>
          {`
          <Banner>
              <div className={"banner-basic  is-green"}>
                <h2 className={"banner-basic-text"}>
                  {" La trascendencia de un museo no se mide por el número de visitantes,
                   sino por la conversación que genera.- Jorge Wagensberg"}
                </h2>
              </div>
          </Banner>`}
        </code>
      </pre>
      <div className="main-title">Banner con video</div>
      <p>
        Para este banner se usa la librería react-player, se puede usar en su
        interior cualquiera de los otros slides
      </p>
      <br />
      <code>npm i react-player</code>
      <br />
      <br />
      <br />
      <Banner>
        <div className={"banner-video"}>
          <div className={"banner-video-container"}>
            {
              /* data.video */ true && (
                <ReactPlayer
                  className="bg-video"
                  url={
                    "https://cdn.cosmicjs.com/797b9b00-8f42-11ec-bd12-cf727cdcf55d-sala-acuario.mp4"
                  }
                  playing
                  loop={true}
                  muted={true}
                  height="auto"
                  width="100%"
                />
              )
            }
          </div>

          <div className="banner-slide ">
            <h3>Banner principal</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur eos ipsum odio minima porro, perferendis accusantium
              magni natus voluptatum aperiam.
            </p>
            <div className="banner-info-btns">
              <a href="">Sección 1</a>
              <a href="">Sección 2</a>
              <a href="">Sección 3</a>
            </div>
          </div>
        </div>
      </Banner>
      <br />
      <pre className="code-container">
        <code>
          {` 
        <div className={"banner-video"} >
            <div className={"banner-video-container"}>
              {
                /* data.video */ true && (
                  <ReactPlayer
                    className="bg-video"
                    url={
                      "https://cdn.cosmicjs.com/797b9b00-8f42-11ec-bd12-cf727cdcf55d-sala-acuario.mp4"
                    }
                    playing
                    loop={true}
                    muted={true}
                    height="auto"
                    width="100%"
                  />
                )
              }
            </div>

            <div className="banner-slide ">
              <h3>Banner principal</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur eos ipsum odio minima porro, perferendis accusantium
                magni natus voluptatum aperiam.
              </p>
              <div className="banner-info-btns">
                <a href="">Sección 1</a>
                <a href="">Sección 2</a>
                <a href="">Sección 3</a>
              </div>
            </div>
          </div>`}
        </code>
      </pre>
    </div>
  );
}
