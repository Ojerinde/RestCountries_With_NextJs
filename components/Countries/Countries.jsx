import { useContext } from "react";
import AppContext from "../../store/AppContext";
import Country from "./Country";
import SearchBox from "./SearchBox";

const Countries = () => {
  const { background } = useContext(AppContext);

  const countries = [
    {
      img: "",
      name: "Joel",
      population: 1000,
      region: "Nigeria",
      capital: "Abuja",
    },
    {
      img: "",
      name: "Jethro",
      population: 5000,
      region: "Nigeria",
      capital: "Abuja",
    },
    {
      img: "",
      name: "Jethro",
      population: 5000,
      region: "Nigeria",
      capital: "Abuja",
    },
    {
      img: "",
      name: "Jethro",
      population: 5000,
      region: "Nigeria",
      capital: "Abuja",
    },
    {
      img: "",
      name: "Jethro",
      population: 5000,
      region: "Nigeria",
      capital: "Abuja",
    },
    {
      img: "",
      name: "Jethro",
      population: 5000,
      region: "Nigeria",
      capital: "Abuja",
    },
    {
      img: "",
      name: "Jethro",
      population: 5000,
      region: "Nigeria",
      capital: "Abuja",
    },
    {
      img: "",
      name: "Jethro",
      population: 5000,
      region: "Nigeria",
      capital: "Abuja",
    },
  ];

  return (
    <section
      className={`countries ${background === "dark" ? "dark" : "light"}`}
    >
      <SearchBox />
      <ul>
        {countries.map((country) => (
          <Country
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
