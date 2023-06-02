import ExampleCard from "./ExamplesCards";

export default function SeparatorTitle() {
  const exampleCodeFontsInLine = ` <div className="separatorTitle">
  <h2>INFORMACIÓN DE INTERÉS</h2>
  <hr />
</div>`;
  return (
    <>
      <div className="itemCards">
        <div className="titles">
          <div className="title1">
            <h3 className="fs-5">Separator Title</h3>
            <hr />
          </div>
        </div>
         <br /><br /><br /><br /><br />

        <div className="separatorTitle">
          <h2>INFORMACIÓN DE INTERÉS</h2>
          <hr />
        </div>
        <br />
        <br />
        <ExampleCard
          exampleCode={exampleCodeFontsInLine}
          language={"typescript"}
        ></ExampleCard>
      </div>
    </>
  );
}
