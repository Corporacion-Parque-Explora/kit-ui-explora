import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function VNavbar({ button }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();
  const routes = [
    {
      name: "Base",
      path: "/base",
    },
    {
      name: "Contenedores",
      path: "/contenedores",
    },
    {
      name: "Elementos",
      path: "/elementos",
    },
    {
      name: "Componentes",
      path: "/componentes",
    },
  ];

  return (
    <>
      <div className={`navbar vnavbar ${navbarOpen ? "is-active" : ""}`}>
        <Link className="navbar-logo " href="/">
          <Image
            src="/assets/footer/logo-ParqueExplora.svg"
            alt="Logo parque explora"
            fill
            className="image"
          />
        </Link>

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
        <span className="navbar-space"></span>
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
            className={`navbar-item ${
              router?.pathname?.includes(route.path) ? "is-active" : ""
            }`}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </>
  );
}
