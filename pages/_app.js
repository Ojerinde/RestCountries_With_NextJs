import AppContextProvider from "../store/AppContextProvider";

import "../styles/main.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}

export default MyApp;
