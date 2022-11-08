import { useState } from "react";
import AppContext from "./AppContext";

const AppContextProvider = (props) => {
  const [background, setBackground] = useState("dark");

  const changeBackground = () => {
    setBackground((prev) => {
      if (prev === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  };

  const data = {
    background,
    changeBackground,
  };

  return <AppContext.Provider value={data}>{props.children}</AppContext.Provider>;
};
export default AppContextProvider;
