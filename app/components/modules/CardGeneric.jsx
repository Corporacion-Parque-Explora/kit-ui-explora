import { ButtonGeneric } from "../ui/ButtonGeneric/ButtonGeneric";
export default function CardGeneric() {
  return (
    <div className="item">
      <div className="titles">
        <div className="title1">
          <h3 className="fs-5">Card</h3>
        </div>
      </div>
      <hr></hr>
      <br />
      <br />
      <br />

      <div className="card-generic">
        <a>
          <div
            style={{
              backgroundImage:
                "url(https://imgix.cosmicjs.com/d7ed4460-3ac6-11ed-adfd-ddb1795c6ac6-EXOPLANETAS-BANN.jpg?fit=crop&w=322&h=250)",
            }}
          ></div>
        </a>

        <div className="card-generic__card-date">
          <p>19 </p>
          <p>MAY</p>
          <p></p>
        </div>
        <div className="card-generic__containerContent">
          <h3 className="card-generic__containerContent title">
            Ejemplo de titulo
          </h3>
          <p className="card-generic__containerContent info red-3 light">
            3:00 p.m.
          </p>
          <button className="btn target btn-gray hover-gray is-gray">
            VER MÀS
          </button>
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
  );
}
