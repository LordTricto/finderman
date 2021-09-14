import Layout from "../Components/Layout";
import "../styles/globals.css";
import "swiper/swiper.scss";
import { wrapper } from "../redux/store";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
