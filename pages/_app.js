import { useEffect } from "react";
import Layout from "../Components/Layout";
import "../styles/globals.css";
import "swiper/swiper.scss";
import { wrapper } from "../redux/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  const store = useStore((store) => state);
  useEffect(() => {
    window.onunload = function () {
      localStorage.removeItem("errorMessage");
    };
  }, []);
  return (
    <Layout>
      <PersistGate loading={null} persistor={store.__persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
