import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();
  const routes = [
    {
      name: "Área",
      path: "/area",
    },
    {
      name: "Recursos",
      path: "/recursos",
    },
    {
      name: "Diseño",
      path: "/diseno",
    },
    {
      name: "Proyectos",
      path: "/proyectos",
    },
  ];
  return (
    <>
      <div className="item-box" id="navbar">
        <div className="titles">
          <div className="">
            <h3 className="title1 fs-5">Navbar</h3>
          </div>
        </div>
        <br />
        <>
          <div
            className={`navbar ${navbarOpen ? "is-active" : ""}`}
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <Link className="navbar-logo " href="/">
              <Image
                src="/assets/footer/logo-ParqueExplora.svg"
                alt="Logo parque explora"
                fill
                className="image"
              />
            </Link>
            <span className="navbar-space"></span>

            {routes.map((route, index) => (
              <Link
                key={index}
                href={route.path}
                className={`navbar-item ${
                  router?.pathname?.includes(route.path) ? "is-active" : ""
                }`}
              >
                {route.name}
              </Link>
            ))}
            <button
              className="navbar-icon is-mobile "
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
            ></button>
          </div>
        </>

        <br />
        <div className="titles">
          <h3 className="title1 fs-5">Navbar mobile</h3>
        </div>
        <>
          <div
            className={`navbar  is-active`}
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <span className="navbar-space"></span>

            <button
              className="navbar-icon  "
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
            ></button>
          </div>
          <div
            className="navbar-mobile "
            style={{
              position: "relative",
              width: "100%",
              display: "flex !important",
            }}
          >
            {routes.map((route, index) => (
              <Link
                key={index}
                href={route.path}
                className={`navbar-item is-active" 
                }`}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </>

        <br />
        <pre className="code-container">
          <code>
            {`   
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();
  const routes = [
    {
      name: "Seccion",
      path: "/path",
    },
  ];

  return (
    <>
      <div className={${"`"}navbar ${"${"}navbarOpen ? "is-active" : ""}${"`"}}>
        <Link className="navbar-logo " href="/">
          {/*  <Image
            alt=" "
            src={"/assets/logos/logos-o.png"}
            fill
            className="image"
          /> */}
        </Link>
        <span className="navbar-space"></span>

        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.path}
            className={${"`"}navbar-item ${"${"}
            router?.pathname?.includes(route.path) ? "is-active" : ""
          }${"`"}}
          >
            {route.name}
          </Link>
        ))}
        <button
          className="navbar-icon is-mobile "
          onClick={() => {
            setNavbarOpen(!navbarOpen);
          }}
        ></button>
      </div>
      <div
        className="navbar-mobile-bg"
        onClick={() => {
          setNavbarOpen(false);
        }}
      ></div>
      <div className="navbar-mobile ">
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.path}
            className={${"`"}navbar-item ${"${"}
            router?.pathname?.includes(route.path) ? "is-active" : ""
          }${"`"}}
          >
            {route.name}
          </Link>
        ))}
      </div>
      </>
    );`}
          </code>
        </pre>
      </div>
    </>
  );
}
