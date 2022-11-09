import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "../../store/AppContext";

const Country = ({ id, img, name, population, region, capital }) => {
  const router = useRouter();
  const { background } = useContext(AppContext);
  return (
    <li
      className={`country ${
        background === "dark" ? "dark_country" : "light-country"
      }`}
      onClick={() => router.push(`/${id}`)}
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
