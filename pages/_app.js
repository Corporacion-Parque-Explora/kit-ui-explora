import "@/styles/globals.scss";

import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --sora-font: ${sora.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
