export default function CardGeneric() {
  const exampleCodeFontsInLine = ` <div className="cardGeneric">
  <a>
    <div
      style={{
        backgroundImage:
          "url(https://imgix.cosmicjs.com/d7ed4460-3ac6-11ed-adfd-ddb1795c6ac6-EXOPLANETAS-BANN.jpg?fit=crop&w=322&h=250)",}}>
    </div>
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
  
</div>`;

  return (
    <div className="itemCards">
      <div className="titles">
        <div className="title1">
          <h3 className="fs-5">Card Generic</h3>
        </div>
      </div>
      <hr></hr>
      <br />
      <br />
      <br />

      <div className="cardGeneric">
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

      <br />
      <br />
      <br />
    </div>
  );
}
