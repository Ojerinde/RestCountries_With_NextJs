import Header from "../components/Header/Header";
import AppContextProvider from "../store/AppContextProvider";

import "../styles/main.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <Header />
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}

export default MyApp;
