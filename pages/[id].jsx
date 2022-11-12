import Head from "next/head";
import Image from "next/image";

import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "../store/AppContext";

const CountryDetail = ({ country }) => {
  // The pages is pre-generated using server side generation
  // const { background, countries } = useContext(AppContext);
  const { background } = useContext(AppContext);

  const {
    // query: { id },
    push,
  } = useRouter();
  // const country = countries.find((country) => country.id === +id);

  // const borderHandler = (border) => {
  //   console.log(border);
  // };

  return (
    <>
      <Head>
        <title>{country.name}</title>
        <meta name="description" content={`This is ${country.name} home`} />
      </Head>
      
      <section className={background === "dark" ? "dark" : "light"}>
        <div className="country__details">
          <button
            onClick={() => push("/")}
            className={background === "dark" ? "btn-dark" : "btn-light"}
          >
            Go back
          </button>
          <div className="details__box">
            <figure>
              <img src={country?.img} alt={country?.nativeName} />
              {/* <Image
              src={`${country?.img}`}
              alt={country?.nativeName}
              width={450}
              height={300}
            /> */}
            </figure>
            <div>
              <h1>{country?.name}</h1>
              <div className="detail">
                <div>
                  <p>
                    Native Name: <span>{country?.nativeName}</span>
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
                    Language: <span>{country?.language}</span>
                  </p>
                  <p>
                    Top Level Domain: <span>{country?.topLevelDomain}</span>
                  </p>
                  <p>
                    Independent:
                    <span>{country?.independent ? "True" : "False"}</span>
                  </p>
                  <p>
                    TimeZone: <span>{country?.timezones}</span>
                  </p>
                </div>
              </div>
              <div className="border">
                Border Countries:
                {country?.borders?.map((coun, index) => (
                  <span key={index} onClick={() => borderHandler.bind(coun)}>
                    {coun}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CountryDetail;

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context;
  const response = await fetch(`https://restcountries.com/v2/name/${id}`);
  const responseBody = await response.json();
  const transformedBody = await responseBody.map((country, index) => ({
    id: index,
    name: country?.name,
    img: country?.flags.svg,
    capital: country?.capital ?? null,
    region: country?.region,
    subregion: country?.subregion,
    timezones: country?.timezones[0],
    population: country?.population,
    borders: country?.borders ?? null,
    nativeName: country?.nativeName,
    independent: country?.independent,
    language: country?.languages[0].name,
    topLevelDomain: country?.topLevelDomain[0],
  }));

  return { props: { country: transformedBody[0] } };
}
