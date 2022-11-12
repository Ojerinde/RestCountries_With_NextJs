import { useContext, useEffect } from "react";

import useFetch from "../hooks/useFetch";
import AppContext from "../store/AppContext";

import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

import Countries from "../components/Countries/Countries";
import Head from "next/head";

// The page is pre_generated
const App = (props) => {
  // const { addCountries } = useContext(AppContext);

  // const { isLoading, fetchRequest } = useFetch();

  // useEffect(() => {
  //   const getData = (data) => {
  //     addCountries(data);
  //   };
  //   fetchRequest({ url: "https://restcountries.com/v2/all" }, getData);
  // }, []);

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <main>
      <Head>
        <title>Country's Home</title>
        <meta name="description" content="This is the Countries home" />
      </Head>
      <Countries countries={props.countries} />
    </main>
  );
};
export default App;

export async function getStaticProps() {
  const response = await fetch("https://restcountries.com/v2/all");
  const responseBody = await response.json();
  const transformedBody = await responseBody
    .slice(0, 24)
    .map((country, index) => ({
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

  return { props: { countries: transformedBody }, revalidate: 20 };
}
