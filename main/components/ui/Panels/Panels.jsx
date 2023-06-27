import Link from 'next/link';

export const Panels = ({ data }) => (
  <div className="panels">
    <>
      <div className="panelsOne" key={data[0].title}>
        <div className="panelsOneText">
          <h2 className="panelsOneTextTitle1">{data[0].title}</h2>
          <br />
          <div className="panelsOneTextBtn1">
            <Link href={`/escuela/${data[0]?.link}`} legacyBehavior>
              <a className="btn-escuela-OutLine white">VER MÁS</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="panelsTwo" key={data[1].title}>
        <div className="panelsTwoText2">
          <h2 className="panelsTwoText2Title2">{data[1].title}</h2>
          <br />
          <div className="panelsTwoText2Btn2">
            <Link href={`/escuela/${data[1]?.link}`} legacyBehavior>
              <a className="btn-escuela-OutLine white">VER MÁS</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  </div>
);
