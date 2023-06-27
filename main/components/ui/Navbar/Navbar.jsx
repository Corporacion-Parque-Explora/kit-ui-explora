import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar({ routes }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className={`navbar ${navbarOpen ? "is-active" : ""}`}>
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
