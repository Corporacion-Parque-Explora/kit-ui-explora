import Icon1 from "/public/assets/icons/load-1.svg";
import Icon2 from "/public/assets/icons/load-2.svg";
import Icon3 from "/public/assets/icons/load-3.svg";

export default function Containers() {
  return (
    <div className="has-bg-secondary">
      <div className="has-bg-secondary">
        <br />
        <div className="container has-bg-white">
          <div className="main-title">Contenedor general</div>
          <p>
            Tiene un espaciado leve que va de la mano con la diagramción de los
            componente de la página
          </p>
          <br />
          <pre className="code-container">
            <code>
              {`<div className="container">
</div>`}
            </code>
          </pre>
          <br />
        </div>
        <br />
      </div>
      <div className="">
        <div className="main-container has-bg-white">
          <div className="main-title">Contenedor principal</div>{" "}
          <p>Tiene un padding general</p>
          <br />
          <pre className="code-container">
            <code>
              {`<div className="main-container">
</div>`}
            </code>
          </pre>
        </div>
      </div>
      <div className="has-bg-accent">
        <br />
        <div className="spaced-container has-bg-white">
          <div className="main-title">Generic Container</div>
          <pre className="code-container">
            <code>
              {`<div className="spaced-container">
</div>`}
            </code>
          </pre>
        </div>
        <br />
      </div>
      <div className="has-bg-accent">
        <div className="centered-container has-bg-white">
          <div className="main-title">Centered Container</div>
          <pre className="code-container">
            <code>
              {`<div className="centered-container">
</div>`}
            </code>
          </pre>
        </div>
      </div>
      <div className="container has-bg-white ">
        <div className="main-title">Contenedor de dos columnas</div>

        <div className="two-columns-container has-bg-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          enim, atque illo molestiae dolore adipisci cum repellendus molestias
          in quae reprehenderit sed aspernatur est fugit distinctio laborum
          aliquam temporibus iure. Natus iusto quo, magni obcaecati fugiat unde
          temporibus! Voluptate rerum numquam sit, ex, eveniet ipsum distinctio
          veniam nemo consectetur debitis earum nulla. Debitis dicta animi sequi
          modi eius, enim quas ex facilis provident eveniet, earum, dignissimos
          impedit laborum! Facere officiis delectus sapiente beatae, rem,
          deserunt unde praesentium perferendis voluptate iusto itaque nemo
          ducimus iste assumenda excepturi repellat! Iste nihil neque voluptatem
          ullam delectus mollitia perspiciatis asperiores fuga ducimus
          reprehenderit eaque autem sed eligendi, facilis officia eveniet
          explicabo unde. Veritatis, repellendus officia ut quisquam aut
          suscipit quia laboriosam autem officiis? Odit minus provident sapiente
          minima excepturi nisi? Doloribus provident sed commodi vel, optio
          velit! Ut eum consectetur dolores iste doloremque aspernatur
          obcaecati! Eius magnam modi unde facilis at mollitia ipsam aliquam
          animi inventore eaque dolor hic libero fugiat vel repudiandae quae
          officia, totam perspiciatis. Sequi ipsa labore laudantium eos vero
          officiis illum minima! Perferendis harum libero molestias aperiam rem
          error, aliquam temporibus ratione? Voluptatum necessitatibus doloribus
          quas laborum, porro, perspiciatis ratione placeat deserunt, amet
          accusamus ullam eligendi magni. Eligendi architecto illum sed labore
          quod! Voluptate dolorum assumenda, quam tenetur voluptatem repellendus
          minima aliquid tempora explicabo voluptates et iusto amet velit,
          quaerat debitis fugit vel, odit nisi asperiores impedit eos rerum. Eos
          voluptatum cum aliquam laudantium similique laboriosam officiis,
          voluptatem unde nesciunt facilis distinctio vero tenetur sapiente eius
          veritatis. Aliquam repellat, beatae veritatis tenetur sapiente facilis
          provident et amet, qui aut ea ratione quasi laboriosam accusantium
          repudiandae nulla labore quos aspernatur pariatur eveniet ullam
          reiciendis. Voluptas ducimus corrupti earum, laudantium, fuga tempora
          recusandae unde nihil vitae aliquam architecto eaque quasi esse veniam
          rerum. Voluptatibus omnis dolore animi adipisci, hic blanditiis enim
          et.
        </div>
        <br />
        <pre className="code-container">
          <code>
            {`<div className="two-columns-container">
</div>`}
          </code>
        </pre>
        <br />
      </div>
      <div className="container has-bg-white">
        <div className="main-title">Loading Container</div>
        <div className="loading-container has-bg-white">
          <Icon1 />
          <Icon2 />
          <Icon3 />
        </div>
        <pre className="code-container">
          <code>
            {`<div className="loading-container ">
    <Icon1 />
    <Icon2 />
    <Icon3 />
</div>`}
          </code>
        </pre>
        <br />
      </div>{" "}
      <div className="container has-bg-white">
        <div className="main-title">Formatear contenido</div>
        <div className="content">
          <h1>Título 1</h1>
          <h2>Título 2</h2>
          <h3>Título 3</h3>
          <h4>Título 4</h4>
          <h5>Título 5</h5>
          <h6>Título 6</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptates, quia quos voluptatem quod
            <br />
            <strong>strong</strong>
            <br />
            <em> em</em>
            <br />
            <small>small</small>
            <br />
            <b>b</b>
            <br />
            <i>i</i>
            <br />
            <u>u</u>
            <br />
            <a href="">enlace</a>
            <br />
          </p>
        </div>
        <pre className="code-container">
          <code>{`<div className="content">
      ...
</div>`}</code>
        </pre>
        <br />
      </div>
    </div>
  );
}
