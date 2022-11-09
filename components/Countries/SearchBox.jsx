import { useContext, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import AppContext from "../../store/AppContext";
import Input from "../UI/Input/Input";

const SearchBox = () => {
  const nameRef = useRef("");
  const { addCountries } = useContext(AppContext);

  const { fetchRequest } = useFetch();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    fetchRequest(
      { url: `https://restcountries.com/v2/name/${name}` },
      addCountries
    );
  };

  const selectHandler = (e) => {
    const region = e.target.value
    fetchRequest(
      { url: `https://restcountries.com/v2/region/${region}` },
      addCountries
    );
  };

  return (
    <form onSubmit={submitHandler} className="search__box">
      <Input type="text" ref={nameRef} placeholder="Enter a country" />
      <Input onChange={selectHandler} fieldType="select" />
    </form>
  );
};
export default SearchBox;
