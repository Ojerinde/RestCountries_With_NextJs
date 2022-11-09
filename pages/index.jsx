import { useContext, useEffect } from "react";

import Countries from "../components/Countries/Countries";
import Header from "../components/Header/Header";
import useFetch from "../hooks/useFetch";
import AppContext from "../store/AppContext";

const App = () => {
  const { background, addCountries } = useContext(AppContext);

  const { isLoading, error, closeError, fetchRequest } = useFetch();

  useEffect(() => {
    const getData = (data) => {
      addCountries(data);
    };
    fetchRequest({url: 'https://restcountries.com/v2/all'}, getData);
  }, [fetchRequest]);
  return (
    <main className={background === "dark" ? "dark-mode" : "light-mode"}>
      <Header />
      <Countries />
    </main>
  );
};
export default App;

