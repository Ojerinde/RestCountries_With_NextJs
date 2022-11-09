import { useRouter } from "next/router";
import { useContext } from "react";
import Card from "../components/UI/Card/Card";
import AppContext from "../store/AppContext";

const CountryDetail = () => {
  const { countries } = useContext(AppContext);

  const {
    query: { id },
    push,
  } = useRouter();
  const country = countries.find((country) => country.id === +id);

  return (
    <div>
      <button onClick={() => push("/")}>Go back</button>
      <Card>
        <img src={country?.img} />
        <div>
          <h1>{country?.name}</h1>
          <div>
            <div>
              <p>
                Native Name: <span>{country?.native}</span>
              </p>
              <p>
                Population: <span>{country?.population}</span>
              </p>
              <p>
                Region: <span>{country?.region}</span>
              </p>
              <p>
                Sub Region: <span>{country?.subregion}</span>
              </p>
              <p>
                Capital: <span>{country?.capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{country?.domain}</span>
              </p>
              <p>
                Currencies: <span>{country?.currencies}</span>
              </p>
            </div>
          </div>
          <div>
            Border Countries:
            {country?.borders.map((coun, index) => (
              <span key={index}>{coun}</span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
export default CountryDetail;
