import { useContext } from "react";
import AppContext from "../../store/AppContext";
import Country from "./Country";
import SearchBox from "./SearchBox";

const Countries = () => {
  const { background, countries } = useContext(AppContext);

  return (
    <section
      className={`countries ${background === "dark" ? "dark" : "light"}`}
    >
      <SearchBox />
      <ul>
        {countries.map((country) => (
          <Country
            key={country.id}
            id={country.id}
            img={country.img}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </ul>
    </section>
  );
};
export default Countries;
