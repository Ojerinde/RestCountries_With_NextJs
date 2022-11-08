import { BsMoonFill } from "react-icons/bs";

import { useContext } from "react";
import AppContext from "../../store/AppContext";

const Header = () => {
  const { background, changeBackground } = useContext(AppContext);
  return (
    <header>
      <h1>Where in the world?</h1>
      <div>
        <BsMoonFill />
        <p onClick={() => changeBackground()}>
          {background === "dark" ? "Dark" : "Light"} Mode
        </p>
      </div>
    </header>
  );
};
export default Header;
