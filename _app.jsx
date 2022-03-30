import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import "react-phone-number-input/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Layout } from "../components/Layout";
import { DeviceProvider } from "../contexts/DeviceContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: "1500",
    });

    window.addEventListener("load", Aos.refresh);

    return () => window.removeEventListener("load", Aos.refresh);
  }, []);

  return (
    <>
      <Head>
        <title>AppBeleza</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Autor" />
        <meta name="robots" content="index" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <meta name="description" content="descricao" />
        <meta
          property="og:description"
          content="descricao"
        />
        <meta property="og:image" itemProp="image" content="logo.png" />
        <meta property="og:title" content={"Descricao"} />
        <meta name="msapplication-TileImage" content="logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://url.com.br/" />
      </Head>

      <DeviceProvider>
        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        </LazyMotion>
      </DeviceProvider>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </>
  );
}

export default MyApp;
