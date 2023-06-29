import Head from "next/head";
import Navbar from "../ui/Navbar/Navbar";
import styles from "./styles.module.scss";
import { Footer } from "../ui/Footer/Footer";
import Image from "next/image";
import { useState } from "react";
import VNavbar from "../ui/Navbar/VerticalNavbar";

export default function MainLayout({ children, meta = {}, navRoutes = [] }) {
  const { title, description } = meta;
  const [tiModal, setTIModal] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainContainer}>
        <Navbar routes={navRoutes} />
        <VNavbar />
        <div className={styles.mainContent}>{children}</div>
        <Footer openModal={setTIModal} />
        <div
          className={`modal modal-permanent ${tiModal ? "is-active" : ""}`}
          onClick={() => setTIModal(false)}
        >
          <div
            className="modal-background"
            onClick={() => setTIModal(false)}
          ></div>
          <Image
            alt=""
            className="ti-logo"
            src="/assets/ti_logo.png"
            width="500"
            height="500"
          />
        </div>
      </main>
    </>
  );
}
