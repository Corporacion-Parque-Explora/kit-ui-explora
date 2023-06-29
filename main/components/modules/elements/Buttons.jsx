export default function Buttons() {
  return (
    <div className="item-box">
      <div className="titles">
        <h3 className="title1 fs-5">Botónes</h3>
      </div>

      <div className="btn-1">
        <button className="btn">Botón </button>
        <button className="btn has-border-green">Botón hover verde </button>
        <button className="btn is-green">Botón verde</button>
        <button className="btn  is-yellow">Botón amarillo</button>
        <button className="btn  is-gray">Botón gris</button>
      </div>
      <pre className="code-container">
        <code>
          {`<button className="btn">Botón </button>
<button className="btn has-border-green">Botón hover verde</button>
<button className="btn  is-yellow">Botón amarillo</button>
<button className="btn  btn-simple">Botón simple</button>
<button className="btn  is-gray">Botón gris</button>`}
        </code>
      </pre>
      <br></br>
      <hr></hr>
      <br></br>

      <div className="btn-1">
        <button className="btn btn-transparent">Botón transparente</button>
        <button className="btn  btn-simple">Botón simple</button>
        <button className="btn  no-icon">Botón sin icono</button>
        <button className="btn target is-green">Botón animación fondo</button>
      </div>

      <pre className="code-container">
        <code>
          {`<button className="btn btn-transparent">Botón 6</button>
<button className="btn  btn-simple">Botón simple</button>
<button className="btn  no-icon">Botón sin icono</button>
<button className="btn target is-green">Botón animación fondo</button>`}
        </code>
      </pre>
      <br></br>
      <hr></hr>
      <br></br>

      <div className="btn-1">
        <button className=" btn icon-whatsapp">Botón icono wa</button>
        <button className="btn icon-download">Botón icono flecha</button>
        <button className="btn icon-download icon-left">
          Botón icono izquierda
        </button>
      </div>

      <pre className="code-container">
        {`<button className="btn-explore icon-whatsapp">Botón icono wa</button> 
<button className="btn icon-download">Botón icono flecha</button>
<button className="btn icon-download icon-left">Botón icono izquierda</button>`}
      </pre>
      <br></br>
      <hr></hr>
      <br></br>

      <div className="btn-3">
        <button className="btn is-loading">Botón cargando</button>
      </div>

      <pre className="code-container">
        {`<button className="btn is-loading">Botón cargando</button>`}
      </pre>
    </div>
  );
}
