import { useRouter } from "next/router";

const CountryDetail = () => {
  const {
    query: { id },
  } = useRouter();
  const country = countries.find((country) => country.id === id);

  return (
    <>
      <button>Go back</button>
      <Card></Card>
    </>
  );
};
export default CountryDetail;
