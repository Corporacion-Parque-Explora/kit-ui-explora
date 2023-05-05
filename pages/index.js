import styles from "../styles/globals.scss";


export default function Home() {
  return (
    <div className="kit-ui">
      <div className="container">
        <div className="item">
          <div className="titles">
            <div className="title1">
              <h3>Titulos</h3>
            </div>

            <div className="title2">
              <h3>Textos</h3>
            </div>
          </div>
          <hr></hr>
          <div className="description">
            <p>
              Clases para titulos, Ejemplo:{" "}
              {`<p> Ejemplo: <p className="fs-1"></p>`}{" "}
            </p>
            <div>
              <p>
                Clases para titulos, Ejemplo:{" "}
                {`<p> Ejemplo: <p className="fs-1"></p>`}{" "}
              </p>
            </div>
          </div>
          <div className="examples">
            <div className="examples-1">
            <p className="fs-1">fs-1</p>
            </div>
            <div className="examples-2">sasqs</div>
          </div>

        </div>
        
      </div>
    </div>
  );
}
