export default function Buttons() {
  return (
    <div className="item">
      <div className="titles">
        <div className="title1">
          <h3 className="fs-5">Botones</h3>
        </div>
      </div>

      <div className="btn-1">
        <button className="btn">BOTON 1</button>
        <button className="btn has-border-green">BOTON 2</button>
        <button className="btn is-green">BOTON 3</button>
        <button className="btn  is-yellow">BOTON 4</button>
        <button className="btn  btn-simple">BOTON 5</button>
      </div>
      <div className="content">
        <div>
          <h1 className="content title">HTML</h1>
        </div>
        <div className=" content interfaz">
          <div className="subtitle">
            {' <button className="btn">BOTON 1</button>'}
          </div>
          <div className="subtitle">
            {'   <button className="btn has-border-green">BOTON 2</button>'}
          </div>

          <div className="subtitle">
            {'      <button className="btn is-green">BOTON 3</button>'}
          </div>

          <div className="subtitle">
            {'  <button className="btn  is-yellow">BOTON 4</button>'}
          </div>

          <div className="subtitle">
            {'<button className="btn  btn-simple">BOTON 5</button>'}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>

      <div className="btn-2">
        <button className="btn btn-transparent">BOTON 6</button>
      </div>
      <div className="content">
        <div>
          <h1 className="content title">HTML</h1>
        </div>
        <div className=" content interfaz">
          <div className="subtitle">
            {'<button className="btn btn-transparent">BOTON 6</button>'}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>

      <div className="btn-3">
        <button className=" btn icon-whatsapp">BOTON 7</button>
        <button className="btn icon-download">BOTON 8</button>
        <button className="btn icon-download icon-left">BOTON 9</button>
      </div>
      <div className="content">
        <div>
          <h1 className="content title">HTML</h1>
        </div>
        <div className=" content interfaz">
          <div className="subtitle">
            {'<button className="btn-explore icon-whatsapp">BOTON 7</button>'}
            <br />
            <br />
            {
              '<button className="btn icon-download">BOTON 8</button>'
            }{" "}
            <br />
            <br />
            {
              '<button className="btn icon-download icon-left">BOTON 9</button>'
            }
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <hr></hr>
      <br></br>

      <div className="btn-3">
        <button className="btn is-green no-icon">BOTON 10</button>

        <button className="btn is-gray no-icon">BOTON GRAY</button>
      </div>
      <div className="content">
        <div>
          <h1 className="content title">HTML</h1>
        </div>
        <div className=" content interfaz">
          <div className="subtitle">
            {'<button className="btn is-green no-icon">BOTON 10</button>'} <br /> <br />
            {' <button className="btn is-gray no-icon"> </button>'}
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="btn-3">
        <button className="btn target">BOTON 11</button>
      </div>
      <div className="content">
        <div>
          <h1 className="content title">HTML</h1>
        </div>
        <div className=" content interfaz">
          <div className="subtitle">
            {'<button className="btn target">BOTON 11</button>'}
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="btn-3">
        <button className="btn hover-gray">BOTON 12</button>
        <button className="btn no-icon">BOTON 13</button>
      </div>

      <div className="content">
        <div>
          <h1 className="content title">HTML</h1>
        </div>
        <div className=" content interfaz">
          <div className="subtitle">
            {'<button className="btn-explore hover-dark">BOTON 12</button>'}{" "}
            <br></br>
            <br></br>
            {'<button className="btn-explore no-icon">BOTON 13</button>'}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>

      <div className="btn-3">
        <button className="btn is-loading">BOTON 14</button>
      </div>
      <div className="content">
        <div>
          <h1 className="content title">HTML</h1>
        </div>
        <div className=" content interfaz">
          <div className="subtitle">
            {'<button className="btn is-loading">BOTON 14</button>'}
          </div>
        </div>
      </div>
    </div>
  );
}
