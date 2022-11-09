import React from "react";

const AppContext = React.createContext({
  background: "dark",
  changeBackground() {},
  countries: [],
  addCountries: () => {},
});
export default AppContext;
