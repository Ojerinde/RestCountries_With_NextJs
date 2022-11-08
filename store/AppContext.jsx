import React from "react";

const AppContext = React.createContext({
  background: "dark",
  changeBackground() {},
});
export default AppContext;
