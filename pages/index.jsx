import { useContext } from "react";

import Countries from "../components/Countries/Countries";
import Header from "../components/Header/Header";
import AppContext from "../store/AppContext";

const App = () => {
  const { background } = useContext(AppContext);


  return (
    <main className={background === "dark" ? "dark-mode" : "light-mode"}>
      <Header />
      <Countries />
    </main>
  );
};
export default App;
