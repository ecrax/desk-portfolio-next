import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Header from "../components/Header";

const MyApp: AppType = ({ Component, pageProps = { title: "index" } }) => {
  return (
    <>
      <Header title={pageProps.title} />
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
