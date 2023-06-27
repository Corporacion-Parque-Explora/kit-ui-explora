import Image from "next/image";

export const Footer = ({ openModal }) => (
  <div className={"footer"}>
    <div className={"footer-logos"}>
      <a href="https://www.parqueexplora.org/" target="_blank" rel="noreferrer">
        <Image
          src="/assets/footer/logo-ParqueExplora.svg"
          alt="Logo parque explora"
          width="162"
          height="90"
        />
      </a>
      <a
        href="https://www.planetariomedellin.org/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/footer/logo-Planetario.svg"
          alt="Logo planetario"
          width="178"
          height="72"
        />
      </a>
      <a href="https://www.parqueexplora.org/" target="_blank" rel="noreferrer">
        <Image
          src="/assets/footer/logo-Exploratorio.svg"
          alt="Logo exploratorio"
          width="233"
          height="39"
        />
      </a>
    </div>

    <div className={"footer-content"}>
      <div className={"footer-content-text"}>
        <p>
          Este sitio fue posible gracias al área de{" "}
          <span
            onClick={() => openModal(true)}
            style={{
              cursor: "pointer",
            }}
          >
            Tecnologías Interactivas
          </span>
          y al área de Diseño Gráfico.
        </p>
        <br />
      </div>
    </div>
  </div>
);
