import { useContext } from "react";
import AppContext from "../../store/AppContext";

const Country = ({ img, name, population, region, capital }) => {
  const { background } = useContext(AppContext);
  return (
    <li
      className={`country ${
        background === "dark" ? "dark_country" : "light-country"
      }`}
    >
      <img src={img} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </li>
  );
};
export default Country;
