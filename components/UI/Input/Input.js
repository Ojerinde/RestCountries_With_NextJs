import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import AppContext from "../../../store/AppContext";

const Input = React.forwardRef((props, ref) => {
  const { fieldType = "input", ...others } = props;

  const { background } = useContext(AppContext);
  return (
    <>
      {fieldType === "input" ? (
        <div
          className={`input__box ${
            background === "dark" ? "input_dark" : "input_light"
          }`}
        >
          <BiSearch />
          <input {...others} ref={ref} />
        </div>
      ) : (
        <select {...others}
          className={`select__box ${
            background === "dark" ? "input_dark" : "input_light"
          }`}
        >
          <option value="" defaultValue>Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      )}
    </>
  );
});
export default Input;
