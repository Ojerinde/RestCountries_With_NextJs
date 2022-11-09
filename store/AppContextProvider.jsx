import { useState } from "react";
import AppContext from "./AppContext";

const AppContextProvider = (props) => {
  const [background, setBackground] = useState("dark");
  const [countries, setCountries] = useState([]);

  const changeBackground = () => {
    setBackground((prev) => {
      if (prev === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  };

  const addCountries = (data) => {
    setCountries((prev) => data);
  };

  const data = {
    background,
    changeBackground,
    countries,
    addCountries,
  };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
