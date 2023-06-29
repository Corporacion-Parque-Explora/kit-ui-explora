export default function Separator() {
  return (
    <>
      <div className="item-box">
        <div className="titles">
          <div className="">
            <h3 className="title1 fs-5">Separador</h3>
          </div>
        </div>
        <div className="separator "></div>
        <div className="separator is-green"></div>
        <div className="separator is-yellow"></div>
        <div className="separator is-blue"></div>
        <pre className="code-container">
          <code>
            {
              '<div className="separator "></div>\n<div className="separator is-green"></div>\n<div className="separator is-yellow"></div>\n<div className="separator is-blue"></div>'
            }
          </code>
        </pre>
      </div>
    </>
  );
}
