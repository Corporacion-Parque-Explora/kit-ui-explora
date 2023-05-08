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
              <p className="fs-1">fs-1</p> <br />
              <br />
              <br />
              <p className="fs-2">fs-2</p> <br />
              <br />
              <br />
              <p className="fs-3">fs-3</p> <br />
              <br />
              <br />
              <p className="fs-4">fs-4</p> <br />
              <br />
              <br />
              <p className="fs-5">fs-5</p> <br />
              <br />
              <br />
            </div>
            <div className="examples-2">
              <p className="is-size-1">is-size-1</p> <br />
              <br />
              <p className="is-size-2">is-size-2</p> <br />
              <br />
              <p className="is-size-3">is-size-3</p> <br />
              <br />
              <p className="is-size-4">is-size-4</p> <br />
              <br />
              <p className="is-size-5">is-size-5</p> <br />
              <br />
            </div>
          </div>
        </div>

        <div className="item">
          <div className="titles">
            <div className="title1">
              <h3>Peso de fuente</h3>
            </div>
          </div>
          <hr></hr>

          <div className="text">
            <p>
              Clases para titulos, Ejemplo:{" "}
              {`<p> Ejemplo: <p className="fs-1"></p>`}{" "}
            </p>{" "}
            <br />
            <br />
            <p className="fs-4 is-light">is-light</p> <br />
            <br />
            <p className="fs-4 is-regular">is-regular</p> <br />
            <br />
            <p className="fs-4 is-semibold">is-semibold</p>
            <br />
            <br />
            <p className="fs-4 is-bold">is-bold</p> <br />
            <br />
            <p className="fs-4 is-extrabold">is-extrabold</p> <br />
            <br />
          </div>
        </div>

        <div className="item">
    
        </div>

      </div>
    </div>
  );
}
