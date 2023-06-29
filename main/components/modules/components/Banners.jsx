import Banner from "../../ui/Banner/Banner";

export default function Banners() {
  return (
    <>
      <div className="main-container" id="banners">
        <div className="titles">
          <div className="">
            <h3 className="title1 fs-5">Banners</h3>
          </div>
        </div>
        <br />
        <Banner>
          <div className="banner-slide is-primary">
            <h3>Banner principal</h3>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur eos ipsum odio minima porro, perferendis accusantium
              magni natus voluptatum aperiam.
            </p>
          </div>
          <div className="banner-slide is-primary">
            <h3>Slide 2</h3>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur eos ipsum odio minima porro, perferendis accusantium
              magni natus voluptatum aperiam.
            </p>
          </div>
        </Banner>
        <br />
        <pre className="code-container">
          {'<h2 className="main-title">Información de interés</h2>'}
        </pre>
        <br />

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
            <div className="banner-simple-slide-col-2"></div>
          </div>
        </Banner>

        <Banner>
          <div className={"banner-basic  has-bg-primary"}>
            {/* <h1 className={styles.bannerMuseumTextTitle}>{data.title}</h1> */}
            <h2 className={"banner-basic-text"}>
              {` La trascendencia de un museo no se mide por el número de visitantes, sino por la conversación que genera.\n\n- Jorge Wagensberg`}
            </h2>
          </div>
        </Banner>
      </div>
    </>
  );
}
